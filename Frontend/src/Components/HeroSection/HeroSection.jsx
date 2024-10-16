import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "../Hero/Hero";

const HeroSection = () => {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <Hero />
    </ReactLenis>
  );
};

export default HeroSection;
