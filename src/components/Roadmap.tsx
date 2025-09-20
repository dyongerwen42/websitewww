import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Car, Users, Home, Heart, Trophy } from "lucide-react";

export function Roadmap() {
  const milestones = [
    {
      marketCap: "250K",
      status: "current",
      icon: Users,
      title: "Community Building",
      description: "Establish strong community foundation and feed 100+ people",
      achievements: ["Food truck events", "Community partnerships", "Social media presence"]
    },
    {
      marketCap: "1M",
      status: "upcoming",
      icon: Car,
      title: "First Car Giveaway",
      description: "Give away first vehicle to a deserving veteran",
      achievements: ["Veteran outreach program", "Vehicle selection process", "Community voting"]
    },
    {
      marketCap: "2M",
      status: "upcoming",
      icon: Car,
      title: "Second Vehicle",
      description: "Continue vehicle donation program",
      achievements: ["Expanded veteran support", "Community recognition", "Media coverage"]
    },
    {
      marketCap: "3M",
      status: "upcoming",
      icon: Car,
      title: "Third Vehicle",
      description: "Third car giveaway milestone",
      achievements: ["Increased community impact", "Partnership expansion", "Program scaling"]
    },
    {
      marketCap: "4M",
      status: "upcoming",
      icon: Home,
      title: "Housing Support",
      description: "Launch housing assistance programs",
      achievements: ["Shelter partnerships", "Housing vouchers", "Emergency accommodation"]
    },
    {
      marketCap: "5M",
      status: "upcoming",
      icon: Trophy,
      title: "Tesla Giveaway",
      description: "Special Tesla vehicle giveaway from the team",
      achievements: ["Major milestone celebration", "Community growth", "Media attention"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "bg-green-100 text-green-800 border-green-200";
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "current":
        return "In Progress";
      case "upcoming":
        return "Coming Soon";
      default:
        return "Planned";
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Roadmap to <span className="text-green-600">Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every market cap milestone unlocks new ways to help our community. 
            Here's how we'll turn digital growth into tangible support for those in need.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <Card 
              key={milestone.marketCap} 
              className={`border-2 transition-all duration-300 hover:shadow-lg ${
                milestone.status === "current" 
                  ? "border-green-300 bg-green-50" 
                  : "border-border hover:border-green-200"
              }`}
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      milestone.status === "current" ? "bg-green-600" : "bg-muted"
                    }`}>
                      <milestone.icon className={`w-5 h-5 ${
                        milestone.status === "current" ? "text-white" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">${milestone.marketCap}</h3>
                      <Badge className={getStatusColor(milestone.status)}>
                        {getStatusText(milestone.status)}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Activities:</p>
                    <ul className="space-y-1">
                      {milestone.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Support Callout */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Community Commitments</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our community members have pledged additional support at milestones. 
            At 5M market cap, community members have committed to donating over $10K 
            to further our charitable mission.
          </p>
        </div>
      </div>
    </section>
  );
}