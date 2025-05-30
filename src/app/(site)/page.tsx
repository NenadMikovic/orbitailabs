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
  title: "AI Tool - Next.js Template for AI Tools",
  description: "This is Home for AI Tool",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features /> 
      <Pricing />
      <Newsletter />
        <FeaturesList />
        <section className="relative z-20 overflow-hidden pb-20 pt-22.5 lg:pt-27.5 xl:pt-32.5 2xl:pt-45">
        <Reviews />
      </section>
      <Clients />
      <Faq />
      <CallToAction />
    </>
  );
}
