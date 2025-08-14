import React from "react";
import SSkillsList from "./SSkillsList";

const SoftSkills = () => {
  return (
    <section
      id="softSkills"
      className="flex justify-center pb-[6em] md:text-[1.2em]"
    >
      <div className="card">
        <h2 className="subtitle">Habilidades comportamentais (Soft Skills)</h2>
        <SSkillsList />
      </div>
    </section>
  );
};

export default SoftSkills;
