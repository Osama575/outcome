
import { useState } from "react";
import { Users, Trophy, Zap, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Play,
      title: "Pick Your Play",
      description: "Choose player stats to predict",
      detail: "Select from NBA, NFL, MLB player props",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Find Your Match",
      description: "Get paired with another player",
      detail: "Auto-match or challenge friends",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Equal Stakes",
      description: "Both players put in the same amount",
      detail: "Winner takes the entire pot",
      color: "from-pink-500 to-red-600"
    },
    {
      icon: Trophy,
      title: "Winner Takes All",
      description: "Most accurate prediction wins",
      detail: "No house edge, pure skill",
      color: "from-red-500 to-orange-600"
    }
  ];

  const scrollToSignUp = () => {
    const element = document.getElementById('final-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
            }
          }
          .animate-slide-up {
            animation: slideUp 0.6s ease-out;
          }
          .animate-pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
          }
        `}
      </style>

      <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400 mb-4">
              <Zap className="w-4 h-4" />
              Simple Process
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              How It
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600">
                {" "}Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Four steps to start winning against real players
            </p>
          </div>

          {/* Interactive Steps */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Step Cards */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-r ' + step.color + ' border-transparent animate-pulse-glow' 
                      : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gray-800 text-gray-400 group-hover:text-white'
                      }`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className={`text-xl font-bold transition-colors ${
                            activeStep === index ? 'text-white' : 'text-gray-300'
                          }`}>
                            {step.title}
                          </h3>
                          <span className={`text-sm font-semibold px-2 py-1 rounded-full transition-all ${
                            activeStep === index 
                              ? 'bg-white/20 text-white' 
                              : 'bg-gray-800 text-gray-400'
                          }`}>
                            0{index + 1}
                          </span>
                        </div>
                        <p className={`transition-colors ${
                          activeStep === index ? 'text-white/90' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </p>
                        <p className={`text-sm mt-1 transition-colors ${
                          activeStep === index ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Visual Demo */}
            <div className="relative">
              <div className="relative animate-slide-up">
                <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-3xl p-8 shadow-2xl">
                  {activeStep === 0 && (
                    <div className="space-y-4">
                      <h4 className="text-white font-bold text-lg mb-4">Choose Your Prediction</h4>
                      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-4 border border-blue-500/30">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xs">LAL</span>
                            </div>
                            <span className="text-white font-semibold">Lakers</span>
                          </div>
                          <span className="text-gray-400 font-bold">VS</span>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-semibold">Warriors</span>
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                              <span className="text-purple-900 font-bold text-xs">GSW</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white">Pick the Winner</p>
                          <p className="text-blue-400 text-sm">Choose your team</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-4">
                      <h4 className="text-white font-bold text-lg mb-4">Find Your Opponent</h4>
                      <div className="bg-gray-800/50 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-400 text-sm">Looking for opponent...</span>
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                          </div>
                        </div>
                        <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">MJ</span>
                            </div>
                            <div>
                              <span className="text-white font-semibold">MikeJ_99 matched!</span>
                              <p className="text-green-400 text-xs">Ready to compete</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-4">
                      <h4 className="text-white font-bold text-lg mb-4">Equal Stakes</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-600/20 rounded-xl p-4 text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">You</span>
                          </div>
                          <p className="text-white font-semibold">$25</p>
                          <p className="text-blue-400 text-sm">Your stake</p>
                        </div>
                        <div className="bg-purple-600/20 rounded-xl p-4 text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">MJ</span>
                          </div>
                          <p className="text-white font-semibold">$25</p>
                          <p className="text-purple-400 text-sm">Opponent stake</p>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-center">
                        <p className="text-white text-2xl font-bold">$50</p>
                        <p className="text-green-200 text-sm">Total Prize Pool</p>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-4">
                      <h4 className="text-white font-bold text-lg mb-4">Winner Takes All</h4>
                      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-center">
                        <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                        <p className="text-white text-2xl font-bold mb-2">You Win!</p>
                        <p className="text-white text-3xl font-black mb-1">$50</p>
                        <p className="text-orange-200 text-sm">Lakers won 112-108</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400/30 rounded-full blur-md"></div>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeStep 
                      ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400' 
                      : 'w-2 bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              onClick={scrollToSignUp}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 py-6 text-lg font-bold group shadow-xl"
            >
              Start Your First Duel
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
