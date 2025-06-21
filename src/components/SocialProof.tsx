
import { useEffect, useState } from "react";

const SocialProof = () => {
  const [totalPaid, setTotalPaid] = useState(376000);

  const testimonials = [
    {
      quote: "I've won over $200 this month just predicting NBA games with my friends. It's actually skill-based, not luck!",
      name: "Marcus T.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The instant payouts are incredible. I won a $45 contest and had the money in my account within minutes.",
      name: "Sarah K.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Finally, a prediction app that's actually fair and pays out real money. Love competing with my college friends.",
      name: "Jake M.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPaid(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#0B0E11]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#18D47B]/20 to-transparent p-8 rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="$45 Win Screenshot"
                className="rounded-2xl shadow-2xl max-w-xs mx-auto"
              />
              <div className="absolute top-4 left-4 bg-[#18D47B] text-[#111519] px-4 py-2 rounded-full font-bold">
                +$45 Win!
              </div>
            </div>
          </div>

          {/* Right - Testimonials */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Real Players, Real Wins</h2>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <p className="text-white/90 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-semibold">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Money Counter */}
            <div className="text-center p-6 bg-gradient-to-r from-[#18D47B]/10 to-transparent rounded-xl">
              <div className="text-3xl font-bold text-[#18D47B]">
                ${totalPaid.toLocaleString()}+
              </div>
              <p className="text-white/70">paid to players so far</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
