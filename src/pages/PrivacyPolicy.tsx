import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <Navigation isScrolled={isScrolled} />

            <div className="pt-[120px] pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-8">
                        <Button
                            variant="ghost"
                            onClick={goBack}
                            className="mb-4 text-gray-400 hover:text-white p-0 h-auto"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Last updated: December 2024
                        </p>
                    </div>

                    {/* Privacy Overview */}
                    <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-6 mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-6 h-6 text-blue-400" />
                            <h2 className="text-xl font-bold text-blue-400">Your Privacy Matters</h2>
                        </div>
                        <p className="text-white/90 leading-relaxed">
                            At Outcome Duel, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your data when you use our platform.
                        </p>
                    </div>

                    {/* Privacy Content */}
                    <div className="prose prose-invert max-w-none">

                        {/* Section 1 */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Eye className="w-5 h-5 text-purple-400" />
                                <h2 className="text-2xl font-bold text-blue-400">1. Information We Collect</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">1.1 Personal Information</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                                <p>When you create an account or use our services, we may collect:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Account Information:</strong> Username, email address, password, date of birth</li>
                                    <li><strong>Identity Verification:</strong> Government-issued ID, proof of address, Social Security number (for tax compliance)</li>
                                    <li><strong>Contact Information:</strong> Mailing address, phone number</li>
                                    <li><strong>Financial Information:</strong> Payment method details, banking information for withdrawals</li>
                                    <li><strong>Profile Information:</strong> Profile picture, preferences, settings</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">1.2 Usage Information</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                                <p>We automatically collect information about how you use our platform:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Contest Activity:</strong> Contests entered, predictions made, outcomes, winnings</li>
                                    <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address</li>
                                    <li><strong>Usage Data:</strong> Pages visited, time spent, features used, session information</li>
                                    <li><strong>Location Data:</strong> General location to ensure legal compliance</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">1.3 Third-Party Information</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>We may receive information from third parties such as:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Identity Verification Services:</strong> To verify your identity and prevent fraud</li>
                                    <li><strong>Payment Processors:</strong> Transaction information and payment status</li>
                                    <li><strong>Data Providers:</strong> Sports statistics and event outcomes for contest verification</li>
                                    <li><strong>Social Media:</strong> If you connect your social media accounts</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Settings className="w-5 h-5 text-purple-400" />
                                <h2 className="text-2xl font-bold text-blue-400">2. How We Use Your Information</h2>
                            </div>

                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>We use your information to:</p>

                                <h3 className="text-xl font-semibold text-purple-400 mb-3">2.1 Provide Our Services</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                                    <li>Create and manage your account</li>
                                    <li>Process contest entries and transactions</li>
                                    <li>Verify contest outcomes and distribute winnings</li>
                                    <li>Provide customer support</li>
                                    <li>Send important service notifications</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-purple-400 mb-3">2.2 Legal and Security</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                                    <li>Verify your identity and age</li>
                                    <li>Comply with legal requirements and regulations</li>
                                    <li>Prevent fraud, abuse, and illegal activities</li>
                                    <li>Ensure platform security and integrity</li>
                                    <li>Enforce our Terms and Conditions</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-purple-400 mb-3">2.3 Improve Our Platform</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Analyze usage patterns and preferences</li>
                                    <li>Develop new features and services</li>
                                    <li>Personalize your experience</li>
                                    <li>Conduct research and analytics</li>
                                    <li>Send promotional communications (with your consent)</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="w-5 h-5 text-purple-400" />
                                <h2 className="text-2xl font-bold text-blue-400">3. Information Sharing</h2>
                            </div>

                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>We may share your information in the following circumstances:</p>

                                <h3 className="text-xl font-semibold text-purple-400 mb-3">3.1 Service Providers</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                                    <li><strong>Payment Processors:</strong> To process deposits and withdrawals</li>
                                    <li><strong>Identity Verification:</strong> To verify your identity and prevent fraud</li>
                                    <li><strong>Cloud Services:</strong> For data storage and platform hosting</li>
                                    <li><strong>Analytics Providers:</strong> To understand platform usage</li>
                                    <li><strong>Customer Support:</strong> To provide technical assistance</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-purple-400 mb-3">3.2 Legal Requirements</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                                    <li>To comply with laws, regulations, or legal processes</li>
                                    <li>To respond to government requests or court orders</li>
                                    <li>To report suspicious activities to authorities</li>
                                    <li>For tax reporting and compliance</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-purple-400 mb-3">3.3 Business Transfers</h3>
                                <p className="mb-6">
                                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to this Privacy Policy.
                                </p>

                                <div className="bg-green-900/20 border border-green-600/30 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-green-400 mb-3">What We Don't Share</h3>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>We never sell your personal information to third parties</li>
                                        <li>We don't share your contest strategies or predictions</li>
                                        <li>We don't provide your financial information to marketers</li>
                                        <li>We don't share your data for advertising purposes</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Lock className="w-5 h-5 text-purple-400" />
                                <h2 className="text-2xl font-bold text-blue-400">4. Data Security</h2>
                            </div>

                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>We implement comprehensive security measures to protect your information:</p>

                                <h3 className="text-xl font-semibold text-purple-400 mb-3">4.1 Technical Safeguards</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                                    <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                                    <li><strong>Secure Servers:</strong> Industry-standard secure hosting infrastructure</li>
                                    <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
                                    <li><strong>Regular Audits:</strong> Ongoing security assessments and vulnerability testing</li>
                                    <li><strong>Monitoring:</strong> 24/7 monitoring for unauthorized access or suspicious activity</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-purple-400 mb-3">4.2 Account Security</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Strong Passwords:</strong> We require secure password creation</li>
                                    <li><strong>Two-Factor Authentication:</strong> Available for enhanced account protection</li>
                                    <li><strong>Session Management:</strong> Automatic logout and session timeout features</li>
                                    <li><strong>Login Monitoring:</strong> Alerts for unusual login activity</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="w-5 h-5 text-purple-400" />
                                <h2 className="text-2xl font-bold text-blue-400">5. Your Rights and Choices</h2>
                            </div>

                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>You have the following rights regarding your personal information:</p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gray-800/50 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-purple-400 mb-3">Access & Portability</h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm">
                                            <li>Request a copy of your personal data</li>
                                            <li>Download your account information</li>
                                            <li>View your contest history</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-purple-400 mb-3">Correction & Deletion</h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm">
                                            <li>Update incorrect information</li>
                                            <li>Request deletion of your account</li>
                                            <li>Correct inaccurate data</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-purple-400 mb-3">Communication Preferences</h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm">
                                            <li>Opt out of marketing emails</li>
                                            <li>Manage notification settings</li>
                                            <li>Control promotional communications</li>
                                        </ul>
                                    </div>

                                    <div className="bg-gray-800/50 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-purple-400 mb-3">Data Processing</h3>
                                        <ul className="list-disc list-inside space-y-2 text-sm">
                                            <li>Object to certain data processing</li>
                                            <li>Restrict processing in specific cases</li>
                                            <li>Withdraw consent where applicable</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">6. Data Retention</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>We retain your information for as long as necessary to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                                    <li>Provide our services to you</li>
                                    <li>Comply with legal and regulatory requirements</li>
                                    <li>Resolve disputes and enforce agreements</li>
                                    <li>Prevent fraud and abuse</li>
                                </ul>
                                <p>
                                    After account closure, we may retain certain information for legal compliance, fraud prevention, and legitimate business purposes for up to 7 years or as required by law.
                                </p>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">7. Cookies and Tracking</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>We use cookies and similar technologies to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                                    <li>Remember your preferences and settings</li>
                                    <li>Analyze platform usage and performance</li>
                                    <li>Provide security and fraud protection</li>
                                    <li>Deliver personalized content</li>
                                </ul>
                                <p>
                                    You can control cookie settings through your browser, but disabling cookies may affect platform functionality.
                                </p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">8. International Data Transfers</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>
                                    Our services are primarily offered in the United States. If you access our platform from outside the US, your information may be transferred to and processed in the United States, where privacy laws may differ from your jurisdiction.
                                </p>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">9. Children's Privacy</h2>
                            <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-6">
                                <p className="text-white/90 leading-relaxed">
                                    Our platform is not intended for users under 18 years of age (or 21 in certain jurisdictions). We do not knowingly collect personal information from minors. If we discover that we have collected information from a minor, we will delete it immediately.
                                </p>
                            </div>
                        </section>

                        {/* Section 10 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">10. Changes to This Policy</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>
                                    We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Posting the updated policy on our platform</li>
                                    <li>Sending you an email notification</li>
                                    <li>Displaying a prominent notice on our website</li>
                                </ul>
                                <p>
                                    Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                                </p>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">11. Contact Us</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                                <div className="bg-gray-800/50 rounded-xl p-6 space-y-3">
                                    <p><strong>Email:</strong> privacy@outcomeduel.com</p>
                                    <p><strong>Support:</strong> help@outcomeduel.com</p>
                                    <p><strong>Data Protection Officer:</strong> dpo@outcomeduel.com</p>
                                    <p><strong>Mailing Address:</strong> [Company Address]</p>
                                </div>
                            </div>
                        </section>

                        {/* Final Statement */}
                        <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-6 mt-8">
                            <p className="text-white/90 leading-relaxed text-center">
                                <strong>Thank you for trusting Outcome Duel with your personal information. We are committed to protecting your privacy and providing a safe, secure platform for skill-based contests.</strong>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy; 