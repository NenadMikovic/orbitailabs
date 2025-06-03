import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrbitAI Labs | Refund Policy",
  description: "Need help with your Stellaris trading bot or OrbitAI Labs services? Access setup guides, account support, and expert assistance — we’re here to help you succeed.",
  // other metadata
};

const RefundPolicyPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Refund Policy" />
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
      <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10">Refund Policy</h1>

        <p className="text-sm text-white/60 mb-6">
          Last Updated: June 4, 2025
        </p>

        <p className="text-base leading-relaxed text-white/80 mb-6">
          At OrbitAI Labs, we strive to ensure customer satisfaction with all of our AI-powered trading software and services. This Refund Policy outlines the circumstances under which refunds may be granted.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. First-Time Purchase Guarantee</h2>
        <p className="text-base leading-relaxed text-white/80">
          We offer a one-time refund for first-time purchases within **48 hours** of purchase, provided that:
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>You have not downloaded or activated the software license.</li>
          <li>You submit a refund request within the 48-hour window.</li>
        </ul>

        <p className="text-base leading-relaxed text-white/80 mt-4">
          After activation or download, the product is considered “used” and no refund will be issued.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. No Refunds After Activation</h2>
        <p className="text-base leading-relaxed text-white/80">
          Due to the nature of digital software and licensing, we do **not** offer refunds after a product has been activated, downloaded, or used. We encourage all users to review product details carefully before purchase.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Subscription Cancellations</h2>
        <p className="text-base leading-relaxed text-white/80">
          You may cancel your subscription at any time through your account dashboard. Your access will continue until the end of the current billing cycle. No partial refunds are issued for time unused.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Eligibility Exceptions</h2>
        <p className="text-base leading-relaxed text-white/80">
          In rare cases, we may issue a refund outside this policy if:
        </p>
        <ul className="list-disc ml-5 mt-2 text-white/70 space-y-1 text-base">
          <li>You've experienced a critical technical issue confirmed by our support team.</li>
          <li>Your payment was duplicated or made in error.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. How to Request a Refund</h2>
        <p className="text-base leading-relaxed text-white/80">
          To request a refund, please email us at{" "}
          <a
            href="mailto:support@orbitailabs.com"
            className="text-indigo-400 hover:underline"
          >
            support@orbitailabs.com
          </a>{" "}
          with your order number, email used at checkout, and reason for the request. Our support team will respond within 48 business hours.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Chargebacks</h2>
        <p className="text-base leading-relaxed text-white/80">
          Filing a chargeback without contacting us first may result in account suspension or permanent ban from using our services. We are committed to resolving disputes fairly and quickly.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
        <p className="text-base leading-relaxed text-white/80">
          If you have any questions about this policy or need help with a refund, contact us at{" "}
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

export default RefundPolicyPage;
