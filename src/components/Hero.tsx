
import { Button } from "@/components/ui/button";
import { Star, Zap, Users } from "lucide-react";
import { useState } from "react";
import WaitlistModal from "@/components/WaitlistModal";

const Hero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen pt-[72px] flex items-center">
        <div className="max-w-[1140px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight">
                Challenge Friends. <br />
                Predict Outcomes. <br />
                <span className="text-blue-400">Win Cash.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Peer-to-peer skill contests on sports, shows, & more.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 text-lg font-semibold"
                >
                  Join Waitlist
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('how-it-works')}
                  className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-full px-8 py-4 text-lg"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-400 fill-current" />
                  <span className="text-sm font-medium">4.9 App Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Instant Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">100K+ duels settled</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Outcome Duel Mobile App"
                  className="rounded-3xl shadow-2xl max-w-xs mx-auto"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-3xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};

export default Hero;
