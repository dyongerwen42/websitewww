import { motion } from "motion/react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Car, Users, Home, Heart, Trophy, CheckCircle, Circle, Clock } from "lucide-react";
import { Progress } from "./ui/progress";

export function InteractiveRoadmap() {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      marketCap: "250K",
      currentProgress: 85,
      status: "active",
      icon: Users,
      title: "Community Foundation",
      description: "Building our core community and establishing charitable partnerships",
      achievements: [
        { text: "Community Discord Server", completed: true },
        { text: "First Food Drive Event", completed: true },
        { text: "100+ People Helped", completed: true },
        { text: "Media Coverage", completed: false },
      ],
      impact: "156 people helped so far",
      nextAction: "Organizing larger food drive events"
    },
    {
      marketCap: "1M",
      currentProgress: 25,
      status: "upcoming",
      icon: Car,
      title: "First Vehicle Giveaway",
      description: "Giving away our first car to a deserving veteran in the community",
      achievements: [
        { text: "Veteran Outreach Program", completed: false },
        { text: "Vehicle Selection Process", completed: false },
        { text: "Community Voting System", completed: false },
        { text: "Legal Documentation", completed: false },
      ],
      impact: "1 veteran to receive transportation",
      nextAction: "Establishing veteran partnerships"
    },
    {
      marketCap: "2M",
      currentProgress: 0,
      status: "planned",
      icon: Car,
      title: "Second Vehicle Donation",
      description: "Expanding our vehicle donation program with continued community support",
      achievements: [
        { text: "Expanded Veteran Network", completed: false },
        { text: "Community Recognition Event", completed: false },
        { text: "Media Partnership", completed: false },
        { text: "Donor Appreciation Program", completed: false },
      ],
      impact: "2 total vehicles donated",
      nextAction: "Building sustainable donation pipeline"
    },
    {
      marketCap: "3M",
      currentProgress: 0,
      status: "planned",
      icon: Car,
      title: "Third Vehicle Milestone",
      description: "Continuing our commitment to providing transportation for those in need",
      achievements: [
        { text: "Partnership with Dealerships", completed: false },
        { text: "Maintenance Support Program", completed: false },
        { text: "Insurance Assistance", completed: false },
        { text: "Training Programs", completed: false },
      ],
      impact: "3 total vehicles donated",
      nextAction: "Establishing dealership partnerships"
    },
    {
      marketCap: "4M",
      currentProgress: 0,
      status: "planned",
      icon: Home,
      title: "Housing Support Initiative",
      description: "Launching comprehensive housing assistance for homeless individuals",
      achievements: [
        { text: "Shelter Partnerships", completed: false },
        { text: "Housing Voucher Program", completed: false },
        { text: "Emergency Accommodation", completed: false },
        { text: "Transition Support Services", completed: false },
      ],
      impact: "Housing support for 50+ individuals",
      nextAction: "Developing shelter partnerships"
    },
    {
      marketCap: "5M",
      currentProgress: 0,
      status: "planned",
      icon: Trophy,
      title: "Tesla Giveaway Special",
      description: "Aaron's personal Tesla giveaway as a thank you to the community",
      achievements: [
        { text: "Community Celebration Event", completed: false },
        { text: "Major Media Coverage", completed: false },
        { text: "Documentary Production", completed: false },
        { text: "Legacy Project Launch", completed: false },
      ],
      impact: "Major milestone celebration",
      nextAction: "Planning community celebration"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return Clock;
      case "completed":
        return CheckCircle;
      default:
        return Circle;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-blue-600 bg-blue-100 border-blue-200";
      case "completed":
        return "text-green-600 bg-green-100 border-green-200";
      default:
        return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-green-50/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Interactive <span className="text-green-600">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track our progress in real-time as we reach each milestone and create lasting impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Milestone Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {milestones.map((milestone, index) => {
                const StatusIcon = getStatusIcon(milestone.status);
                const isSelected = selectedMilestone === index;

                return (
                  <motion.div
                    key={milestone.marketCap}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={`border-2 transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "border-green-300 bg-green-50 shadow-lg"
                          : "border-border hover:border-green-200"
                      }`}
                      onClick={() => setSelectedMilestone(index)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          {/* Icon and Progress */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <motion.div
                                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                                  milestone.status === "active"
                                    ? "bg-blue-600"
                                    : milestone.status === "completed"
                                    ? "bg-green-600"
                                    : "bg-gray-400"
                                }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <milestone.icon className="w-8 h-8 text-white" />
                              </motion.div>
                              {milestone.status === "active" && (
                                <motion.div
                                  className="absolute inset-0 rounded-full border-4 border-blue-600 opacity-75"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.75, 0.25, 0.75],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                />
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-bold text-foreground">
                                ${milestone.marketCap}
                              </h3>
                              <Badge className={getStatusColor(milestone.status)}>
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {milestone.status === "active"
                                  ? "In Progress"
                                  : milestone.status === "completed"
                                  ? "Completed"
                                  : "Planned"}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {milestone.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              {milestone.description}
                            </p>

                            {/* Progress Bar */}
                            {milestone.status === "active" && (
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Progress</span>
                                  <span className="font-medium text-foreground">
                                    {milestone.currentProgress}%
                                  </span>
                                </div>
                                <Progress value={milestone.currentProgress} className="h-2" />
                              </div>
                            )}
                          </div>

                          {/* Select Button */}
                          <Button
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            className={isSelected ? "bg-green-600 hover:bg-green-700" : ""}
                          >
                            {isSelected ? "Selected" : "Details"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Selected Milestone Details */}
          <div className="lg:col-span-1">
            <motion.div
              key={selectedMilestone}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-green-200 bg-green-50 sticky top-24">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        {(() => {
                          const SelectedIcon = milestones[selectedMilestone].icon;
                          return <SelectedIcon className="w-10 h-10 text-white" />;
                        })()}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {milestones[selectedMilestone].title}
                      </h3>
                      <p className="text-green-600 font-semibold">
                        ${milestones[selectedMilestone].marketCap} Market Cap
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Milestones:</h4>
                      <div className="space-y-2">
                        {milestones[selectedMilestone].achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center space-x-2 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {achievement.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-400" />
                            )}
                            <span
                              className={
                                achievement.completed
                                  ? "text-foreground font-medium"
                                  : "text-muted-foreground"
                              }
                            >
                              {achievement.text}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="bg-green-100 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Expected Impact:</h4>
                      <p className="text-green-700 text-sm">
                        {milestones[selectedMilestone].impact}
                      </p>
                    </div>

                    {/* Next Action */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
                      <p className="text-blue-700 text-sm">
                        {milestones[selectedMilestone].nextAction}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}