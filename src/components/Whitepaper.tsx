import { motion } from "motion/react";
import { Heart, Shield, Users, Target, Globe, Zap, TrendingUp, Award, Truck, Home, PawPrint, AlertCircle, Lock, CheckCircle2 } from "lucide-react";

export function Whitepaper() {
  const keyStats = [
    { icon: Heart, label: "50% Creator Rewards", value: "Donations & Impact", color: "text-red-500" },
    { icon: Lock, label: "30% Buyback & Lock", value: "Streamflow ≥1 year", color: "text-blue-500" },
    { icon: Shield, label: "Livestream Transparency", value: "All Projects Broadcast", color: "text-green-500" },
    { icon: Globe, label: "Global Network", value: "Worldwide Relief", color: "text-purple-500" }
  ];

  return (
    <section id="whitepaper" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-green-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
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
                GIVEBACK
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-muted-foreground font-normal">Whitepaper ($GBACK)</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A humanitarian-focused cryptocurrency designed to transform blockchain rewards into real-world impact. Our mission is to eliminate hunger, provide housing and financial assistance, and deliver fast, transparent disaster relief globally.
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
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  GIVEBACK is a humanitarian-focused cryptocurrency designed to transform blockchain rewards into real-world impact. Our mission is to eliminate hunger, provide housing and financial assistance, and deliver fast, transparent disaster relief globally.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Powered by blockchain transparency and livestreamed accountability, <strong className="text-green-600">$GBACK</strong> aims to create the world's largest humanitarian and disaster relief network—connecting donors, creators, and communities for maximum impact.
                </p>
              </div>
            </motion.section>

            {/* Mission Section */}
            <motion.section 
              aria-labelledby="wp-mission" 
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h3 id="wp-mission" className="text-2xl font-bold text-foreground">Mission</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Leverage blockchain technology to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong className="text-foreground">End hunger</strong></span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Reduce homelessness</strong></span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Provide rapid disaster relief</strong></span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Create sustainable support systems</strong> for families, communities, and animals in need worldwide</span>
                </div>
              </div>
            </motion.section>

            {/* Vision Section */}
            <motion.section 
              aria-labelledby="wp-vision-new" 
              className="bg-gradient-to-br from-green-100 via-blue-50 to-purple-50 backdrop-blur-sm border-2 border-green-300 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 id="wp-vision-new" className="text-3xl font-bold text-foreground">Vision</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We envision a world where:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/90 rounded-xl p-5 border border-green-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">No family goes hungry</strong></p>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-5 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Homeless individuals regain stability</strong> through housing and financial assistance</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-5 border border-orange-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Food trucks and small businesses feed communities</strong>, supported by $GBACK</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-5 border border-purple-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Disaster relief is immediate, transparent, and globally coordinated</strong></p>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-5 border border-pink-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Animals in shelters receive funding and care</strong> to thrive</p>
                    </div>
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/80 rounded-xl p-6 border border-red-200">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Hunger</h4>
                  <p className="text-sm text-muted-foreground">Millions face daily food insecurity</p>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6 border border-orange-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Homelessness</h4>
                  <p className="text-sm text-muted-foreground">Many lack stable housing and financial support</p>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6 border border-yellow-200">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Disaster Relief Inefficiencies</h4>
                  <p className="text-sm text-muted-foreground">Traditional aid is often slow, opaque, and uncoordinated</p>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Trust in Charities</h4>
                  <p className="text-sm text-muted-foreground">Donors are increasingly skeptical about fund allocation</p>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6 border border-purple-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <PawPrint className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Animal Welfare</h4>
                  <p className="text-sm text-muted-foreground">Many shelters lack resources for proper care</p>
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
                  <h3 id="wp-solution" className="text-3xl font-bold text-foreground">3. The Solution: GBACK</h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  GBACK establishes a transparent blockchain system where community rewards directly fund real-world humanitarian initiatives.
                </p>
                
                <div className="mb-8 bg-white/90 rounded-xl p-6 border-2 border-green-300 shadow-sm">
                  <h4 className="text-xl font-bold text-foreground mb-4">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">50% of creator rewards</strong> go directly to donations and community impact</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Public Donation Wallet:</strong> 100% of proceeds go to humanitarian efforts</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Livestream transparency:</strong> All major projects broadcast live</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground"><strong className="text-foreground">Locked tokenomics:</strong> Protects the ecosystem floor, stabilizes growth, and ensures sustainability</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-6">Core Humanitarian Initiatives</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/90 rounded-xl p-6 border border-orange-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Truck className="w-5 h-5 text-orange-600" />
                      </div>
                      <h4 className="text-foreground font-bold text-lg">Food Truck Partnerships</h4>
                    </div>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Onboard local food trucks and small vendors worldwide</li>
                      <li>• Deliver meals directly to families in need</li>
                      <li>• Support both communities and small businesses</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Home className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-foreground font-bold text-lg">Homeless Worker Initiative</h4>
                    </div>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Provide housing support for stability</li>
                      <li>• Offer financial assistance for essential needs</li>
                      <li>• Implement workforce reintegration programs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-6 border border-purple-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <PawPrint className="w-5 h-5 text-purple-600" />
                      </div>
                      <h4 className="text-foreground font-bold text-lg">Animal Shelter Support</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">Fund shelter operations, care, and adoption programs</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-6 border border-green-200 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="text-foreground font-bold text-lg">Global Disaster Relief</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">Finance rapid-response teams and emergency aid delivery</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Impact & Achievements Section */}
            <motion.section 
              aria-labelledby="wp-impact" 
              className="bg-gradient-to-br from-green-100 via-blue-50 to-purple-50 backdrop-blur-sm border-2 border-green-300 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-20 -translate-x-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 id="wp-impact" className="text-3xl font-bold text-foreground">Real Impact, Real Results</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/90 rounded-xl p-8 border-2 border-orange-300 shadow-lg text-center">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-10 h-10 text-orange-600" />
                    </div>
                    <div className="text-5xl font-bold text-orange-600 mb-2">700+</div>
                    <div className="text-xl font-semibold text-foreground mb-2">People Helped</div>
                    <p className="text-muted-foreground">Meals delivered to families in need through our food truck partnerships</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-8 border-2 border-blue-300 shadow-lg text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Home className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="text-5xl font-bold text-blue-600 mb-2">1</div>
                    <div className="text-xl font-semibold text-foreground mb-2">Family Housed</div>
                    <p className="text-muted-foreground">Through our Homeless Worker Initiative, providing stability and support</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/90 rounded-xl p-6 border-2 border-green-300 shadow-sm">
                  <p className="text-center text-lg text-muted-foreground">
                    <strong className="text-foreground">And we're just getting started.</strong> Every $GBACK transaction contributes to expanding our humanitarian impact worldwide.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Tokenomics Section */}
            <motion.section 
              aria-labelledby="wp-tokenomics" 
              className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 backdrop-blur-sm border-2 border-purple-200 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 id="wp-tokenomics" className="text-3xl font-bold text-foreground">4. Tokenomics</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/90 rounded-xl p-6 border-2 border-purple-300 shadow-lg">
                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                      Total Supply
                    </h4>
                    <div className="text-4xl font-bold text-purple-600 mb-2">1,000,000,000</div>
                    <div className="text-xl font-semibold text-foreground mb-2">GBACK</div>
                    <p className="text-sm text-muted-foreground">$GBACK tokens</p>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-6 border-2 border-green-300 shadow-lg">
                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-green-600" />
                      Supply Goals
                    </h4>
                    <ul className="text-muted-foreground space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">20%</strong> locked supply to protect ecosystem floor</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-foreground">5–10%</strong> reserved for OTC deals, investors, and exchange liquidity</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white/90 rounded-xl p-6 border-2 border-blue-300 shadow-lg">
                  <h4 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    Allocation of Creator Fees
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-red-50 rounded-lg p-4 border-2 border-red-300 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <span className="font-semibold text-foreground">Donations & Community Impact</span>
                      </div>
                      <span className="text-2xl font-bold text-red-600">50%</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4 border-2 border-blue-300 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <span className="font-semibold text-foreground">Buyback & Lock (Streamflow) ≥1 year</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">30%</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-purple-50 rounded-lg p-4 border-2 border-purple-300 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <span className="font-semibold text-foreground">Merch, Gear & Equipment</span>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">5%</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-4 border-2 border-green-300 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <span className="font-semibold text-foreground">Team Operations & Development</span>
                      </div>
                      <span className="text-2xl font-bold text-green-600">5%</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-orange-50 rounded-lg p-4 border-2 border-orange-300 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">5</span>
                        </div>
                        <span className="font-semibold text-foreground">Marketing & Partnerships</span>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">5%</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-yellow-50 rounded-lg p-4 border-2 border-yellow-300 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">6</span>
                        </div>
                        <span className="font-semibold text-foreground">Emergency & Stability Fund</span>
                      </div>
                      <span className="text-2xl font-bold text-yellow-600">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Roadmap Section */}
            <motion.section 
              aria-labelledby="wp-roadmap" 
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h3 id="wp-roadmap" className="text-2xl font-bold text-foreground">5. Roadmap</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <p className="font-bold text-lg text-foreground mb-3">Phase 1 | Foundation & Proof of Impact</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Token launch on Pump.fun</li>
                    <li>Initial partnerships with food banks, shelters, and animal organizations</li>
                    <li>Livestreamed donations funded by $GBACK</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <p className="font-bold text-lg text-foreground mb-3">Phase 2 | Expansion & Community Growth</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Onboard food trucks and small vendors worldwide</li>
                    <li>Launch Homeless Worker Initiative pilot</li>
                    <li>Partner with 10+ nonprofits</li>
                    <li>Develop transparency dashboard</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <p className="font-bold text-lg text-foreground mb-3">Phase 3 | Global Scale & Leadership</p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Large-scale OTC deals for liquidity</li>
                    <li>Expand global food truck network</li>
                    <li>Scale Homeless Worker Initiative worldwide</li>
                    <li>Build the largest blockchain-powered humanitarian ecosystem</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Transparency & Accountability Section */}
            <motion.section 
              aria-labelledby="wp-transparency" 
              className="bg-gradient-to-br from-green-100 via-blue-50 to-purple-50 backdrop-blur-sm border-2 border-green-300 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 id="wp-transparency" className="text-3xl font-bold text-foreground">6. Transparency & Accountability</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/90 rounded-xl p-6 border border-green-200 shadow-sm">
                    <h4 className="text-lg font-bold text-foreground mb-4">Governance & Community</h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Nonprofit partnerships</li>
                      <li>• Allocation of donations</li>
                      <li>• Expansion priorities for global relief</li>
                      <li>• Oversight for transparency and accountability</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/90 rounded-xl p-6 border border-blue-200 shadow-sm">
                    <h4 className="text-lg font-bold text-foreground mb-4">Accountability Measures</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground"><strong className="text-foreground">On-Chain Proof:</strong> Every major donation verified on blockchain</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground"><strong className="text-foreground">Streamflow Locks:</strong> Buybacks locked to stabilize price</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground"><strong className="text-foreground">Livestreamed Giving:</strong> Full transparency events</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground"><strong className="text-foreground">Community Reports:</strong> Regular updates for holders and partners</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Acknowledgments Section */}
            <motion.section 
              aria-labelledby="wp-acknowledgments" 
              className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <h3 id="wp-acknowledgments" className="text-2xl font-bold text-foreground">7. Acknowledgments & Contact</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  GIVEBACK thanks <strong className="text-foreground">Alon and the Pump.fun team</strong> for enabling this initiative through their creator fees solution.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Together, we aim to demonstrate how blockchain can create real, positive change globally.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                    <h4 className="font-bold text-foreground mb-3 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-green-600" />
                      Website
                    </h4>
                    <a href="https://givebackcoin.fun" className="text-green-600 hover:text-green-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                      givebackcoin.fun
                    </a>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-bold text-foreground mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      Social Media
                    </h4>
                    <div className="space-y-2">
                      <a href="https://x.com/gbackcoin" className="block text-blue-600 hover:text-blue-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                        x.com/gbackcoin
                      </a>
                      <a href="https://x.com/i/communities/1969153030462586977" className="block text-blue-600 hover:text-blue-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                        X Community
                      </a>
                      <a href="https://linktr.ee/givebackcoin" className="block text-purple-600 hover:text-purple-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                        All Social Links (Linktree)
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <h4 className="font-bold text-foreground mb-3 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-purple-600" />
                      Join The Movement
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">Connect with us on all platforms to stay updated on our humanitarian impact and community initiatives.</p>
                    <a href="https://linktr.ee/givebackcoin" className="inline-flex items-center text-purple-600 hover:text-purple-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                      View All Links →
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div 
              className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Join the Humanitarian Movement?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Be part of the movement that's transforming cryptocurrency into a force for global good. 
                Every $GBACK transaction contributes to disaster relief, hunger prevention, homelessness support, and animal welfare.
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
                  href="https://givebackcoin.fun" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Website
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


