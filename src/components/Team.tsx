import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, MapPin, Award, Users } from "lucide-react";
import aaronPhoto from "figma:asset/4712baee7c54d944c7f8aa0306e302fc81e1194f.png";

export function Team() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Meet Our <span className="text-green-600">Community Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparency is at the heart of $GBACK. Our team is committed to powering humanitarian aid 
            through blockchain transparency and community-driven governance.
          </p>
        </div>

        {/* Team Member */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 hover:border-green-200 transition-colors overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Photo */}
                <div className="relative bg-gradient-to-br from-green-100 to-blue-100">
                  <img
                    src={aaronPhoto}
                    alt="Aaron Remer - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">Aaron Remer</h3>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Founder & Developer
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>Phoenix, Arizona</span>
                    </div>
                    <p className="text-muted-foreground">
                      Aaron is a successful real estate professional and entrepreneur who has 
                      decided to use his expertise and resources to power humanitarian aid 
                      through $GBACK's transparent, community-driven approach to blockchain philanthropy.
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Professional Background:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Award className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Top 3% Real Estate Realtor in Arizona</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-green-600" />
                        <span className="text-sm">400+ Homes Sold in Arizona & Texas</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ExternalLink className="w-5 h-5 text-green-600" />
                        <span className="text-sm">Fully Doxxed & Verified Identity</span>
                      </div>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <blockquote className="text-sm italic text-muted-foreground">
                      "I've been blessed with success in real estate, and now I want to use 
                      that platform to power humanitarian aid. $GBACK isn't just about crypto—it's 
                      about combining blockchain transparency with community governance to create sustainable impact for disaster relief, hunger prevention, and homelessness support."
                    </blockquote>
                    <cite className="text-sm font-medium text-foreground mt-2 block">
                      — Aaron Remer
                    </cite>
                  </div>

                  {/* Commitment */}
                  <div className="border-l-4 border-green-600 pl-4">
                    <h5 className="font-semibold text-foreground mb-2">$GBACK Commitment:</h5>
                    <p className="text-sm text-muted-foreground">
                      Aaron leads the $GBACK mission to ensure 50%+ of creator rewards fund humanitarian causes, 
                      with transparent on-chain governance and public donation wallets for maximum accountability.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Verified Identity</h4>
              <p className="text-sm text-muted-foreground">
                Aaron Remer is a publicly searchable real estate professional with a proven track record
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Community Governance</h4>
              <p className="text-sm text-muted-foreground">
                $GBACK holders vote on which nonprofits and projects to support, ensuring community-driven impact
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Blockchain Transparency</h4>
              <p className="text-sm text-muted-foreground">
                All $GBACK wallets including donation and reserve funds are public and verifiable on-chain
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}