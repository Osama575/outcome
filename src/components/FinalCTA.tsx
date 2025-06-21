
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-r from-[#18D47B] to-[#15C06F]">
      <div className="max-w-[1140px] mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111519] mb-8">
          Ready to Duel?
        </h2>
        
        <Button 
          size="lg"
          className="bg-white text-[#111519] hover:bg-white/90 rounded-full px-12 py-6 text-xl font-bold mb-8"
        >
          Sign Up & Play Now
        </Button>

        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="bg-[#111519] text-white px-6 py-3 rounded-lg flex items-center gap-3">
            <div className="text-2xl">📱</div>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="font-semibold">App Store</div>
            </div>
          </div>
          <div className="bg-[#111519] text-white px-6 py-3 rounded-lg flex items-center gap-3">
            <div className="text-2xl">🤖</div>
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
