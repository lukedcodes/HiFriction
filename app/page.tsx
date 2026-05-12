import type { Metadata } from "next";
import Aurora from "@/components/Aurora";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Challenges from "@/components/Challenges";
import WaitlistCTA from "@/components/WaitlistCTA";
import ScrollOnArrival from "@/components/ScrollOnArrival";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <ScrollOnArrival />
      <Aurora />
      <Hero />
      <HowItWorks />
      <Challenges />
      <WaitlistCTA />
    </>
  );
}
