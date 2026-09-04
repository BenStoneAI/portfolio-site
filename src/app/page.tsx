import type { Metadata } from "next";
import { Bridge } from "@/components/about/Bridge";
import { Hero } from "@/components/home/Hero";
import { HowIBuild } from "@/components/home/HowIBuild";
import { PositioningStrip } from "@/components/home/PositioningStrip";
import { SelectedWork } from "@/components/home/SelectedWork";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Bridge eyebrow="Where I Operate" />
      <PositioningStrip />
      <SelectedWork />
      <HowIBuild />
    </>
  );
}
