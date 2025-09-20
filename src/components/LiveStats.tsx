import { motion } from "motion/react";
import { TrendingUp, Activity, DollarSign } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AnimatedCounter } from "./AnimatedCounter";
import { useEffect, useMemo, useState } from "react";
import { useMarketData } from "./MarketDataContext";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import * as Recharts from "recharts@2.15.2";

export function LiveStats() {
  const [isVisible, setIsVisible] = useState(false);
  const { marketData, isLoading, marketCapSource } = useMarketData() as any;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    } else {
      return `$${value.toFixed(0)}`;
    }
  };

  const stats = [
    {
      icon: TrendingUp,
      label: marketCapSource === 'fdv' ? "FDV (fallback)" : "Market Cap",
      value: marketData.marketCapUsd,
      prefix: "$",
      suffix: "",
      displayValue: formatCurrency(marketData.marketCapUsd),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Activity,
      label: "Total Trades",
      value: marketData.recentTrades,
      prefix: "$",
      suffix: "",
      displayValue: marketData.recentTrades.toLocaleString(),
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: DollarSign,
      label: "24h Volume",
      value: marketData.volume24hUsd,
      prefix: "",
      suffix: "",
      displayValue: formatCurrency(marketData.volume24hUsd),
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const availableStats = stats.filter((s) => typeof s.value === 'number' && s.value > 0);

  // Sparkline data from context history
  const { priceHistory } = useMarketData();
  const sparkData = useMemo(() => {
    return priceHistory.map((p) => ({ time: p.t, price: p.priceUsd }));
  }, [priceHistory]);

  return (
    <section className="py-16 bg-gradient-to-br from-background via-green-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Live <span className="text-green-600">Market</span> Data
            </h2>
            <motion.div
              className="w-3 h-3 rounded-full bg-green-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time market data with live SOL price from CoinGecko
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-sm mt-4">
            <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
            {marketData.solPriceUsd > 0 ? (
              <>
                SOL Price: ${marketData.solPriceUsd.toFixed(2)} •
                <span className={`ml-1 ${marketData.priceChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {marketData.priceChange24h >= 0 ? '↗' : '↘'} {Math.abs(marketData.priceChange24h).toFixed(1)}%
                </span>
              </>
            ) : (
              <span>Fetching live SOL price…</span>
            )}
          </div>
          {sparkData.length > 1 && (
            <div className="mt-6">
              <ChartContainer
                className="w-full h-24"
                config={{ price: { label: "Price", color: "#16a34a" } }}
              >
                <Recharts.AreaChart data={sparkData} margin={{ left: 0, right: 0, top: 4, bottom: 0 }}>
                  <defs>
                    <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Recharts.YAxis domain={["auto", "auto"]} hide />
                  <Recharts.XAxis dataKey="time" hide type="number" domain={["dataMin", "dataMax"]} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Recharts.Area type="monotone" dataKey="price" stroke="#16a34a" fill="url(#spark)" strokeWidth={2} dot={false} />
                </Recharts.AreaChart>
              </ChartContainer>
            </div>
          )}
        </motion.div>

        {isLoading || availableStats.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            Waiting for live market data…
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {availableStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "backOut",
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="border-2 border-transparent hover:border-green-200 transition-all duration-300 group relative overflow-hidden">
                <CardContent className="p-6 text-center relative z-10" title={typeof stat.value === 'number' ? `$${stat.value.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : undefined}>
                  <motion.div
                    className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {isVisible && (
                        stat.displayValue || (
                          <AnimatedCounter
                            end={stat.value}
                            duration={2}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                          />
                        )
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
                
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>
        )}

        {/* Removed non-live metrics like holders */}
      </div>
    </section>
  );
}