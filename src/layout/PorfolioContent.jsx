import { useRef } from "react";
import ProgressBar from "../components/ScrollProgress";
import GridLayout from "../components/GridLayout";
import { motion } from "framer-motion";
import TextReveal from "../components/animations/TextReveal";
import Footer from "./Footer";
import SimpleNav from "./SimpleNav";

const PorfolioContent = () => {
  const scrollRef = useRef(null);

  return (
    <main
      ref={scrollRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <ProgressBar scrollRef={scrollRef} />

      {/* Hero Section */}
      <section className="snap-start min-h-screen p-6 md:p-10 flex flex-col">
        {/* Nav at the top */}
        <div className="mb-6">
          <SimpleNav />
        </div>

        {/* Center the rest vertically */}
        <motion.div
          className="flex-grow flex flex-col justify-center text-left w-full"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Row: Heading + Avatar (reversed on larger screens) */}
          <div className="flex flex-col sm:flex-row-reverse items-center justify-end gap-2">
            {/* Avatar */}
            <motion.div
              className="relative w-50 h-50 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-45 lg:h-45 hover:scale-105 duration-300"
              initial={{ scale: 0, rotate: 180, opacity: 0 }}
              animate={{ scale: 1, rotate: 360, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
              }}
            >
              <div className="absolute inset-0 animate-spin-slow z-0 rounded-full p-[3px] bg-gradient-to-tr from-[#0f172a] via-[#312e81] to-[#06b6d4]">
                <div className="w-full h-full bg-black rounded-full" />
              </div>
              <div className="absolute inset-[3px] z-10 rounded-full overflow-hidden">
                <img
                  src="/assets/fig1.jpeg"
                  alt="zeyad's avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="archivo-black-regular text-4xl sm:text-5xl md:text-6xl lg:text-8xl capitalize text-center sm:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
              Hi, I am Zeyad
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.h2
            className="archivo-black-regular text-4xl sm:text-5xl md:text-6xl lg:text-8xl capitalize text-center sm:text-left mt-2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          >
            A Full-Stack Web Developer
          </motion.h2>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        className="snap-start flex flex-col min-h-screen p-6 md:p-10"
        id="techStack"
      >
        <TextReveal delay={0.1}>
          <h3 className="archivo-black-regular text-4xl sm:text-4xl md:text-5xl lg:text-7xl capitalize text-center md:text-left">
            My tech stack
          </h3>
        </TextReveal>

        <GridLayout type="skills" />
      </section>

      {/* Projects Section */}
      <section
        className="snap-start flex flex-col min-h-screen p-6 md:p-10"
        id="projects"
      >
        <TextReveal delay={0.1}>
          <h3 className="archivo-black-regular text-4xl sm:text-4xl md:text-5xl lg:text-7xl capitalize text-center md:text-left">
            Projects I worked on
          </h3>
        </TextReveal>
        <GridLayout type="projects" />
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

export default PorfolioContent;
