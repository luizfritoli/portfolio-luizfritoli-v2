import React from "react";
import Projects from "./Projects";

const MyProjects = () => {
  return (
    <section className="flex justify-center w-full">
      <div className="card">
        <h2 className="subtitle">Meus projetos</h2>
        <Projects />
      </div>
    </section>
  );
};

export default MyProjects;
