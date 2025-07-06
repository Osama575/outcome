
import { useState } from "react";
import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/WaitlistModal";

const FinalCTA = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

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
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
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
          .float-animation {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      
      <section id="final-cta" className="py-20 bg-gradient-to-br from-secondary via-background to-secondary relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 opacity-20">
          <div className="shimmer-border h-full"></div>
        </div>
        
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 text-center">
          {/* Animated heading */}
          <div className="mb-8 group">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              Ready to Duel?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="mb-12 float-animation">
            <Button 
              size="lg"
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/25 rounded-full px-12 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 glow-hover border border-primary/20 hover:border-primary/40"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Enhanced App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-secondary to-muted border border-border hover:border-primary/50 text-foreground px-8 py-4 rounded-xl flex items-center gap-4 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary/10">
                <div className="text-3xl">📱</div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">Download on the</div>
                  <div className="font-semibold text-lg bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">App Store</div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-secondary to-muted border border-border hover:border-accent/50 text-foreground px-8 py-4 rounded-xl flex items-center gap-4 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-accent/10">
                <div className="text-3xl">🤖</div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground group-hover:text-accent transition-colors duration-300">Get it on</div>
                  <div className="font-semibold text-lg bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">Google Play</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-accent rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-5 w-1 h-1 bg-foreground rounded-full opacity-80 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};

export default FinalCTA;
