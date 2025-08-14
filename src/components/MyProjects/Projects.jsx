import React from "react";
import { projects } from "./projectsList";

import "../../App.css";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col items-center justify-center m-5 bg-[#27193f] shadow-[#3e2c5e] shadow-lg opacity-[75%] rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-3 mt-3">{project.name}</h3>
          <div className="flex flex-col lg:flex-row gap-1">
            <div className="flex justify-center items-center p-2 lg:block lg:items-start lg:justify-start">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full max-w-[400px] md:max-w-full md:w-[100%] md:h-auto h-auto object-contain rounded-lg"
                />
              </a>
            </div>
            <div className="flex flex-col gap-3 mr-1 lg:max-w-[40%] text-xl justify-between text-center md:text-start md:ml-4 lg:ml-2">
              <p>{project.description}</p>
              <div className="flex flex-col gap-3 lg:gap-[5em]">
                <span className="mt-10 lg:mt-0">
                  <strong>Linguagens: </strong>
                  {project.languages}
                </span>
                <span className="mb-5">
                  <strong>Finalizado em: </strong>
                  {project.month}/{project.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
