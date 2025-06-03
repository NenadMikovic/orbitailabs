import AboutSection from "@/components/About/AboutSection";
import Team from "@/components/About/Team";
import Video from "@/components/About/Video";
import Breadcrumb from "@/components/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
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

const SupportPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Support" />
      <AboutSection />
      <Support />
      <Faq />
    </>
  );
};

export default SupportPage;
