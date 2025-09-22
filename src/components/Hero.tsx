import { Button } from "./ui/button";
import { ArrowRight, TrendingUp, Sparkles, Zap, Activity, Heart } from "lucide-react";
import { motion } from "motion/react";
import givebackLogo from "figma:asset/00a6b2f019c79970e333581332d4ae51e66725fe.png";
import { ParticleBackground } from "./ParticleBackground";
import { AnimatedCounter } from "./AnimatedCounter";
import { useMarketData } from "./MarketDataContext";
import headerVideo from "../assets/header video.mp4";

export function Hero() {
  const { marketData, isLoading } = useMarketData();
  const formatCurrency = (value: number) => {
    if (!value || value <= 0) return "$0";
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    } else {
      return `$${value.toFixed(0)}`;
    }
  };
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-background via-green-50/30 to-blue-50/30 relative overflow-hidden min-h-screen flex items-center">
      <ParticleBackground />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1.5, 1, 1.5],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border border-green-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-4 h-4 mr-2 animate-pulse" />
                $GBACK — Humanitarian Aid Through Community
                <Sparkles className="w-4 h-4 ml-2" />
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <motion.img 
                  src={givebackLogo} 
                  alt="GiveBack Coin" 
                  className="h-16 md:h-20 w-auto"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Give Back Coin{" "}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  $GBACK
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Powering humanitarian aid through community and transparency. 
                <strong className="text-green-600"> 50%+ of creator rewards</strong> fund disaster relief, hunger prevention, and homelessness support.
              </motion.p>
            </div>

            {/* Stats (live-only) */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* Removed Liquidity card */}
              
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">
                      {formatCurrency(marketData.volume24hUsd)}
                    </div>
                    <span className="text-sm font-medium text-foreground">24h Volume</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">{formatCurrency(marketData.marketCapUsd)}</div>
                    <span className="text-sm font-medium text-foreground">Market Cap</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg border-0 relative overflow-hidden group px-8 py-4"
                  asChild
                >
                  <a href="https://pump.fun/coin/Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      animate={{
                        x: [-100, 100],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span className="relative z-10 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Buy $GBACK
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 shadow-lg px-8 py-4"
                  asChild
                >
                  <a href="#about">
                    Learn More
                    <Sparkles className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Token Address */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border-2 border-gray-700 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-gray-300">Contract Address:</p>
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
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
                <code className="text-sm font-mono text-green-400 break-all bg-gray-800/50 p-2 rounded border block">
                  Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump
                </code>
                <p className="text-xs text-gray-400 mt-2">✓ $GBACK Token • ✓ 1B Total Supply • ✓ 50%+ Creator Rewards to Humanitarian Fund</p>
                <p className="text-xs text-gray-400 mt-2">✓ Verified on Solana • ✓ Liquidity Locked</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Media (video) */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-200 shadow-2xl border-4 border-white/50"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <video
                src={headerVideo}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent" />
            </motion.div>
            
            {/* Floating cards with enhanced animations */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border-2 border-green-200"
              initial={{ opacity: 0, y: -20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
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
                <span className="text-sm font-medium text-foreground">Live Impact</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border-2 border-blue-200"
              initial={{ opacity: 0, y: 20, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <div className="text-center">
                <p className="text-sm text-muted-foreground">People Helped</p>
                <p className="text-xl font-bold text-green-600">
                  <AnimatedCounter end={156} suffix="+" />
                </p>
              </div>
            </motion.div>

            {/* Additional floating elements */}
            <motion.div
              className="absolute top-1/4 -left-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute bottom-1/4 -right-2 w-6 h-6 bg-purple-400 rounded-full shadow-lg"
              animate={{
                y: [0, 15, 0],
                x: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}