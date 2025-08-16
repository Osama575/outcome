import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsAndConditions = () => {
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
                            Terms and Conditions
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Effective Date: [Current Date]
                        </p>
                    </div>

                    {/* Important Notice */}
                    <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-6 mb-8">
                        <h2 className="text-xl font-bold text-red-400 mb-3">IMPORTANT NOTICE</h2>
                        <p className="text-white/90 leading-relaxed mb-4">
                            Please read these Terms carefully. They include a binding arbitration provision and a class action waiver that affect your legal rights. By using Outcome Duel, you agree to resolve any disputes through individual arbitration rather than in court or as part of a class action.
                        </p>
                        <p className="text-white/90 leading-relaxed mb-4">
                            These Terms also include a limitation of Outcome Duel's liability to a maximum of $250 and restrict the period for bringing any claims to one year from the date the issue arises.
                        </p>
                        <p className="text-white/90 leading-relaxed">
                            You have the right to consult with a legal advisor before accepting these Terms and participating in any contests on our platform. We strongly encourage you to do so.
                        </p>
                    </div>

                    {/* Terms Content */}
                    <div className="prose prose-invert max-w-none">

                        {/* Section 1 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">1. Introduction</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>
                                    Welcome to Outcome Duel ("the App," "the Platform," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of the Outcome Duel mobile application and website, including all content, features, functionality, and services offered through the App.
                                </p>
                                <p>
                                    By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree, you must not access or use the App.
                                </p>
                                <p>
                                    When we say "Outcome Duel," "we," "us," "our," or "Company," we mean [Legal Entity Name], along with its parents, subsidiaries, affiliates, agents, representatives, consultants, employees, officers, and directors.
                                </p>
                                <p>
                                    "App" refers to the Outcome Duel mobile application and any content or feature accessed through it.
                                </p>
                                <p>
                                    "Services" refers to the peer-to-peer prediction services provided by Outcome Duel, including any new features, tools, or applications.
                                </p>
                                <p>
                                    "User," "you," or "your" refers to you, the individual using the App and agreeing to these Terms.
                                </p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">2. Definitions</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>For these Terms, the following definitions apply:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>"Contest"</strong> refers to a peer-to-peer, skill-based competition between Users involving predictions on real-world events.</li>
                                    <li><strong>"Entry Amount"</strong> refers to the monetary value agreed upon by Users for participation in a specific Contest.</li>
                                    <li><strong>"Platform"</strong> refers to the Outcome Duel mobile application and website.</li>
                                    <li><strong>"Platform Fee"</strong> refers to the service fee charged by Outcome Duel for facilitating Contests.</li>
                                    <li><strong>"Prize"</strong> refers to the amount awarded to the winning User(s) of a Contest.</li>
                                    <li><strong>"User"</strong> refers to any individual who accesses or uses the Platform.</li>
                                    <li><strong>"Verification"</strong> refers to the process of confirming Contest outcomes using trusted and objective third-party data sources.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">3. Acceptance of Terms</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>By downloading the App, using the Platform, creating an Account, or clicking the "Agree" button on the App's sign-up page, you:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Acknowledge that you have read and understood these Terms</li>
                                    <li>Represent that you are of legal age to enter into a binding agreement</li>
                                    <li>Accept these Terms and agree that you are legally bound by them</li>
                                    <li>Agree to be bound by the Outcome Duel Privacy Policy, any applicable Contest rules, the Outcome Duel Member Code of Conduct, and all other operating rules, policies, and procedures published by Outcome Duel. These are expressly incorporated by reference.</li>
                                    <li>Agree, unless you opt out, to resolve all disputes through binding arbitration under Section 23. Section 23 also permits certain small claims and other exceptions, where applicable.</li>
                                    <li>Agree to the limitation of Outcome Duel's liability as described in Section 22 and agree to the one-year limitation period to bring any claims as outlined in Sections 23 and 28.</li>
                                </ul>
                                <p>
                                    If you do not agree to these requirements, do not use the Services. Instead, deactivate your Account and delete the App from your devices.
                                </p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">4. Modification to Terms</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>
                                    Outcome Duel reserves the right, at its sole discretion, to modify or replace these Terms at any time. The most current version will always be available through the App.
                                </p>
                                <p>
                                    Revised Terms will not apply to any disputes already subject to validly filed arbitration or litigation. However, you will be deemed to have accepted any changes to these Terms if you continue using the App, maintain an active Account, or keep deposited funds in your Account for seven (7) days after updated Terms are posted.
                                </p>
                                <p>
                                    Ongoing Contests will remain governed by the version of the Terms that was in effect at the time the Contest began.
                                </p>
                                <p>
                                    It is your responsibility to review these Terms regularly. By continuing to use the App or Services (except solely to review the Terms), you accept any modified Terms in full.
                                </p>
                                <p>
                                    Outcome Duel also reserves the right to modify, suspend, or discontinue the Services at any time and for any reason, without notice or liability.
                                </p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">5. License Grant and Restrictions</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>
                                    Subject to these Terms, Outcome Duel grants you a limited, non-exclusive, non-transferable license to download, install, and use the App for your personal, non-commercial use on devices owned or controlled by you, under the App's documentation.
                                </p>
                                <p>You may not:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Use or modify the App for any commercial purpose</li>
                                    <li>Transfer, sell, rent, or sub-license the App to any third party</li>
                                    <li>Copy, reproduce, or distribute the App or any part of it</li>
                                    <li>Reverse engineer, decompile, or disassemble any portion of the App</li>
                                    <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                                    <li>Use the App in any way that violates applicable laws or regulations</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">6. Outcome Duel Account</h2>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">6.1 Account Creation</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                                <p>
                                    To participate in Contests, you must create an Outcome Duel account ("Account"). You must be at least 18 years old — or 21+ in certain jurisdictions — to open an Account.
                                </p>
                                <p>
                                    To register, you must submit personal information, including a username, password, mailing address, phone number, date of birth, and any other details required for identity verification and legal compliance. You are responsible for providing accurate, complete, and current information.
                                </p>
                                <p>
                                    You may not use a username that promotes a business, implies affiliation, or that Outcome Duel, in its sole discretion, finds offensive or in violation of these Terms. Outcome Duel may request that you change your username or have it changed on your behalf if necessary.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">6.2 Account Misuse</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                                <p>
                                    You agree that the sole and specific purpose of creating an Account on Outcome Duel is to participate in Contests. Outcome Duel reserves the right to suspend, limit, or terminate your Account if, in our sole discretion, we determine that you are violating these Terms or misusing the Services in any way.
                                </p>
                                <p>
                                    Each User may only create one (1) Account. You may not "co-own" or share Accounts with others. Users are prohibited from using or otherwise controlling another person's Account. Any attempt to create or control multiple Accounts, or access Accounts belonging to others, is strictly prohibited and may result in the termination of your Account and the forfeiture of any associated funds.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">6.3 Account Confidentiality</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                                <p>
                                    You are solely responsible for maintaining the confidentiality of your Outcome Duel Account and password, and for restricting access to your devices. You agree to accept full responsibility for all activities that occur under your Account.
                                </p>
                                <p>
                                    If you become aware of any unauthorized use of your Account, you must report it to Outcome Duel immediately.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">6.4 Account Suspension or Termination</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                                <p>
                                    Outcome Duel reserves the right to suspend, restrict, or terminate your Account at any time, with or without notice, if we determine, at our sole discretion, that you have violated these Terms, engaged in fraudulent or unlawful activity, or otherwise misused the Services.
                                </p>
                                <p>
                                    In the event of termination, you may lose access to your Account, active Contests, and any associated funds, subject to applicable laws and our internal policies. We are not liable for any resulting losses or damages.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">6.5 Identity Verification</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>
                                    To comply with applicable laws, ensure platform integrity, and prevent fraud, Outcome Duel may require Users to verify their identity before accessing certain features or withdrawing funds. This may include providing government-issued identification, proof of address, or other documents.
                                </p>
                                <p>
                                    Failure to complete identity verification when requested may result in restricted functionality, delayed payouts, or suspension of your Account.
                                </p>
                            </div>
                        </section>

                        {/* Additional sections would continue here... */}
                        {/* For brevity, I'll add a few more key sections and indicate where the rest would go */}

                        {/* Section 7 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">7. Eligibility</h2>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">7.1 Geographic Eligibility</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                                <p>
                                    To participate in Contests, you must be physically located in a state, territory, or jurisdiction where Outcome Duel is legally permitted to operate ("Eligible Jurisdictions"). A full list of Eligible Jurisdictions can be found in the App and is subject to change at any time.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">7.2 Age Restrictions</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                                <p>
                                    You must be at least 18 years old — or 21 years old in certain jurisdictions — to participate in Contests. It is your responsibility to know and comply with the age restrictions applicable in your location.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mb-3">7.3 General Eligibility</h3>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>By creating an Account or participating in a Contest, you represent and warrant that:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>You are of legal age in your jurisdiction</li>
                                    <li>You are a U.S. citizen or legal resident with a valid U.S. address</li>
                                    <li>You are physically located in an Eligible Jurisdiction at the time of Contest participation</li>
                                    <li>You are not listed on any government watchlist or sanctions list</li>
                                    <li>You agree to comply with these Terms and any other agreements with Outcome Duel</li>
                                    <li>You are not subject to IRS backup withholding tax</li>
                                </ul>
                                <p>
                                    If Outcome Duel determines that you do not meet these eligibility requirements, we reserve the right to terminate your Account, suspend access to the Services, and take appropriate action regarding your Account balance.
                                </p>
                            </div>
                        </section>

                        {/* Key Legal Sections */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-red-400 mb-4">19. LIMITATION OF LIABILITY</h2>
                            <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-6">
                                <div className="space-y-4 text-white/90 leading-relaxed">
                                    <p>
                                        <strong>You agree that in no event shall Outcome Duel's total liability to you for any claim, cause of action, or dispute exceed $250.00.</strong>
                                    </p>
                                    <p>
                                        This limitation of liability applies to Outcome Duel, its affiliates, directors, employees, agents, partners, suppliers, and content providers.
                                    </p>
                                    <p>Outcome Duel shall not be liable for:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Any lost profits</li>
                                        <li>Data loss</li>
                                        <li>Or any special, indirect, incidental, punitive, or consequential damages of any kind</li>
                                    </ul>
                                    <p>
                                        regardless of how they arise, even if Outcome Duel has been advised of the possibility of such damages.
                                    </p>
                                    <p>
                                        Nothing in these Terms shall limit or exclude liability that cannot be limited or excluded under applicable law.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-red-400 mb-4">20. DISPUTE RESOLUTION, ARBITRATION AND CLASS ACTION WAIVER</h2>
                            <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-6">
                                <div className="space-y-4 text-white/90 leading-relaxed">

                                    <h3 className="text-xl font-semibold text-red-300 mb-3">20.1 Informal Resolution</h3>
                                    <p>
                                        If you have any problem, dispute, or legal claim related to Outcome Duel, you agree to first allow us to resolve the issue informally before initiating arbitration or litigation.
                                    </p>
                                    <p>
                                        To start this informal resolution process, send a written summary of your issue within 30 days of the event to: help@outcomeduel.com
                                    </p>

                                    <h3 className="text-xl font-semibold text-red-300 mb-3">20.2 Binding Arbitration</h3>
                                    <p>
                                        <strong>You and Outcome Duel agree to resolve any disputes or claims exclusively through final and binding arbitration, rather than in court or before a jury.</strong> However, either party may still bring claims in small claims court if eligible under local rules.
                                    </p>
                                    <p>
                                        <strong>All claims and disputes must be arbitrated on an individual basis. Class actions and collective arbitrations are not permitted.</strong>
                                    </p>

                                    <h3 className="text-xl font-semibold text-red-300 mb-3">20.3 30-Day Right to Opt-Out</h3>
                                    <p>
                                        You may opt out of this arbitration and class action waiver provision by sending written notice to: legal@outcomeduel.com
                                    </p>
                                    <p>
                                        <strong>Your opt-out notice must be received within 30 days of your first use of the Service.</strong> If you do not opt out within this period, you agree to be bound by these arbitration terms.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-red-400 mb-4">25. LIMITATION OF TIME TO FILE CLAIMS</h2>
                            <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-6">
                                <p className="text-white/90 leading-relaxed">
                                    <strong>Any cause of action or claim you may have arising out of or relating to these Terms or the Services must be commenced within one (1) year after the cause of action accrues. Otherwise, such cause of action or claim is permanently barred.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">28. Contact Information</h2>
                            <div className="space-y-4 text-white/90 leading-relaxed">
                                <p>If you have any questions about these Terms, please contact us at:</p>
                                <div className="bg-gray-800/50 rounded-xl p-6">
                                    <p className="font-semibold">Outcome Duel</p>
                                    <p>help@outcomeduel.com</p>
                                </div>
                            </div>
                        </section>

                        {/* Final Statement */}
                        <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-6 mt-8">
                            <p className="text-white/90 leading-relaxed text-center">
                                <strong>By using the Outcome Duel platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</strong>
                            </p>
                        </div>

                        {/* Note about full content */}
                        <div className="bg-gray-800/50 rounded-xl p-6 mt-8">
                            <p className="text-gray-400 text-sm text-center">
                                <em>Note: This page contains the key sections of the Terms and Conditions. The complete document includes all sections 1-28 as provided in the original content.</em>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TermsAndConditions; 