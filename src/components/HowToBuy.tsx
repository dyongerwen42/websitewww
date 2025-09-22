import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Wallet, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export function HowToBuy() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const contractAddress = "Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump";

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const steps = [
    {
      number: "1",
      title: "Get a Solana Wallet",
      description: "Download Phantom, Solflare, or any Solana-compatible wallet",
      action: "Download Phantom",
      link: "https://phantom.app/"
    },
    {
      number: "2",
      title: "Buy Solana (SOL)",
      description: "Purchase SOL from an exchange like Coinbase, Binance, or directly in Phantom",
      action: "Buy SOL",
      link: "https://coinbase.com"
    },
    {
      number: "3",
      title: "Connect to Pump.fun",
      description: "Visit pump.fun and connect your Solana wallet",
      action: "Go to Pump.fun",
      link: "https://pump.fun"
    },
    {
      number: "4",
      title: "Find $GBACK",
      description: "Search for our contract address or use the direct link",
      action: "Buy $GBACK",
      link: "https://pump.fun/coin/Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump"
    }
  ];

  return (
    <section id="buy" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How to <span className="text-green-600">Buy $GBACK</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community and start making a difference with every transaction. 
            $GBACK powers humanitarian aid through 50%+ creator rewards to the Give Back Fund.
          </p>
        </div>

        {/* Contract Address Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Wallet className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-foreground">Contract Address</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Verified</Badge>
                </div>
                <div className="bg-white rounded-lg p-4 border">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono text-foreground break-all mr-2">
                      {contractAddress}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyAddress}
                      className="flex-shrink-0"
                    >
                      {copiedAddress ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={step.number} className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.number}
                </div>
                <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={step.link} target="_blank" rel="noopener noreferrer">
                    {step.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Buy Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Power Humanitarian Aid?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Every $GBACK purchase contributes to disaster relief, hunger prevention, and homelessness support. 
            Join our community-driven movement where 50%+ of creator rewards fund global causes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              asChild
              className="bg-white text-green-700 hover:bg-gray-100"
            >
              <a href="https://pump.fun/coin/Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump" target="_blank" rel="noopener noreferrer">
                Buy on Pump.fun
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10"
            >
              <a href="https://x.com/givebackcoin?s=21&t=nQKv8nhZ8V_v1W_YNTY9_w" target="_blank" rel="noopener noreferrer">
                Follow on Twitter
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> Cryptocurrency investments carry risk. Only invest what you can afford to lose. 
            Give Back Coin $GBACK is a community project focused on humanitarian aid through creator rewards. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}