
import { CalendarPlus, CheckSquare, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      icon: CalendarPlus,
      title: "Create a Contest",
      description: "Set up predictions on your favorite sports or shows"
    },
    {
      icon: CheckSquare,
      title: "Make Predictions",
      description: "Use your knowledge to predict outcomes"
    },
    {
      icon: Users,
      title: "Invite or Auto-Match",
      description: "Challenge friends or get matched with other players"
    },
    {
      icon: Trophy,
      title: "Win the Pot",
      description: "Winner takes all the entry fees"
    }
  ];

  const scrollToSignUp = () => {
    const element = document.getElementById('final-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-[#0B0E11]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-white/80">Start competing in 4 simple steps</p>
        </div>

        {/* Steps Timeline */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#18D47B] to-transparent z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative z-10">
                <div className="w-24 h-24 bg-[#18D47B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-[#111519]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            onClick={scrollToSignUp}
            className="border-[#18D47B] text-[#18D47B] hover:bg-[#18D47B] hover:text-[#111519] rounded-full px-8 py-4"
          >
            Start a Contest
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
