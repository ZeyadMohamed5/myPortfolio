import { motion } from "framer-motion";
import skills from "../data/skills.json";
import projects from "../data/projects.json";
import Card from "./Card";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Add `type` prop to control which grid to show
const GridLayout = ({ type = "skills" }) => {
  const data = type === "projects" ? projects : skills;

  return (
    <motion.div
      className="grid grid-cols-12 mt-10 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((item, i) =>
        type === "projects" ? (
          <ProjectCard
            key={item.title}
            title={item.title}
            link={item.link}
            skills={item.skills}
            desc={item.desc}
          />
        ) : (
          <Card
            key={item.title}
            title={item.title}
            img={item.img}
            delay={i * 0.1}
          />
        )
      )}
    </motion.div>
  );
};

export default GridLayout;
