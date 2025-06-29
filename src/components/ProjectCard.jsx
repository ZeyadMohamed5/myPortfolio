import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({ title, link, skills, desc }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={ref}
      className="col-span-12 md:col-span-6 relative z-50"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div
        className="rounded-2xl p-8 bg-gradient-to-br from-[#101c2e] via-[#0c1a2a] to-[#0b1724]
        border border-[#1e2d47] shadow-[0_0_20px_rgba(79,153,233,0.15)]
        hover:shadow-[0_0_30px_rgba(79,153,233,0.4)]
        transition-all duration-300 ease-out hover:scale-105"
      >
        <h4 className="text-4xl capitalize font-semibold text-sky-400">
          {title}
        </h4>

        <span className="text-sky-300 text-sm">{skills}</span>

        <div className="flex justify-between items-center flex-wrap">
          <p className="text-slate-300 mt-2 text-sm leading-relaxed w-130">
            {desc}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1 rounded-full border border-sky-600 bg-[#102a46] mt-3 md:mt-0
            hover:bg-sky-700/20 transition-all duration-200
            w-10 h-10 flex items-center justify-center"
          >
            <img
              src="/assets/backlink.svg"
              alt="External link"
              className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-200"
              style={{
                filter:
                  "invert(70%) sepia(30%) saturate(600%) hue-rotate(180deg)",
              }}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
