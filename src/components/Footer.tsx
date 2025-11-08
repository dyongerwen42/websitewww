import { ExternalLink, Heart, Twitter } from "lucide-react";
import givebackLogo from "figma:asset/00a6b2f019c79970e333581332d4ae51e66725fe.png";

export function Footer() {
  const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com/gbackcoin",
      icon: Twitter
    },
    {
      name: "X Community",
      href: "https://x.com/i/communities/1969153030462586977",
      icon: Twitter
    },
    {
      name: "Linktree",
      href: "https://linktr.ee/givebackcoin",
      icon: ExternalLink
    },
    {
      name: "Pump.fun",
      href: "https://pump.fun/coin/Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump",
      icon: ExternalLink
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Impact", href: "#impact" },
    { name: "Whitepaper", href: "#whitepaper" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Team", href: "#team" },
    { name: "How to Buy", href: "#buy" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img src={givebackLogo} alt="GiveBack Coin" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-muted max-w-md">
              Give Back Coin $GBACK powers humanitarian aid through community and transparency. 
              50%+ of creator rewards fund disaster relief, hunger prevention, and homelessness support.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-muted">Powering humanitarian aid through blockchain transparency</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold text-background mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted hover:text-background transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="mt-8 pt-8 border-t border-muted/20">
          <div className="bg-muted/10 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-background mb-1">Contract Address:</p>
                <code className="text-sm text-muted font-mono break-all">
                  Fh7mLxtPAysdvHcMcJ37A3vc6WvBVh7JVDwxmwk6pump
                </code>
              </div>
              <div className="text-sm text-muted">
                <p>$GBACK Token</p>
                <p>1B Total Supply</p>
                <p>50%+ Creator Rewards to Humanitarian Fund</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-muted/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted">
            © 2025 GIVEBACK ($GBACK). Powering humanitarian aid through community and transparency.
          </p>
          <p className="text-sm text-muted">
            Made with ❤️ for those in need
          </p>
        </div>
      </div>
    </footer>
  );
}