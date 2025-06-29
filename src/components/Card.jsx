import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Card = ({ title, img }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={ref}
      className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 h-70"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="relative z-10 w-full h-full bg-[#11263d] border-4 border-[#1c3b57] shadow-[6px_6px_0_0_#1c3b57] rounded-xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
        <div className="w-28 h-28 flex items-center justify-center">
          <img
            src={img}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h2 className="text-[#80c0ff] text-2xl mt-4 uppercase tracking-widest text-center">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export default Card;
