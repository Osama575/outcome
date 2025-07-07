
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import WaitlistModal from "@/components/WaitlistModal";

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
      }`}>
        <div className="max-w-[1140px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Outcome Duel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <Link 
              to="/features"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/where-we-operate"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Where We Operate
            </Link>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* Desktop Waitlist Button */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 text-base font-semibold"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-primary/20">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                How It Works
              </button>
              <Link 
                to="/features"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link 
                to="/where-we-operate"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Where We Operate
              </Link>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <div className="pt-4">
                <Button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};

export default Navigation;
