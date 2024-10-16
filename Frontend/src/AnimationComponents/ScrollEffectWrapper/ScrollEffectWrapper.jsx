import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const ScrollEffectWrapper = ({ children, start, end, className }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div ref={ref} className={className} style={{ transform, opacity }}>
      {children}
    </motion.div>
  );
};

export default ScrollEffectWrapper;
