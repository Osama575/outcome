
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
    <footer className="bg-gray-900 border-t border-blue-900/20">
      <div className="max-w-[1140px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Outcome Duel</span>
            </div>
            <p className="text-white/70 text-sm">
              Skill-based prediction contests for sports and entertainment.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-white/70 hover:text-blue-400 text-sm transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <Link 
                  to="/features"
                  className="text-white/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Mobile App
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Contest Rules
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://www.ncpgambling.org/')}
                  className="text-white/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Responsible Gaming
                </button>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Help Center
                </button>
              </li>
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Bug Reports
                </button>
              </li>
              <li>
                <button className="text-white/70 hover:text-blue-400 text-sm transition-colors">
                  Feature Requests
                </button>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleExternalLink('https://twitter.com')}
                  className="text-white/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Twitter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://instagram.com')}
                  className="text-white/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Instagram
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://discord.com')}
                  className="text-white/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Discord
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleExternalLink('https://reddit.com')}
                  className="text-white/70 hover:text-blue-400 text-sm transition-colors"
                >
                  Reddit
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <span>© Outcome Duel 2025</span>
              <button className="hover:text-blue-400 transition-colors">Terms</button>
              <button className="hover:text-blue-400 transition-colors">Privacy</button>
              <button className="hover:text-blue-400 transition-colors">Contact</button>
            </div>
          </div>
          <p className="text-xs text-white/50 mt-4 text-center md:text-left">
            Outcome Duel contests are games of skill. Void where prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
