import React from "react";
import SSkillsList from "./SSkillsList";

const SoftSkills = () => {
  return (
    <section className="flex justify-center pb-[6em] md:text-[1.4em]">
      <div className="card">
        <h2 className="subtitle">Habilidades comportamentais (Soft Skills)</h2>
        <SSkillsList />
      </div>
    </section>
  );
};

export default SoftSkills;
