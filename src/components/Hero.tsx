
import { Button } from "@/components/ui/button";
import { Star, Zap, Users, ArrowRight } from "lucide-react";
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
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(-2deg);
            }
            50% {
              transform: translateY(-15px) rotate(2deg);
            }
          }
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>
      
      <section className="min-h-screen bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 pt-[120px] pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8 lg:pr-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400">
                  <Zap className="w-4 h-4" />
                  Now Live in Beta
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                    Pick More.
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600">
                      Win More.
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-lg">
                    The easiest way to win money on sports. Make picks on your favorite players and teams.
                  </p>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-8 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$2M+</div>
                    <div className="text-sm text-gray-400">Paid Out</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500K+</div>
                    <div className="text-sm text-gray-400">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4.8★</div>
                    <div className="text-sm text-gray-400">App Rating</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg"
                    onClick={() => setIsWaitlistOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 py-6 text-lg font-bold group shadow-xl shadow-blue-500/25"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('how-it-works')}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-xl px-8 py-6 text-lg bg-transparent"
                  >
                    See How It Works
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Licensed & Regulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span>Instant Withdrawals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>18+ Only</span>
                  </div>
                </div>
              </div>

              {/* Right Phone Mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Floating Phone */}
                  <div className="relative animate-float">
                    <div className="relative z-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-2xl animate-glow">
                      <div className="bg-black rounded-[2.5rem] overflow-hidden w-[320px] h-[640px] relative">
                        
                        {/* Phone Screen Content */}
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 p-6">
                          
                          {/* Status Bar */}
                          <div className="flex justify-between items-center text-white text-sm mb-8">
                            <span className="font-semibold">9:41</span>
                            <div className="flex items-center gap-1">
                              <div className="flex gap-1">
                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                              </div>
                              <div className="w-6 h-3 border border-white rounded-sm">
                                <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                              </div>
                            </div>
                          </div>

                          {/* App Header */}
                          <div className="text-center mb-8">
                            <h3 className="text-white font-bold text-2xl mb-2">NBA Tonight</h3>
                            <p className="text-blue-400 text-sm font-medium">Pick 2-6 players • Win up to 100x</p>
                          </div>

                          {/* Player Cards */}
                          <div className="space-y-4 mb-8">
                            {/* LeBron James Card */}
                            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-xl p-4 border border-purple-500/30">
                              <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                                    <span className="text-purple-900 font-bold text-sm">LJ</span>
                                  </div>
                                  <div>
                                    <p className="text-white font-semibold">LeBron James</p>
                                    <p className="text-gray-400 text-xs">LAL vs GSW</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-green-400 font-bold">25.5</p>
                                  <p className="text-xs text-gray-400">Points</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold text-sm">
                                  MORE
                                </button>
                                <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-semibold text-sm">
                                  LESS
                                </button>
                              </div>
                            </div>

                            {/* Stephen Curry Card */}
                            <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-4 border border-blue-500/30">
                              <div className="flex justify-between items-center mb-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">SC</span>
                                  </div>
                                  <div>
                                    <p className="text-white font-semibold">Stephen Curry</p>
                                    <p className="text-gray-400 text-xs">GSW vs LAL</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-green-400 font-bold">4.5</p>
                                  <p className="text-xs text-gray-400">3-Pointers</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold text-sm">
                                  MORE
                                </button>
                                <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-semibold text-sm">
                                  LESS
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Entry and Potential Win */}
                          <div className="space-y-3">
                            <div className="bg-gray-800/50 rounded-xl p-4">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400">Entry Fee</span>
                                <span className="text-white font-bold">$10</span>
                              </div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4">
                              <div className="flex justify-between items-center">
                                <span className="text-white">Potential Payout</span>
                                <span className="text-white font-bold text-xl">$87.50</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background Glow Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-2xl scale-110"></div>
                  <div className="absolute top-10 -right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/30 rounded-full blur-xl"></div>
                </div>
              </div>
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
