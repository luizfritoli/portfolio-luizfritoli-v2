import { projects } from "./projectsList";
import { motion } from "motion/react";
import { GoCalendar } from "react-icons/go";

import "../../App.css";

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full px-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 1.2 }}
          className="
            flex flex-col
            w-full
            max-w-5xl
            bg-[#4A4A4A]
            text-[#FFF]
            rounded-lg
            p-4
            mb-8
          "
        >
          <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
            {project.name}
          </h3>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* IMAGEM */}
            <div className="flex justify-center lg:w-1/2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.img}
                  alt={project.name}
                  className="
                    w-full
                    max-w-sm
                    lg:max-w-full
                    h-auto
                    object-contain
                    rounded-lg
                    hover:scale-105
                    transition-all duration-300
                  "
                />
              </a>
            </div>

            {/* TEXTO */}
            <div className="flex flex-col gap-4 lg:w-1/2 text-center lg:text-left">
              <p className="text-lg">{project.description}</p>

              <ul className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {project.languages.map((t, index) => (
                  <li
                    key={index}
                    className="rounded-md px-2 py-1 bg-[#292929] cursor-pointer hover:scale-110 transition"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <span className="flex items-center gap-2 text-sm text-[#ffffff89] justify-center lg:justify-start">
                <GoCalendar />
                {project.month} de {project.year}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


export default Projects;
