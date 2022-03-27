import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { randomiser } from "../../lib/utility/randomiser";

// See for framer-motion options: https://www.framer.com/docs/animation/
type Props = {
  children?: ReactNode;
};

const FadeInSection = ({ children }: Props) => {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, scale: 1 /* y: 0  */ },
    hidden: {
      opacity: 0,
      scale: 0.85,
      // x: Number(randomiser([50, -50])),
      // y: 50,
    },
  };

  return (
    <motion.div
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      ref={ref}
      className=""
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
