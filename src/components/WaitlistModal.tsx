
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "You're on the waitlist!",
      description: "We'll notify you when Outcome Duel launches.",
    });

    setEmail("");
    setName("");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#111519] border-white/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-white">
            Join the Waitlist
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center mb-6">
          <p className="text-white/80">
            Be the first to know when Outcome Duel launches on mobile!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#18D47B] hover:bg-[#15C06F] text-[#111519] font-semibold py-3"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>

        <p className="text-xs text-white/60 text-center mt-4">
          We'll never spam you. Unsubscribe anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
