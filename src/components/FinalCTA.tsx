
import { useState } from "react";
import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/WaitlistModal";

const FinalCTA = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section id="final-cta" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Duel?
          </h2>
          
          <Button 
            size="lg"
            onClick={() => setIsWaitlistOpen(true)}
            className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-12 py-6 text-xl font-bold mb-8"
          >
            Join Waitlist
          </Button>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3">
              <div className="text-2xl">📱</div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </div>
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3">
              <div className="text-2xl">🤖</div>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
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

export default FinalCTA;
