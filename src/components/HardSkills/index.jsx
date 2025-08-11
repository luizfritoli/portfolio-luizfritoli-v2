import React from "react"
import HSkillsList from "./HSkillsList";

const HardSkills = () => {
  return (
    <section className="h-auto pb-6">
      <div className="card">
        {" "}
        <h2 className="text-2xl break-words text-center font-bold pt-4 pb-4">
         Habilidades técnicas
        </h2>
        <HSkillsList />
      </div>
    </section>
  );
};

export default HardSkills;
