
const Features = () => {
  const features = [
    {
      emoji: "🛡",
      title: "Skill-Based & Legal",
      description: "Play games of skill, not chance. Fully compliant with state regulations and completely legal where available."
    },
    {
      emoji: "💸",
      title: "Real-Money Prizes",
      description: "Win actual cash prizes. Entry fees go directly into the prize pool for the winner to claim."
    },
    {
      emoji: "🔄",
      title: "Instant Payouts",
      description: "Get your winnings immediately. No waiting periods or complicated withdrawal processes."
    },
    {
      emoji: "📈",
      title: "Live Leaderboards",
      description: "Track your performance in real-time. See how you stack up against other players as contests unfold."
    },
    {
      emoji: "🤝",
      title: "Play With Friends",
      description: "Challenge your friends directly or create private contests. Make predictions more fun with people you know."
    },
    {
      emoji: "📱",
      title: "iOS, Android & Web",
      description: "Play anywhere, anytime. Full-featured apps on all platforms with seamless synchronization."
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#111519]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features & Benefits</h2>
          <p className="text-xl text-white/80">Everything you need to compete and win</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
