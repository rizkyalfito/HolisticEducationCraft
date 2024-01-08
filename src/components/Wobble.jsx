/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wobble = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { rotate: 0, scale: 1, opacity: 1 },
        hidden: { rotate: [-5, 5, -5, 5, 0], scale: 0.9, opacity: 0.9 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Wobble;
