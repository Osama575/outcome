
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px hsl(var(--primary) / 0.1);
            }
            50% {
              box-shadow: 0 0 30px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--accent) / 0.2);
            }
          }
          .shimmer-border {
            background: linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
          }
          .glow-hover:hover {
            animation: pulse-glow 2s infinite;
          }
        `}
      </style>
      
      <footer className="bg-gradient-to-br from-secondary via-background to-secondary border-t border-primary/30 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Logo Column - Enhanced */}
            <div className="md:col-span-1 group">
              <div className="flex items-center space-x-2 mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-shadow duration-300">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Outcome Duel
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Skill-based prediction contests for sports and entertainment.
              </p>
            </div>

            {/* Product Column - Enhanced */}
            <div className="group">
              <h4 className="font-semibold mb-6 text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <Link 
                    to="/features"
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Pricing
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Mobile App
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Column - Enhanced */}
            <div className="group">
              <h4 className="font-semibold mb-6 text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Contest Rules
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleExternalLink('https://www.ncpgambling.org/')}
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block"
                  >
                    Responsible Gaming
                  </button>
                </li>
              </ul>
            </div>

            {/* Support Column - Enhanced */}
            <div className="group">
              <h4 className="font-semibold mb-6 text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Help Center
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Bug Reports
                  </button>
                </li>
                <li>
                  <button className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block">
                    Feature Requests
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Column - Enhanced */}
            <div className="group">
              <h4 className="font-semibold mb-6 text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Social
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => handleExternalLink('https://twitter.com')}
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block"
                  >
                    Twitter
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleExternalLink('https://instagram.com')}
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block"
                  >
                    Instagram
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleExternalLink('https://discord.com')}
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block"
                  >
                    Discord
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleExternalLink('https://reddit.com')}
                    className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text text-sm transition-all duration-300 hover:translate-x-1 block"
                  >
                    Reddit
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Enhanced */}
          <div className="border-t border-gradient-to-r from-primary/30 via-border to-accent/30 mt-12 pt-8 relative">
            {/* Animated border */}
            <div className="absolute top-0 left-0 right-0 h-px opacity-50">
              <div className="absolute inset-0 shimmer-border"></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent font-semibold">
                  © Outcome Duel 2025
                </span>
                <button className="hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text transition-all duration-300 hover:scale-105">
                  Terms
                </button>
                <button className="hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text transition-all duration-300 hover:scale-105">
                  Privacy
                </button>
                <button className="hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:bg-clip-text transition-all duration-300 hover:scale-105">
                  Contact
                </button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/80 mt-4 text-center md:text-left leading-relaxed">
              Outcome Duel contests are games of skill. Void where prohibited.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
