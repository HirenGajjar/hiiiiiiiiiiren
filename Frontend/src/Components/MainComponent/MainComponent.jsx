import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import SkillsSection from "../SkillsSection/SkillsSection";
function MainComponent() {
  return (
    <>
      <NavBar />
      <SocialMediaIcons />
      <HeroSection />
      <SkillsSection />
    </>
  );
}

export default MainComponent;
