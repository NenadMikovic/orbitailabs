import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrbitAI Labs | Privacy Policy",
  description: "Need help with your Stellaris trading bot or OrbitAI Labs services? Access setup guides, account support, and expert assistance — we’re here to help you succeed.",
  // other metadata
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Privacy Policy" />
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
      <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10">Privacy Policy</h1>

        <p className="text-sm text-white/60 mb-6">
          Last Updated: June 4, 2025
        </p>

        <p className="text-base leading-relaxed text-white/80 mb-6">
          This Privacy Policy explains how OrbitAI Labs (“we,” “us,” or “our”)
          collects, uses, and protects your information when you use our
          website, services, and trading software.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="text-base leading-relaxed text-white/80">
          We collect personal information you provide when you:
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>Register for an account</li>
          <li>Purchase a subscription or license</li>
          <li>Contact us via email or chat</li>
          <li>Use our trading bots or platform features</li>
        </ul>

        <p className="text-base leading-relaxed text-white/80 mt-4">
          This may include your name, email address, billing details, and trading-related usage data.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="text-base leading-relaxed text-white/80">
          We use your information to:
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>Deliver our software and services</li>
          <li>Process transactions and manage subscriptions</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Improve product performance and security</li>
          <li>Send relevant product updates, promotions, and alerts</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Legal Basis (GDPR)</h2>
        <p className="text-base leading-relaxed text-white/80">
          We only process your data when legally allowed. This includes when:
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>You have given us consent</li>
          <li>Processing is required to fulfill a contract with you</li>
          <li>We are legally obligated to retain certain data</li>
          <li>We have a legitimate interest (e.g., fraud prevention, customer support)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Retention</h2>
        <p className="text-base leading-relaxed text-white/80">
          We retain your data only as long as necessary for the purposes outlined in this policy. You may request deletion of your data at any time unless legal obligations prevent it.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Sharing Your Data</h2>
        <p className="text-base leading-relaxed text-white/80">
          We do not sell your personal information. We may share data with:
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>Payment processors (e.g., Stripe, Paddle)</li>
          <li>Email providers and support tools</li>
          <li>Analytics and infrastructure partners</li>
        </ul>

        <p className="text-base leading-relaxed text-white/80 mt-4">
          All third-party services are bound by confidentiality and data protection agreements.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="text-base leading-relaxed text-white/80">
          Under GDPR and other data protection laws, you have the right to:
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
          <li>Object to certain types of processing</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Cookies & Tracking</h2>
        <p className="text-base leading-relaxed text-white/80">
          We use cookies and analytics to understand user behavior and improve our site. You may control cookie preferences through your browser settings.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Data Security</h2>
        <p className="text-base leading-relaxed text-white/80">
          We implement modern security practices, including encryption and secure storage, to protect your data. However, no method of online transmission is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
        <p className="text-base leading-relaxed text-white/80">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p className="text-base leading-relaxed text-white/80">
          For privacy-related requests, please contact us at{" "}
          <a
            href="mailto:support@orbitailabs.com"
            className="text-indigo-400 hover:underline"
          >
            support@orbitailabs.com
          </a>
          .
        </p>
      </section>
    </div>
    </>
  );
};

export default PrivacyPolicyPage;
