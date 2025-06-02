import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import Reviews from "@/components/Home/Reviews";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import Faq from "@/components/Faq";
import { Metadata } from "next";
import { integrations } from "../../../integrations.config";
import { sanityClient } from '@/libs/sanity';


export const metadata: Metadata = {
  title: "OrbitAI Labs | AI-Powered Trading with Stellaris",
  description: "Stellaris is a fully autonomous trading bot by OrbitAI Labs. Set it up once, activate your license, and let it trade with precision. No emotions, just results.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <section id="features">
  <Features />
</section>
<section id="pricing">
      <Pricing />
</section>
      <Newsletter />
      <section id="features-list">
        <FeaturesList />
        </section>
        <section id="reviews" className="relative z-20 overflow-hidden pb-20 pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45">
        <Reviews />
      </section>
      <section id="faq">
      <Faq />
      </section>
      <CallToAction />
    </>
  );
}
