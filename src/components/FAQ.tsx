
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
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/80">Everything you need to know about Outcome Duel</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="text-left px-6 py-6 hover:bg-white/10 transition-colors text-lg font-semibold hover:no-underline [&[data-state=open]>svg]:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-white/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
