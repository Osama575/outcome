
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Outcome Duel legal?",
      answer: "Yes! Outcome Duel operates as a skill-based gaming platform, which is legal in most US states. We're fully licensed and compliant with all applicable regulations in the states where we operate."
    },
    {
      question: "How do payouts work?",
      answer: "Payouts are instant! When you win a contest, the money is immediately available in your account. You can withdraw to your bank account, PayPal, or other supported payment methods within minutes."
    },
    {
      question: "What sports and events can I predict?",
      answer: "You can create contests around NFL, NBA, MLB, NHL, college sports, UFC, reality TV shows, award ceremonies, and many other events. If it has an outcome, you can probably duel on it!"
    },
    {
      question: "How much does it cost to play?",
      answer: "Contest entry fees start as low as $1. You set the entry fee when creating a contest, and the winner takes the entire prize pool (minus a small platform fee)."
    },
    {
      question: "Can I play with friends?",
      answer: "Absolutely! You can create private contests and invite specific friends, or join public contests and get matched with other players of similar skill levels."
    },
    {
      question: "What makes this skill-based vs gambling?",
      answer: "Success in Outcome Duel requires knowledge, research, and analysis - not luck. Players use their expertise about sports, teams, and events to make informed predictions, just like daily fantasy sports."
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2);
            }
          }
          .shimmer-border {
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
            background-size: 1000px 100%;
            animation: shimmer 3s infinite;
          }
          .glow-hover:hover {
            animation: pulse-glow 2s infinite;
          }
        `}
      </style>
      
      <section id="faq" className="py-20 bg-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10"></div>
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/80">Everything you need to know about Outcome Duel</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`item-${index}`}
                  className="relative group glow-hover"
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-xl shimmer-border"></div>
                  </div>
                  
                  {/* Main container */}
                  <div className="relative bg-gradient-to-br from-white/8 to-white/4 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm group-hover:from-white/12 group-hover:to-white/6 transition-all duration-300 group-hover:border-white/20 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                    <AccordionTrigger className="text-left px-6 py-6 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 text-lg font-semibold hover:no-underline [&[data-state=open]>svg]:text-blue-400 [&[data-state=open]>svg]:rotate-180 group-hover:text-white">
                      <span className="relative z-10">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-white/80 leading-relaxed data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="pt-2 border-t border-white/10">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-white/60 mb-4">Still have questions?</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
