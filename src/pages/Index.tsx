
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => {
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
      <Hero />
      <HowItWorks />
      <Features />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Index;
