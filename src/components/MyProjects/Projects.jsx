import { projects } from "./projectsList";
import { motion } from "motion/react";
import { GoCalendar } from "react-icons/go";

import "../../App.css";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full">
      {projects.map((project) => (
        <motion.div initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 1.2 }}
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
                  className="w-full max-w-[400px] md:max-w-full md:w-[100%] md:h-auto h-auto hover:scale-101 transition-all ease-in duration-300 object-contain rounded-lg"
                />
              </a>
            </div>
            <div className="flex flex-col gap-3 mr-1 lg:max-w-[40%] text-xl justify-between text-center md:text-start md:ml-4 lg:ml-2">
              <p>{project.description}</p>
              <div className="flex flex-col gap-3 lg:gap-[5em]">
                <span className="flex flex-wrap justify-center items-center text-[0.79em] md:text-[0.94em] gap-4 lg:justify-start ">
                  {project.languages.map((t, index) => (
                    <li key={index} className="rounded-md p-1 bg-[#403769] md:mb-5 md:mt-5 cursor-pointer hover:scale-110 transition-all duration-300 ease-in">{t}</li>
                  ))}
                </span>
                <span className="mb-5 text-[#ffffff89] flex gap-2 flex justify-center md:justify-start">
                  <GoCalendar />{project.month} de {project.year}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
