import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProofBand } from "@/components/ProofBand";
import { Problem } from "@/components/Problem";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { Method } from "@/components/Method";
import { CaseStudies } from "@/components/CaseStudies";
import { RoiCalculator } from "@/components/RoiCalculator";
import { Guarantee } from "@/components/Guarantee";
import { HardLines } from "@/components/HardLines";
import { Offer } from "@/components/Offer";
import { Faq } from "@/components/Faq";
import { BookingSection } from "@/components/BookingSection";
import { StickyCta } from "@/components/StickyCta";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofBand />
        <Problem />
        <Section id="roi" className="border-t border-hairline">
          <RoiCalculator />
        </Section>
        <WhatWeBuild />
        <HardLines />
        <Method />
        <CaseStudies />
        <Guarantee />
        <Offer />
        <Faq />
        <BookingSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
