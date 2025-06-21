
import { useState } from "react";
import { Button } from "@/components/ui/button";
import WaitlistModal from "@/components/WaitlistModal";

const MobileBottomBar = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-[#111519] border-t border-white/10 p-4 md:hidden z-40">
        <Button 
          onClick={() => setIsWaitlistOpen(true)}
          className="w-full bg-[#18D47B] hover:bg-[#15C06F] text-[#111519] rounded-full py-4 text-lg font-bold"
        >
          Join Waitlist
        </Button>
      </div>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  );
};

export default MobileBottomBar;
