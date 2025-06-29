import { motion, useScroll } from "framer-motion";

const ProgressBar = ({ scrollRef }) => {
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    layoutEffect: false,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 z-60 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
