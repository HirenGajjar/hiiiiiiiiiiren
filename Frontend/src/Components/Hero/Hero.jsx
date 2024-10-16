import React from "react";
import CenterImage from "../CenterImage/CenterImage.jsx";
import ParallaxImages from "../ParallaxImages/ParallaxImages.jsx";

const SECTION_HEIGHT = 3200;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px)` }}
      className="relative w-full bg-white"
    >
      <CenterImage />

      <ParallaxImages />
    </div>
  );
};

export default Hero;
