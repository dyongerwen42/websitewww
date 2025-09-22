import { motion } from "motion/react";
import { Heart, Shield, Users, Target, Globe, Zap, TrendingUp, Award } from "lucide-react";

export function Whitepaper() {
  const keyStats = [
    { icon: Heart, label: "50%+ Creator Rewards", value: "Humanitarian Fund", color: "text-red-500" },
    { icon: Shield, label: "Blockchain Transparency", value: "Public Wallets", color: "text-blue-500" },
    { icon: Users, label: "Community Governance", value: "Token Holder Voting", color: "text-green-500" },
    { icon: Globe, label: "Global Impact", value: "Disaster Relief", color: "text-purple-500" }
  ];

  return (
    <section id="whitepaper" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-green-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header with Enhanced Design */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 shadow-lg"
            >
              <Award className="w-5 h-5 mr-2 text-green-600" />
              <span className="font-semibold text-green-800">Official Whitepaper</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Give Back Coin
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-muted-foreground font-normal">$GBACK</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Powering Humanitarian Aid Through Community and Transparency
            </p>
            
            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {keyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Abstract - Featured Section */}
            <motion.section 
              aria-labelledby="wp-abstract" 
              className="bg-gradient-to-br from-white via-green-50/50 to-blue-50/50 backdrop-blur-sm border-2 border-green-200 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <h3 id="wp-abstract" className="text-2xl font-bold text-foreground">Abstract</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every year, millions are impacted by disasters, hunger, and homelessness. Traditional aid systems are often slow, inefficient, and lacking transparency. <strong className="text-green-600">Give Back Coin $GBACK</strong> introduces a new way forward: a cryptocurrency designed to channel sustainable funding into humanitarian projects through creator rewards and community-driven governance. With over <strong className="text-blue-600">50% of rewards directed to impact funds</strong> and a public donation wallet, Give Back Coin ensures that resources reach those in need while every transaction remains visible on the blockchain.
                </p>
              </div>
            </motion.section>

            {/* Introduction Section */}
            <motion.section 
              aria-labelledby="wp-intro" 
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h3 id="wp-intro" className="text-2xl font-bold text-foreground">1. Introduction</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-foreground font-bold text-lg mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      1.1 Mission Statement
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To create a transparent, community-driven financial ecosystem that turns every transaction into meaningful support for disaster relief, hunger prevention, and homelessness initiatives.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-foreground font-bold text-lg mb-3 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-blue-600" />
                      1.2 Vision
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To establish Give Back Coin as the world's leading humanitarian cryptocurrency, empowering people everywhere to contribute to change with every trade, hold, or donation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Problem Section */}
            <motion.section 
              aria-labelledby="wp-problem" 
              className="bg-gradient-to-br from-red-50/50 to-orange-50/50 backdrop-blur-sm border border-red-200 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 id="wp-problem" className="text-2xl font-bold text-foreground">2. The Problem</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/80 rounded-xl p-6 border border-red-200">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Lack of Transparency</h4>
                  <p className="text-sm text-muted-foreground">Donors often don't know where their money goes.</p>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6 border border-orange-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Slow Aid Response</h4>
                  <p className="text-sm text-muted-foreground">Relief funds are delayed by bureaucracy.</p>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6 border border-yellow-200">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Unsustainable Models</h4>
                  <p className="text-sm text-muted-foreground">Traditional donations dry up after initial attention fades.</p>
                </div>
              </div>
            </motion.section>

            {/* Solution Section - Featured */}
            <motion.section 
              aria-labelledby="wp-solution" 
              className="bg-gradient-to-br from-green-100 via-blue-50 to-purple-50 backdrop-blur-sm border-2 border-green-300 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-20 -translate-x-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 id="wp-solution" className="text-3xl font-bold text-foreground">3. The Solution: Give Back Coin</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white/90 rounded-xl p-6 border border-green-200 shadow-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <Heart className="w-4 h-4 text-red-600" />
                        </div>
                        <h4 className="text-foreground font-bold text-lg">Creator Rewards for Impact</h4>
                      </div>
                      <p className="text-muted-foreground">50%+ of token creator rewards are allocated to the Give Back Fund, ensuring continuous support for global causes.</p>
                    </div>
                    
                    <div className="bg-white/90 rounded-xl p-6 border border-blue-200 shadow-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-blue-600" />
                        </div>
                        <h4 className="text-foreground font-bold text-lg">Public Donation Wallet</h4>
                      </div>
                      <p className="text-muted-foreground">A fully transparent wallet where anyone can contribute directly. Every transaction is visible on-chain.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/90 rounded-xl p-6 border border-purple-200 shadow-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-purple-600" />
                        </div>
                        <h4 className="text-foreground font-bold text-lg">Community-Driven Governance</h4>
                      </div>
                      <p className="text-muted-foreground">Token holders vote on which nonprofits and projects to support, ensuring the community drives impact.</p>
                    </div>
                    
                    <div className="bg-white/90 rounded-xl p-6 border border-green-200 shadow-sm">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-green-600" />
                        </div>
                        <h4 className="text-foreground font-bold text-lg">Immediate & Long-Term Aid</h4>
                      </div>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>• Emergency disaster relief</li>
                        <li>• Food drives and hunger prevention</li>
                        <li>• Shelter building and long-term homeless support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Tokenomics Section */}
            <motion.section 
              aria-labelledby="wp-tokenomics" 
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h3 id="wp-tokenomics" className="text-2xl font-bold text-foreground">4. Tokenomics</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <h4 className="text-lg font-bold text-foreground mb-4">Total Supply</h4>
                    <div className="text-3xl font-bold text-purple-600 mb-2">1 Billion GBC</div>
                    <p className="text-sm text-muted-foreground">$GBACK tokens on Solana blockchain</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground mb-4">Allocation Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-red-50 rounded-lg p-4 border border-red-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <span className="font-medium text-foreground">Creator Rewards</span>
                      </div>
                      <span className="font-bold text-red-600">50%+</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                        <span className="font-medium text-foreground">Public Sale</span>
                      </div>
                      <span className="font-bold text-blue-600">25%</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-foreground">Reserve Fund</span>
                      </div>
                      <span className="font-bold text-green-600">20%</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                        <span className="font-medium text-foreground">Development Team</span>
                      </div>
                      <span className="font-bold text-purple-600">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <section aria-labelledby="wp-funds" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-funds" className="text-xl font-semibold text-foreground mb-2">5. Use of Funds</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Disaster Relief: Rapid response funding for crises.</li>
                <li>Food Security: Partnerships with food banks & community kitchens.</li>
                <li>Homelessness Support: Shelters, training, and long-term recovery programs.</li>
              </ul>
            </section>

            <section aria-labelledby="wp-tech" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-tech" className="text-xl font-semibold text-foreground mb-2">6. Technology</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Blockchain: Built on Solana for scalability, speed, and low fees.</li>
                <li>Transparency: All wallets (including donation wallet and reserve) are public and verifiable on-chain.</li>
                <li>Smart Contracts: Automate allocation and payouts with no intermediaries.</li>
              </ul>
            </section>

            <section aria-labelledby="wp-gov" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-gov" className="text-xl font-semibold text-foreground mb-2">7. Governance</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Community Voting: GBC holders decide which organizations and causes to fund.</li>
                <li>On-Chain Proposals: Anyone can propose vetted projects for funding consideration.</li>
              </ul>
            </section>

            <section aria-labelledby="wp-roadmap" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-roadmap" className="text-xl font-semibold text-foreground mb-2">8. Roadmap</h3>
              <div className="text-muted-foreground space-y-3">
                <div>
                  <p className="font-medium text-foreground">Phase 1: Launch & Awareness (Months 1–6)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Finalize smart contracts</li>
                    <li>Launch ICO & donation wallet</li>
                    <li>Secure first nonprofit partnerships</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">Phase 2: Platform Growth (Months 7–12)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Begin funding pilot projects</li>
                    <li>Build community governance system</li>
                    <li>Expand marketing & partnerships</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">Phase 3: Expansion (Year 2)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Scale partnerships with global nonprofits</li>
                    <li>Launch disaster relief rapid response fund</li>
                    <li>Grow community adoption worldwide</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground">Phase 4: Long-Term Sustainability (Years 3+)</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Strengthen reserve fund</li>
                    <li>Expand into global humanitarian networks</li>
                    <li>Continuously scale operations and impact</li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="wp-investors" className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl p-6 shadow-lg">
              <h3 id="wp-investors" className="text-xl font-semibold text-foreground mb-2">9. Benefits to Investors</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Financial Upside: Potential token appreciation + staking incentives.</li>
                <li>Social Impact: Every transaction contributes to humanitarian causes.</li>
                <li>Governance Rights: Direct voting power to shape global impact.</li>
              </ul>
            </section>

            {/* Conclusion Section - Featured */}
            <motion.section 
              aria-labelledby="wp-conclusion" 
              className="bg-gradient-to-br from-green-100 via-blue-50 to-purple-50 backdrop-blur-sm border-2 border-green-300 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 id="wp-conclusion" className="text-3xl font-bold text-foreground">10. Conclusion</h3>
                </div>
                
                <div className="bg-white/90 rounded-xl p-8 border border-green-200 shadow-sm">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Give Back Coin transforms how the world funds relief and humanitarian aid. By combining blockchain transparency, community power, and sustainable funding through creator rewards, <strong className="text-green-600">$GBACK</strong> ensures that help reaches those who need it most. Together, we can build a global movement where every transaction creates hope.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Transparent Impact</h4>
                      <p className="text-sm text-muted-foreground">Every transaction visible on blockchain</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Community Driven</h4>
                      <p className="text-sm text-muted-foreground">Token holders decide funding priorities</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Global Reach</h4>
                      <p className="text-sm text-muted-foreground">Disaster relief worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div 
              className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Join the Humanitarian Revolution?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Be part of the movement that's transforming cryptocurrency into a force for global good. 
                Every $GBACK transaction contributes to disaster relief, hunger prevention, and homelessness support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#buy" 
                  className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Buy $GBACK Now
                </a>
                <a 
                  href="#whitepaper" 
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


