import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageCircle, Mail, Phone, Clock, Search, HelpCircle, Book, AlertCircle, CheckCircle, Users, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Support = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goBack = () => {
        window.history.back();
    };

    const supportCategories = [
        {
            icon: HelpCircle,
            title: "Getting Started",
            description: "Learn the basics of Outcome Duel",
            articles: ["How to create an account", "Making your first contest", "Understanding the rules", "Age verification"]
        },
        {
            icon: Users,
            title: "Account & Profile",
            description: "Manage your account settings",
            articles: ["Update personal information", "Change password", "Account verification", "Close account"]
        },
        {
            icon: CheckCircle,
            title: "Contests & Games",
            description: "Everything about contests",
            articles: ["How contests work", "Contest rules", "Dispute resolution", "Contest history"]
        },
        {
            icon: AlertCircle,
            title: "Payments & Withdrawals",
            description: "Money management help",
            articles: ["Add payment method", "Withdraw winnings", "Transaction history", "Payment issues"]
        }
    ];

    const faqItems = [
        {
            question: "How do I get started with Outcome Duel?",
            answer: "To get started, download our app and create an account. You'll need to verify your identity and be at least 18 years old (21+ in some states). Once verified, you can create or join contests with other users."
        },
        {
            question: "How do contests work?",
            answer: "Contests are peer-to-peer skill-based competitions. You and another user agree on an entry amount and make predictions on real-world events. The winner takes the total pot minus our small service fee."
        },
        {
            question: "Is Outcome Duel legal?",
            answer: "Yes, Outcome Duel operates as a skill-based prediction platform in states where it's legally permitted. We're fully licensed and regulated. Check our 'Where We Operate' page for your state's availability."
        },
        {
            question: "How do I withdraw my winnings?",
            answer: "You can withdraw funds anytime from your account balance. Go to the wallet section, select withdraw, choose your payment method, and enter the amount. Withdrawals typically take 1-5 business days."
        },
        {
            question: "What happens if there's a dispute?",
            answer: "All contests are verified using objective, third-party data sources. If you believe there's an error, contact our support team with details. We'll review the official sources and make a final determination."
        },
        {
            question: "Are there any fees?",
            answer: "We charge a small service fee for facilitating contests, which is clearly displayed before you join. There are no hidden fees, and we never charge for deposits or withdrawals."
        }
    ];

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Support",
            description: "Get help via email",
            contact: "help@outcomeduel.com",
            response: "Response within 24 hours",
            availability: "24/7"
        },
        {
            icon: MessageCircle,
            title: "Live Chat",
            description: "Chat with our support team",
            contact: "Available in app",
            response: "Instant response",
            availability: "9 AM - 11 PM EST"
        },
        {
            icon: Phone,
            title: "Phone Support",
            description: "Speak directly with support",
            contact: "1-800-OUTCOME",
            response: "Immediate assistance",
            availability: "10 AM - 8 PM EST"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Navigation isScrolled={isScrolled} />

            <div className="pt-[120px] pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-12">
                        <Button
                            variant="ghost"
                            onClick={goBack}
                            className="mb-4 text-gray-400 hover:text-white p-0 h-auto"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Help Center
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            Get the help you need to make the most of Outcome Duel
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search for help..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 bg-gray-800/50 border-gray-700 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                        <method.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold">{method.title}</h3>
                                </div>
                                <p className="text-gray-300 mb-3">{method.description}</p>
                                <div className="space-y-2 text-sm">
                                    <p className="text-blue-400 font-medium">{method.contact}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">{method.response}</span>
                                        <Badge variant="outline" className="text-xs">
                                            {method.availability}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Support Categories */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">Browse by Category</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {supportCategories.map((category, index) => (
                                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors group cursor-pointer">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <category.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                                    <ul className="space-y-2">
                                        {category.articles.map((article, articleIndex) => (
                                            <li key={articleIndex} className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                                                • {article}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqItems.map((item, index) => (
                                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <HelpCircle className="w-5 h-5 text-blue-400" />
                                        {item.question}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Popular Articles */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">Popular Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "How to Create Your First Contest", views: "12.5k views", category: "Getting Started" },
                                { title: "Understanding Contest Rules", views: "8.2k views", category: "Contests" },
                                { title: "Withdrawing Your Winnings", views: "15.3k views", category: "Payments" },
                                { title: "Account Verification Process", views: "6.8k views", category: "Account" },
                                { title: "Responsible Gaming Guidelines", views: "4.1k views", category: "Safety" },
                                { title: "Troubleshooting Login Issues", views: "9.7k views", category: "Technical" }
                            ].map((article, index) => (
                                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Book className="w-4 h-4 text-blue-400" />
                                        <Badge variant="outline" className="text-xs">
                                            {article.category}
                                        </Badge>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{article.views}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* System Status */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">System Status</h2>
                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold">All Systems Operational</h3>
                                <Badge className="bg-green-600 text-white">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    Online
                                </Badge>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { service: "Contest Platform", status: "Operational", color: "green" },
                                    { service: "Payment Processing", status: "Operational", color: "green" },
                                    { service: "User Authentication", status: "Operational", color: "green" }
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                                        <span className="text-sm text-gray-300">{service.service}</span>
                                        <Badge className={`bg-${service.color}-600 text-white text-xs`}>
                                            {service.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-400 text-sm mt-4">
                                Last updated: 2 minutes ago • <a href="#" className="text-blue-400 hover:underline">View history</a>
                            </p>
                        </div>
                    </section>

                    {/* Emergency Support */}
                    <section className="mb-12">
                        <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertCircle className="w-6 h-6 text-red-400" />
                                <h3 className="text-xl font-bold text-red-400">Need Immediate Help?</h3>
                            </div>
                            <p className="text-white/90 mb-4">
                                If you're experiencing urgent issues with your account, funds, or need immediate assistance:
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-red-600 hover:bg-red-700 text-white">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Emergency Support
                                </Button>
                                <Button variant="outline" className="border-red-600 text-red-400 hover:bg-red-600/10">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Priority Chat
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Community Support */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">Community & Resources</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-6 h-6 text-purple-400" />
                                    <h3 className="text-lg font-semibold">Community Forum</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Connect with other users, share strategies, and get answers from the community.
                                </p>
                                <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
                                    Visit Forum
                                </Button>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Book className="w-6 h-6 text-green-400" />
                                    <h3 className="text-lg font-semibold">Knowledge Base</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Comprehensive guides, tutorials, and documentation for all platform features.
                                </p>
                                <Button variant="outline" className="border-green-600 text-green-400 hover:bg-green-600/10">
                                    Browse Articles
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Still Need Help */}
                    <section className="text-center">
                        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-600/30 rounded-xl p-8">
                            <Headphones className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Can't find what you're looking for? Our support team is here to help. Get in touch and we'll get back to you as soon as possible.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send us an Email
                                </Button>
                                <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/10">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Start Live Chat
                                </Button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Support; 