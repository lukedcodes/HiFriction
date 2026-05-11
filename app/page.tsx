import type { Metadata } from "next";
import Aurora from "@/components/Aurora";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WaitlistCTA from "@/components/WaitlistCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Aurora />
      <Hero />
      <Features />
      <HowItWorks />
      <WaitlistCTA />
    </>
  );
}
