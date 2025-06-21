
import { Shield, DollarSign, Zap, BarChart3, Users, Smartphone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FeaturesPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Skill-Based & Legal",
      description: "Games of skill, not chance. Fully compliant with state regulations and fair play standards.",
      details: "Our contests are classified as games of skill under applicable state laws. We maintain strict compliance with all regulatory requirements and ensure fair play through advanced algorithms and monitoring systems."
    },
    {
      icon: DollarSign,
      title: "Real-Money Prizes",
      description: "Win actual cash from your predictions. Entry fees create real prize pools for winners.",
      details: "Every contest has real money on the line. Entry fees from all participants create the prize pool, and winners take home actual cash that can be withdrawn to their bank accounts."
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Get your winnings immediately after contests end. No waiting periods or complicated withdrawals.",
      details: "Winners receive their payouts instantly when contests conclude. Our streamlined payment system ensures you get your money fast, with multiple withdrawal options available."
    },
    {
      icon: BarChart3,
      title: "Live Leaderboards",
      description: "Track your performance and see how you stack up against other players in real-time.",
      details: "Watch the competition unfold with live updates. See your ranking change as events progress and know exactly where you stand against other participants throughout the contest."
    },
    {
      icon: Users,
      title: "Play With Friends",
      description: "Create private contests with friends or get matched with players of similar skill levels.",
      details: "Challenge your friends directly in private contests or let our matching system pair you with players of similar skill levels for fair and competitive gameplay."
    },
    {
      icon: Smartphone,
      title: "iOS & Android",
      description: "Seamless mobile experience designed for on-the-go predictions and real-time updates.",
      details: "Native mobile apps for both iOS and Android provide the best possible experience. Get push notifications for contest updates, make predictions anywhere, and never miss an opportunity to compete."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-blue-900/20">
        <div className="max-w-[1140px] mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Features That Make Us Different
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Discover why Outcome Duel is the most engaging way to test your prediction skills and win real money
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                    <p className="text-lg text-white/80 mb-6">{feature.description}</p>
                    <p className="text-white/70 leading-relaxed">{feature.details}</p>
                  </div>
                  <div className={`bg-white/5 border border-white/10 rounded-2xl p-8 ${
                    index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                  }`}>
                    <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-transparent rounded-xl flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-blue-400/50" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Competing?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of players already testing their skills and winning real money
          </p>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 text-lg font-semibold">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
