import React from "react";

const Menu = () => {
  return (
    <div className="flex justify-between items-center flex-row">
      <ul className="list-none gap-8 mr-[1em] cursor-pointer flex justify-end items-center">
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          Sobre
        </li>
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          Tecnologias
        </li>
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          Soft Skills
        </li>
        <li className="hover:opacity-50 hover:underline transition-underline ease-in-out duration-300">
          Projetos
        </li>
      </ul>
    </div>
  );
};

export default Menu;
