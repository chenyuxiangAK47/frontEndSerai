import React from "react";
import Header from "../sections/Header.jsx";
import HeroSection from "../sections/HeroSection.jsx";
import TransitionBand from "../sections/TransitionBand.jsx";
import CollectionSection from "../sections/CollectionSection.jsx";
import InspoBoardSection from "../sections/InspoBoardSection.jsx";
import ResearchSection from "../sections/ResearchSection.jsx";
import FinalCTASection from "../sections/FinalCTASection.jsx";

function LandingPage() {
  return (
    <main className="page-root">
      <Header />
      <HeroSection />
      <TransitionBand />
      <CollectionSection />
      <InspoBoardSection />
      <ResearchSection />
      <FinalCTASection />
    </main>
  );
}

export default LandingPage;

