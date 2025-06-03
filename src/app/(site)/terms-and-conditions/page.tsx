import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrbitAI Labs | Terms & Conditions",
  description: "Need help with your Stellaris trading bot or OrbitAI Labs services? Access setup guides, account support, and expert assistance — we’re here to help you succeed.",
  // other metadata
};

const TermsAndConditionsPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Terms & Conditions" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
      <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10">
          Terms and Conditions
        </h1>

        <p className="text-sm text-white/60 mb-6">
          Last Updated: June 4, 2025
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Services</h2>
        <p className="text-base leading-relaxed text-white/80">
          You must be at least 18 years old to use our Services. By using
          OrbitAI Labs, you confirm that you meet this requirement and have the
          legal capacity to enter into this agreement.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Software Licensing</h2>
        <p className="text-base leading-relaxed text-white/80">
          All trading bots and software products are licensed, not sold. You are
          granted a non-exclusive, non-transferable, revocable license to use
          them, subject to compliance with these Terms.
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>No redistribution, resale, or reverse engineering is allowed.</li>
          <li>Licenses are limited to specific users or devices.</li>
          <li>We may revoke licenses in case of misuse.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Subscriptions and Payments
        </h2>
        <p className="text-base leading-relaxed text-white/80">
          By purchasing a license or subscription, you authorize us to charge
          your payment method on a recurring or one-time basis, as chosen.
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>Prices may change with prior notice.</li>
          <li>You may cancel anytime via your dashboard.</li>
          <li>No partial refunds unless required by law.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Refund Policy</h2>
        <p className="text-base leading-relaxed text-white/80">
          We offer a 48-hour refund window for first-time purchases if the
          software has not been activated or downloaded. After this, all sales
          are final. Contact{" "}
          <a
            href="mailto:support@orbitailabs.com"
            className="text-indigo-400 hover:underline"
          >
            support@orbitailabs.com
          </a>{" "}
          for help.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. No Financial Advice</h2>
        <p className="text-base leading-relaxed text-white/80">
          OrbitAI Labs provides automated tools but does not offer financial or
          investment advice. Use at your own risk and consult a licensed advisor
          before making trading decisions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Risk Disclaimer</h2>
        <p className="text-base leading-relaxed text-white/80">
          Trading involves substantial risk. Past results do not guarantee
          future performance. We are not responsible for any losses incurred.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Intellectual Property
        </h2>
        <p className="text-base leading-relaxed text-white/80">
          All content, software, visuals, and branding are property of OrbitAI
          Labs and protected under intellectual property laws.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Termination</h2>
        <p className="text-base leading-relaxed text-white/80">
          We may suspend or terminate access to our services at any time for
          violation of these Terms or other harmful activity.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to Terms</h2>
        <p className="text-base leading-relaxed text-white/80">
          These Terms may be updated periodically. Continued use of our services
          after changes constitutes acceptance of the new Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p className="text-base leading-relaxed text-white/80">
          For questions or concerns, contact us at{" "}
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

export default TermsAndConditionsPage;
