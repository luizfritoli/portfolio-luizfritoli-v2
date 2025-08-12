import React from "react";
import SSkillsList from "./SSkillsList";

const SoftSkills = () => {
    return (
        <section className="h-auto flex justify-center">
            <div
                className="
    flex flex-col items-center justify-center
    bg-white/10 backdrop-blur-sm
    border border-purple-300/30
    shadow-lg shadow-purple-900/40
    m-4 rounded-xl w-[90%]
  "
            >
                <h2 className="text-2xl break-words text-center font-bold pt-4 pb-4">
                    Habilidades comportamentais (Soft Skills)
                </h2>
                <SSkillsList />
            </div>
        </section>
    );
};

export default SoftSkills;
