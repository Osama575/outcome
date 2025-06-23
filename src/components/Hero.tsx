
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
      <section className="min-h-screen pt-[72px] flex items-center bg-black">
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
                  className="border-blue-600 text-blue-400 hover:bg-blue-600/20 hover:text-blue-300 rounded-full px-8 py-4 text-lg bg-transparent"
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

            {/* Right Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Floating Phone Mockup */}
                <div className="relative animate-float">
                  <div className="relative z-10 bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] p-2 shadow-2xl shadow-blue-500/20 border border-gray-800">
                    <div className="bg-black rounded-[2rem] overflow-hidden w-[280px] h-[570px] relative">
                      {/* Phone Screen Content */}
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black p-6">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center text-white text-sm mb-8">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-2 bg-white rounded-sm"></div>
                            <div className="w-4 h-2 bg-white rounded-sm"></div>
                            <div className="w-4 h-2 bg-white rounded-sm"></div>
                          </div>
                        </div>

                        {/* App Header */}
                        <div className="text-center mb-8">
                          <h3 className="text-white font-bold text-xl">Active Duels</h3>
                          <p className="text-gray-400 text-sm">Pick your prediction</p>
                        </div>

                        {/* Contest Card */}
                        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-4 border border-blue-700/30 mb-4">
                          <div className="text-center mb-4">
                            <p className="text-blue-400 text-sm font-semibold">NBA • Tonight</p>
                            <h4 className="text-white font-bold text-lg">Lakers vs Warriors</h4>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center bg-black/40 rounded-lg p-3">
                              <span className="text-white">Lakers Win</span>
                              <span className="text-green-400 font-semibold">+150</span>
                            </div>
                            <div className="flex justify-between items-center bg-black/40 rounded-lg p-3">
                              <span className="text-white">Warriors Win</span>
                              <span className="text-green-400 font-semibold">-200</span>
                            </div>
                          </div>
                          
                          <div className="mt-4 text-center">
                            <div className="bg-blue-600 rounded-lg py-2 px-4">
                              <span className="text-white font-semibold">Stake: $25</span>
                            </div>
                          </div>
                        </div>

                        {/* Win Amount */}
                        <div className="text-center">
                          <p className="text-gray-400 text-sm">Potential Win</p>
                          <p className="text-green-400 font-bold text-2xl">$87.50</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-[2.5rem] blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;
