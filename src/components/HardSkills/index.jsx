import React from "react";
import HSkillsList from "./HSkillsList";

const HardSkills = () => {
  return (
    <section className="w-full h-auto pb-[6em] flex justify-center items-center">
      <div id="hardSkills" className="card">
        {" "}
        <h2 className="subtitle">Habilidades técnicas (Hard Skills)</h2>
        <HSkillsList />
      </div>
    </section>
  );
};

export default HardSkills;
