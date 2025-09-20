import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface MarketData {
  marketCapSol: number;
  marketCapUsd: number;
  solPriceUsd: number;
  liquidity: number;
  liquidityUsd: number;
  recentTrades: number;
  lastTradeAmount: number;
  volume24h: number;
  volume24hUsd: number;
  priceChange24h: number;
  holders: number;
}

interface PricePoint {
  t: number; // unix ms
  priceUsd: number;
}

interface MarketDataContextType {
  marketData: MarketData;
  isLoading: boolean;
  priceHistory: PricePoint[];
  marketCapSource: 'marketCap' | 'fdv' | 'unknown';
}

const MarketDataContext = createContext<MarketDataContextType | undefined>(undefined);

export function MarketDataProvider({ children }: { children: ReactNode }) {
  const [solPrice, setSolPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  // GiveBack Coin mint address on Solana (pump.fun) - configurable via env
  const TOKEN_MINT = (import.meta as any)?.env?.VITE_TOKEN_MINT || 'Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump';
  const MARKET_CAP_MODE: 'marketCap' | 'fdv' = ((import.meta as any)?.env?.VITE_MARKET_CAP_MODE === 'marketCap') ? 'marketCap' : 'fdv';

  // Initialize with zeros; will be replaced by live API values
  const [marketData, setMarketData] = useState<MarketData>({
    marketCapSol: 0,
    marketCapUsd: 0,
    solPriceUsd: 0,
    liquidity: 0,
    liquidityUsd: 0,
    recentTrades: 0,
    lastTradeAmount: 0,
    volume24h: 0,
    volume24hUsd: 0,
    priceChange24h: 0,
    holders: 0
  });
  const [priceHistory, setPriceHistory] = useState<PricePoint[]>([]);
  const [marketCapSource, setMarketCapSource] = useState<'marketCap' | 'fdv' | 'unknown'>('unknown');

  // Generic fetch with retry and timeout
  const fetchWithRetry = async (url: string, options: RequestInit = {}, attempts = 3, backoffMs = 600): Promise<Response> => {
    let lastError: unknown = null;
    for (let i = 0; i < attempts; i++) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      try {
        const resp = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(timeout);
        if (!resp.ok) {
          lastError = new Error(`HTTP ${resp.status}`);
        } else {
          return resp;
        }
      } catch (err) {
        lastError = err;
      }
      // exponential backoff
      await new Promise(res => setTimeout(res, backoffMs * Math.pow(2, i)));
    }
    throw lastError instanceof Error ? lastError : new Error('Request failed');
  };

  // Fetch real SOL price from CoinGecko (used for SOL conversions)
  useEffect(() => {
    let isMounted = true;
    const fetchSolPrice = async () => {
      try {
        const response = await fetchWithRetry('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await response.json();
        const currentSolPrice = data.solana?.usd || 0;
        if (!isMounted) return;
        setSolPrice(currentSolPrice);
        setMarketData(prev => ({
          ...prev,
          solPriceUsd: currentSolPrice
        }));
      } catch (error) {
        console.error('Failed to fetch SOL price:', error);
      }
    };

    fetchSolPrice();
    const interval = setInterval(fetchSolPrice, 5 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Fetch real token metrics from DexScreener and build a small price history
  useEffect(() => {
    let isMounted = true;

    const fetchDexData = async () => {
      try {
        const response = await fetchWithRetry(`https://api.dexscreener.com/latest/dex/tokens/${TOKEN_MINT}`);
        const data = await response.json();
        const allPairs: any[] = Array.isArray(data?.pairs) ? data.pairs : [];
        // Prefer Solana pairs where the token is the base token, then pick with non-zero USD liquidity, then by highest liquidity, then highest volume
        const solBasePairs = allPairs.filter((p: any) => p?.chainId === 'solana' && p?.baseToken?.address === TOKEN_MINT);
        const solPairs = allPairs.filter((p: any) => p?.chainId === 'solana');
        const pool = (solBasePairs.length > 0 ? solBasePairs : solPairs);
        const nonZeroLiq = pool.filter((p: any) => (p?.liquidity?.usd ?? 0) > 0);
        const ranked = (nonZeroLiq.length > 0 ? nonZeroLiq : pool).sort((a: any, b: any) => {
          const liqA = a?.liquidity?.usd ?? 0;
          const liqB = b?.liquidity?.usd ?? 0;
          if (liqB !== liqA) return liqB - liqA;
          const volA = a?.volume?.h24 ?? 0;
          const volB = b?.volume?.h24 ?? 0;
          return volB - volA;
        });
        const pair = ranked[0];
        if (!pair) {
          console.warn('No DexScreener pair data available for token');
          if (isMounted) setIsLoading(false);
          return;
        }

        // Liquidity USD: use reported value, else derive from reserves
        let liquidityUsd: number = pair?.liquidity?.usd ?? 0;
        if (!liquidityUsd || liquidityUsd <= 0) {
          const baseAmt: number = pair?.liquidity?.base ?? 0;
          const quoteAmt: number = pair?.liquidity?.quote ?? 0;
          const tokenIsBase = pair?.baseToken?.address === TOKEN_MINT;
          const tokenIsQuote = pair?.quoteToken?.address === TOKEN_MINT;
          const priceUsd: number = pair?.priceUsd ? Number(pair.priceUsd) : 0; // price of base token in USD
          const isQuoteSol = pair?.quoteToken?.symbol === 'SOL' || pair?.quoteToken?.address === 'So11111111111111111111111111111111111111112';
          const isBaseSol = pair?.baseToken?.symbol === 'SOL' || pair?.baseToken?.address === 'So11111111111111111111111111111111111111112';

          const currentSolPrice = solPrice > 0 ? solPrice : marketData.solPriceUsd;

          let baseUsd = 0;
          let quoteUsd = 0;
          if (priceUsd > 0) {
            // priceUsd refers to base token
            baseUsd = baseAmt * priceUsd;
          }
          if (currentSolPrice > 0 && (isQuoteSol || isBaseSol)) {
            // whichever side is SOL, convert at SOL price
            if (isQuoteSol) quoteUsd = quoteAmt * currentSolPrice;
            if (isBaseSol) baseUsd = baseUsd || (baseAmt * currentSolPrice);
          }
          if (baseUsd > 0 || quoteUsd > 0) {
            liquidityUsd = baseUsd + quoteUsd;
          }
        }
        // Prefer reported marketCap; fall back to FDV only if marketCap missing
        const reportedMarketCap: number = pair?.marketCap ?? 0;
        const reportedFdv: number = pair?.fdv ?? 0;
        const preferFdv = MARKET_CAP_MODE === 'fdv';
        const marketCapUsd: number = preferFdv
          ? ((reportedFdv > 0 ? reportedFdv : reportedMarketCap))
          : ((reportedMarketCap > 0 ? reportedMarketCap : reportedFdv));
        const volume24hUsd: number = pair?.volume?.h24 ?? 0;
        const priceChange24h: number = pair?.priceChange?.h24 ?? 0;
        const recentTrades: number = ((pair?.txns?.h24?.buys ?? 0) + (pair?.txns?.h24?.sells ?? 0));
        const priceUsd: number = pair?.priceUsd ? Number(pair.priceUsd) : 0;

        const currentSolPrice = solPrice > 0 ? solPrice : marketData.solPriceUsd;
        const liquiditySol = currentSolPrice > 0 ? liquidityUsd / currentSolPrice : 0;
        const marketCapSol = currentSolPrice > 0 ? marketCapUsd / currentSolPrice : 0;
        const volume24hSol = currentSolPrice > 0 ? volume24hUsd / currentSolPrice : 0;

        if (!isMounted) return;
        setMarketData(prev => ({
          ...prev,
          marketCapUsd,
          marketCapSol,
          liquidityUsd,
          liquidity: liquiditySol,
          volume24hUsd,
          volume24h: volume24hSol,
          recentTrades,
          priceChange24h
        }));
        // Track which source is actually used for display
        const usedSource: 'marketCap' | 'fdv' | 'unknown' = marketCapUsd === 0
          ? 'unknown'
          : (preferFdv
              ? (reportedFdv > 0 ? 'fdv' : 'marketCap')
              : (reportedMarketCap > 0 ? 'marketCap' : 'fdv'));
        setMarketCapSource(usedSource);
        if (priceUsd > 0) {
          setPriceHistory(prev => {
            const next = [...prev, { t: Date.now(), priceUsd }];
            // keep last 60 points (~1h if 1m interval)
            return next.slice(-60);
          });
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch DexScreener data:', error);
        if (isMounted) setIsLoading(false);
      }
    };

    fetchDexData();
    const interval = setInterval(fetchDexData, 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [solPrice]);

  return (
    <MarketDataContext.Provider value={{ marketData, isLoading, priceHistory }}>
      {children}
    </MarketDataContext.Provider>
  );
}

export function useMarketData() {
  const context = useContext(MarketDataContext);
  if (context === undefined) {
    throw new Error('useMarketData must be used within a MarketDataProvider');
  }
  return context;
}