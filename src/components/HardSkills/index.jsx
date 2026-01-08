import HSkillsList from "./HSkillsList";
import { motion } from "motion/react";

const HardSkills = () => {
  return (
    <section className="w-full h-auto pb-[6em]">
      <motion.div initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        viewport={{ once: true }} id="hardSkills" className="text-[#000]">
        {" "}
        <h2 className="font-bold text-[1.5rem] text-center">Habilidades técnicas (Hard Skills)</h2>
        <HSkillsList />
      </motion.div>
    </section>
  );
};

export default HardSkills;
