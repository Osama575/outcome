
import { Shield, DollarSign, Zap, BarChart3, Users, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Skill-Based & Legal",
      description: "Games of skill, not chance. Fully compliant with state regulations and fair play standards."
    },
    {
      icon: DollarSign,
      title: "Real-Money Prizes",
      description: "Win actual cash from your predictions. Entry fees create real prize pools for winners."
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Get your winnings immediately after contests end. No waiting periods or complicated withdrawals."
    },
    {
      icon: BarChart3,
      title: "Live Leaderboards",
      description: "Track your performance and see how you stack up against other players in real-time."
    },
    {
      icon: Users,
      title: "Play With Friends",
      description: "Create private contests with friends or get matched with players of similar skill levels."
    },
    {
      icon: Smartphone,
      title: "iOS & Android",
      description: "Seamless mobile experience designed for on-the-go predictions and real-time updates."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Outcome Duel?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            The most engaging way to test your prediction skills and win real money
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#18D47B]/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-12 h-12 bg-[#18D47B]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#18D47B]/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-[#18D47B]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
