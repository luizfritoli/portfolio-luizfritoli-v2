import React from "react";

const Menu = () => {
  return (
    <div className="flex justify-between items-center flex-row">
      <ul className="list-none gap-8 mr-[1em] cursor-pointer flex justify-end items-center">
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          <a href="#greeting">
            Início
          </a>
        </li>
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          <a href="#about">
            Sobre
          </a>
        </li>
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          <a href="#hardSkills">
            Tecnologias
          </a>
        </li>
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          <a href="#softSkills">
            Soft Skills
          </a>
        </li>
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          <a href="#projects">
            Projetos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
