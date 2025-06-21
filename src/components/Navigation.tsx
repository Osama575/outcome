
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/WaitlistModal";

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#111519]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-[1140px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#18D47B] rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#111519]" />
            </div>
            <span className="text-xl font-bold">Outcome Duel</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-semibold hover:text-[#18D47B] transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-semibold hover:text-[#18D47B] transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('where')}
              className="text-sm font-semibold hover:text-[#18D47B] transition-colors"
            >
              Where We Operate
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm font-semibold hover:text-[#18D47B] transition-colors"
            >
              FAQ
            </button>
          </div>

          {/* Desktop Waitlist Button */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#18D47B] hover:bg-[#15C06F] text-[#111519] rounded-full px-6 py-2 text-base font-semibold"
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
          <div className="md:hidden bg-[#111519] border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block text-sm font-semibold hover:text-[#18D47B] transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block text-sm font-semibold hover:text-[#18D47B] transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('where')}
                className="block text-sm font-semibold hover:text-[#18D47B] transition-colors"
              >
                Where We Operate
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-sm font-semibold hover:text-[#18D47B] transition-colors"
              >
                FAQ
              </button>
              <div className="pt-4">
                <Button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-[#18D47B] hover:bg-[#15C06F] text-[#111519] rounded-full w-full"
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
