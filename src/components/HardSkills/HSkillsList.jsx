import React from "react";
import html5Icon from "../../assets/icons/html5.png";
import cssIcon from "../../assets/icons/css.png";
import javascriptIcon from "../../assets/icons/javascript.png";
import typescriptIcon from "../../assets/icons/typescript.png";
import tailwindIcon from "../../assets/icons/tailwind.png";
import reactIcon from "../../assets/icons/react.png";
import nextJsIcon from "../../assets/icons/nextjs.png";
import viteIcon from "../../assets/icons/vite.png";

const HSkillsList = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-8 justify-stretch items-center w-full p-4">
        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in duration-300">
          <img src={html5Icon} alt="HTML" className="icon" />
          HTML
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in duration-300">
          <img src={cssIcon} alt="CSS" className="icon" />
          CSS
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in duration-300">
          <img src={tailwindIcon} alt="Tailwind CSS" className="icon" />
          Tailwind CSS
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in duration-300">
          <img src={javascriptIcon} alt="JavaScript" className="icon" />
          JavaScript
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in duration-300">
          <img src={typescriptIcon} alt="TypeScript" className="icon" />
          TypeScript
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in duration-300">
          <img src={reactIcon} alt="React.js" className="icon" />
          React.js
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in duration-300">
          <img src={nextJsIcon} alt="Next.js" className="icon" />
          Next.js
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in duration-300">
          <img src={viteIcon} alt="Vite" className="icon" />
          Vite
        </div>
      </div>
    </div>
  );
};

export default HSkillsList;
