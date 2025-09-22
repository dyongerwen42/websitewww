import { Card, CardContent } from "./ui/card";
import { Heart, Shield, Users, Target } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Creator Rewards Impact",
      description: "50%+ of token creator rewards are allocated to the Give Back Fund, ensuring continuous support for global causes."
    },
    {
      icon: Shield,
      title: "Blockchain Transparency",
      description: "All wallets including donation wallet and reserve are public and verifiable on-chain. Every transaction is visible."
    },
    {
      icon: Users,
      title: "Community Governance",
      description: "Token holders vote on which nonprofits and projects to support, ensuring the community drives impact."
    },
    {
      icon: Target,
      title: "Immediate & Long-Term Aid",
      description: "Emergency disaster relief, food drives, hunger prevention, and shelter building for long-term homeless support."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Powering Humanitarian Aid Through <span className="text-green-600">Community & Transparency</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Give Back Coin $GBACK transforms how the world funds relief and humanitarian aid. 
            By combining blockchain transparency, community power, and sustainable funding through creator rewards.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To create a transparent, community-driven financial ecosystem that turns every transaction 
                into meaningful support for disaster relief, hunger prevention, and homelessness initiatives.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Emergency disaster relief</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Food drives and hunger prevention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Shelter building and homeless support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Community-driven governance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXIlMjBoZWxwfGVufDF8fHx8MTc1ODMyODc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community volunteers helping"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}