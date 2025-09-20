import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote, Twitter, MessageCircle } from "lucide-react";
import { Badge } from "./ui/badge";

export function CommunityTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "EYLSb6",
      role: "Early Supporter",
      wallet: "EYLSb6...FZip3",
      content: "This fatty guy in here is fully doxxed and legit as f*ck. Aaron is super decent guy, fully doxxed with us. Real estate guy sold 400+ houses in Arizona Texas.",
      rating: 5,
      timestamp: "2 hours ago",
      platform: "telegram",
      verified: true,
      impact: "Donated to food drive"
    },
    {
      name: "6nNY8b",
      role: "Community Builder", 
      wallet: "6nNY8b...HHm4",
      content: "This isn't just another pump — every buy fuels something real. We're feeding the homeless, giving cars to vets, and building a movement to feed thousands more. Most tokens fade, but this one leaves an impact you can point to.",
      rating: 5,
      timestamp: "3 hours ago",
      platform: "telegram",
      verified: true,
      impact: "Organized community event"
    },
    {
      name: "bravedegen",
      role: "Major Holder",
      wallet: "brave...degen",
      content: "5M market cap I'm giving dev 2k USD. Aaron is fully doxxed, this will be organized soon. Don't worry guys, we are cooking together.",
      rating: 5,
      timestamp: "4 hours ago",
      platform: "telegram",
      verified: true,
      impact: "Committed $2K donation"
    },
    {
      name: "human sim",
      role: "Community Volunteer",
      wallet: "human...sim",
      content: "At 250k, I will fly to Phoenix and feed 100 people with you. He's been consistent and legit since day one. Don't listen to all the bad people on chat - we trust Aaron.",
      rating: 5,
      timestamp: "5 hours ago",
      platform: "telegram",
      verified: true,
      impact: "Volunteering commitment"
    },
    {
      name: "3T7Fhw",
      role: "Diamond Hands",
      wallet: "3T7Fhw...EJzA",
      content: "He's so legit. You're a breath of fresh air Aaron. Light it up on Twitter chat - let's get this movement growing!",
      rating: 5,
      timestamp: "6 hours ago",
      platform: "telegram",
      verified: true,
      impact: "Social media promotion"
    }
  ];

  const chatMessages = [
    { user: "EYLSb6", message: "fatty tell them about the food truck tomorrow", time: "now" },
    { user: "6nNY8b", message: "Every buy fuels food, cars, and hope. Join the movement!", time: "1m" },
    { user: "bravedegen", message: "5m im giving 2k to dev", time: "2m" },
    { user: "human sim", message: "We trust you man, don't worry", time: "3m" },
    { user: "54Fb8p", message: "aaron remer, phoenix arizona on google", time: "4m" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return Twitter;
      case "telegram":
        return MessageCircle;
      default:
        return MessageCircle;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Community <span className="text-green-600">Voices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real testimonials from our growing community of believers making a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Testimonial */}
          <div className="lg:col-span-2">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Quote className="w-12 h-12 text-green-600 opacity-50" />
                    </motion.div>

                    {/* Content */}
                    <blockquote className="text-lg text-foreground leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12 border-2 border-green-200">
                          <AvatarFallback className="bg-green-100 text-green-800 font-bold">
                            {testimonials[currentTestimonial].name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-foreground">
                              {testimonials[currentTestimonial].name}
                            </h4>
                            {testimonials[currentTestimonial].verified && (
                              <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].wallet}
                          </p>
                          <p className="text-xs text-green-600 font-medium">
                            Impact: {testimonials[currentTestimonial].impact}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          {(() => {
                            const PlatformIcon = getPlatformIcon(testimonials[currentTestimonial].platform);
                            return <PlatformIcon className="w-4 h-4" />;
                          })()}
                          <span className="text-xs">{testimonials[currentTestimonial].timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-green-600 scale-125" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Live Chat Feed */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <h3 className="font-bold text-foreground">Live Community Chat</h3>
                  </div>

                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {chatMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-lg p-3 border shadow-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm text-foreground">
                            {msg.user}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {msg.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {msg.message}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center pt-4 border-t">
                    <p className="text-xs text-muted-foreground mb-2">
                      Join our community discussion
                    </p>
                    <motion.button
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Full Chat →
                    </motion.button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { label: "Community Members", value: "1,200+", icon: "👥" },
            { label: "Average Rating", value: "4.9/5", icon: "⭐" },
            { label: "Success Stories", value: "50+", icon: "📈" },
            { label: "Lives Impacted", value: "156", icon: "❤️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white/50 rounded-lg border border-green-100"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xl font-bold text-green-600">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}