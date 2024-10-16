import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipIcon = ({ icon, href, index }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden text-2xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * index,
          }}
          className="inline-block"
        >
          {icon}
        </motion.div>

        <motion.div
          className="absolute inset-0"
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * index,
          }}
        >
          {icon}
        </motion.div>
      </div>
    </motion.a>
  );
};

export default FlipIcon;
