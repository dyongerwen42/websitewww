import { motion } from "motion/react";
import { Heart, Users, Globe, Shield, Target, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ImpactMetrics() {
  const impactAreas = [
    {
      icon: Heart,
      title: "Disaster Relief",
      description: "Rapid response funding for crises worldwide",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      stats: "Emergency Response"
    },
    {
      icon: Users,
      title: "Hunger Prevention",
      description: "Food drives and community kitchen partnerships",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      stats: "Food Security"
    },
    {
      icon: Shield,
      title: "Homelessness Support",
      description: "Shelters, training, and long-term recovery programs",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      stats: "Shelter & Recovery"
    }
  ];

  const keyMetrics = [
    { label: "Creator Rewards to Humanitarian Fund", value: "50%+", icon: Target },
    { label: "Blockchain Transparency", value: "100%", icon: Shield },
    { label: "Community Governance", value: "Token Holder Voting", icon: Users },
    { label: "Global Impact Reach", value: "Worldwide", icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/30 relative overflow-hidden">
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
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2 text-green-600" />
              <span className="font-semibold text-green-800">Humanitarian Impact</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Making a Real Difference
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every $GBACK transaction contributes to humanitarian causes. Our transparent, community-driven approach ensures maximum impact where it's needed most.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="grid md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className={`border-2 ${area.borderColor} hover:shadow-lg transition-all duration-300 h-full`}>
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 ${area.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <area.icon className={`w-8 h-8 ${area.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                    
                    <div className={`inline-flex items-center px-4 py-2 ${area.bgColor} rounded-full border ${area.borderColor}`}>
                      <span className={`text-sm font-semibold ${area.color}`}>{area.stats}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Key Metrics */}
          <motion.div 
            className="bg-gradient-to-br from-white via-green-50/50 to-blue-50/50 backdrop-blur-sm border-2 border-green-200 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">$GBACK Key Metrics</h3>
              <p className="text-muted-foreground">Transparent, measurable impact through blockchain technology</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Join the Humanitarian Movement</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Every $GBACK holder becomes part of a global community dedicated to creating positive change. 
              Together, we're building a more transparent and compassionate world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#buy" 
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Zap className="w-5 h-5 mr-2" />
                Buy $GBACK
              </a>
              <a 
                href="#whitepaper" 
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Heart className="w-5 h-5 mr-2" />
                Read Whitepaper
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
