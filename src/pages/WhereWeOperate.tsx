
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import USMap from "@/components/USMap";
import { useEffect, useState } from "react";

const WhereWeOperatePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation isScrolled={isScrolled} />
      
      <div className="pt-[120px]">
        {/* Interactive US Map */}
        <USMap />
      </div>

      {/* Legal Information */}
      <section className="py-20 bg-black">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Legal & Responsible Gaming</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-blue-900/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Skill-Based Gaming</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Outcome Duel contests are games of skill, not chance. Winners are determined by knowledge, 
                strategy, and decision-making abilities rather than random outcomes.
              </p>
              <p className="text-white/60 text-sm">
                All contests comply with applicable state and federal laws regarding skill-based gaming.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl border border-blue-900/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Responsible Gaming</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                We're committed to promoting responsible gaming practices and providing resources 
                for players who need support.
              </p>
              <div className="space-y-2">
                <p className="text-white/70 text-sm">
                  If you or someone you know has a gambling problem, call 
                  <span className="text-blue-400 font-semibold"> 1-800-GAMBLER</span>
                </p>
                <button className="text-blue-400 text-sm underline hover:no-underline">
                  Full Contest Rules & Terms
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm max-w-3xl mx-auto">
              Outcome Duel operates in compliance with all applicable laws and regulations. 
              Contest availability may change based on legal developments in your jurisdiction. 
              Players must be physically located in an eligible state to participate.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default WhereWeOperatePage;
