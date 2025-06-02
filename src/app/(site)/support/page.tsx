import AboutSection from "@/components/About/AboutSection";
import Team from "@/components/About/Team";
import Video from "@/components/About/Video";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import Reviews from "@/components/Home/Reviews";
import Newsletter from "@/components/Newsletter";
import Support from "@/components/Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OrbitAI Labs | Support",
  description: "Need help with your Stellaris trading bot or OrbitAI Labs services? Access setup guides, account support, and expert assistance — we’re here to help you succeed.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="About Page" />
      <AboutSection />
      <Support />
      <Features />
      <Video />
      <Team />
      <section className="relative z-20 overflow-hidden pb-20">
        <Reviews />
      </section>
      <Clients />
      <CallToAction />
      <Newsletter />
    </>
  );
};

export default AboutPage;
