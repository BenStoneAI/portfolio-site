import type { Metadata } from "next";
import { Bridge } from "@/components/about/Bridge";
import { Hero } from "@/components/home/Hero";
import { HowIBuild } from "@/components/home/HowIBuild";
import { PositioningStrip } from "@/components/home/PositioningStrip";
import { ProofStrip } from "@/components/home/ProofStrip";
import { SelectedWork } from "@/components/home/SelectedWork";
import { StandardsSection } from "@/components/home/StandardsSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Bridge eyebrow="Where I Operate" />
      <PositioningStrip />
      <SelectedWork />
      <StandardsSection />
      <HowIBuild />
    </>
  );
}
