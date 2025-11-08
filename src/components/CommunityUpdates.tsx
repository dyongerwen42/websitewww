import { motion } from "motion/react";
import { Heart, Calendar, Users, Lock, TrendingUp, ExternalLink, Youtube } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function CommunityUpdates() {
  const updates = [
    {
      id: 1,
      date: "Nov 1",
      icon: Heart,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      title: "Giveback is a Movement",
      content: "Giveback is a movement built to create lasting change! As we continue to grow, we'll help more people, make a bigger impact, and create greater change. Join us and be part of a community that will be known throughout the world for all the good we do, together! 💚",
      hashtag: "$GBACK",
      type: "announcement"
    },
    {
      id: 2,
      date: "Nov 1",
      icon: Calendar,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      title: "Big Event Tomorrow!",
      content: "We'll be LIVE 10:00 am with some huge announcements and we're out here changing lives. Tap in, family. This is going to be powerful.",
      hashtag: "$GBACK",
      type: "event",
      highlight: true
    },
    {
      id: 3,
      date: "Nov 1",
      icon: Users,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      title: "We Love Our Community",
      content: "We love our amazing community and we can't wait to show you what we are cooking up for the Giveback movement! 💚",
      hashtag: "$GBACK",
      type: "community"
    },
    {
      id: 4,
      date: "Oct 31",
      icon: Lock,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      title: "Tokens Locked with Streamflow",
      content: "🔐 Just locked 5,000,000 GBACK tokens with Streamflow. It's on-chain. You can check the amount, time-period and recipients.",
      hashtag: "5M GBACK Locked",
      type: "milestone",
      link: "https://app.streamflow.finance",
      linkText: "Check it out on Streamflow",
      highlight: true
    },
    {
      id: 5,
      date: "Oct 31",
      icon: Youtube,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      title: "YouTube Milestone",
      content: "My YouTube channel achieved 85,000 Views! Track your success with vidIQ.",
      hashtag: "85K Views",
      type: "milestone"
    }
  ];

  return (
    <section id="updates" className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-blue-50/30 relative overflow-hidden">
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
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2 text-green-600" />
              <span className="font-semibold text-green-800">Community Updates</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Latest from GIVEBACK
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay connected with our community and see the latest updates, milestones, and announcements
            </p>
          </div>

          {/* Updates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`h-full border-2 ${update.borderColor} ${update.highlight ? 'ring-2 ring-green-300 shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${update.bgColor} rounded-lg flex items-center justify-center`}>
                        <update.icon className={`w-6 h-6 ${update.iconColor}`} />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">{update.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3">{update.title}</h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{update.content}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm font-semibold text-green-600">{update.hashtag}</span>
                      {update.link && (
                        <a 
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {update.linkText}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Follow CTA */}
          <motion.div 
            className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Follow us on X to stay updated with the latest announcements, milestones, and community updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://x.com/gbackcoin" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Follow on X
              </a>
              <a 
                href="https://x.com/i/communities/1969153030462586977" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Join X Community
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

