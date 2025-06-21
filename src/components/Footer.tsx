
import { Shield } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["How It Works", "Features", "Pricing", "Mobile App"],
    Legal: ["Terms of Service", "Privacy Policy", "Contest Rules", "Responsible Gaming"],
    Support: ["Help Center", "Contact Us", "Bug Reports", "Feature Requests"],
    Social: ["Twitter", "Instagram", "Discord", "Reddit"]
  };

  return (
    <footer className="bg-[#0B0E11] border-t border-white/10">
      <div className="max-w-[1140px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#18D47B] rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#111519]" />
              </div>
              <span className="text-xl font-bold">Outcome Duel</span>
            </div>
            <p className="text-white/70 text-sm">
              Skill-based prediction contests for sports and entertainment.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-white/70 hover:text-[#18D47B] text-sm transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <span>© Outcome Duel 2025</span>
              <button className="hover:text-[#18D47B] transition-colors">Terms</button>
              <button className="hover:text-[#18D47B] transition-colors">Privacy</button>
              <button className="hover:text-[#18D47B] transition-colors">Contact</button>
            </div>
          </div>
          <p className="text-xs text-white/50 mt-4 text-center md:text-left">
            Outcome Duel contests are games of skill. Void where prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
