import Projects from "./Projects";
import { motion } from "motion/react";

const MyProjects = () => {
  return (
    <section id="projects" className="flex justify-center w-full">
      <motion.div initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        viewport={{ once: true }} className="card">
        <h2 className="font-bold text-[1.5rem] text-center pb-8">Meus projetos</h2>
        <Projects />
      </motion.div>
    </section>
  );
};

export default MyProjects;
