import SSkillsList from "./SSkillsList";
import { motion } from "motion/react";

const SoftSkills = () => {
  return (
    <section
      id="softSkills"
      className="flex justify-center pb-[6em] md:text-[1.2em]"
    >
      <motion.div initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        viewport={{ once: true }} className="card">
        <h2 className="subtitle">Habilidades comportamentais (Soft Skills)</h2>
        <SSkillsList />
      </motion.div>
    </section>
  );
};

export default SoftSkills;
