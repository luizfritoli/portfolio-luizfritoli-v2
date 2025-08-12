import React from "react";
import html5Icon from "../../assets/html5.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javascript.png";
import typescriptIcon from "../../assets/typescript.png";
import tailwindIcon from "../../assets/tailwind.png";
import reactIcon from "../../assets/react.png";
import nextJsIcon from "../../assets/nextjs.png";
import viteIcon from "../../assets/vite.png";

const HSkillsList = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-8 justify-stretch items-center w-full p-4">
        <div className="flex flex-col justify-center items-center">
          <img src={html5Icon} alt="HTML" className="icon" />
          HTML
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={cssIcon} alt="CSS" className="icon" />
          CSS
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={tailwindIcon} alt="Tailwind CSS" className="icon" />
          Tailwind CSS
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={javascriptIcon} alt="JavaScript" className="icon" />
          JavaScript
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={typescriptIcon} alt="TypeScript" className="icon" />
          TypeScript
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={reactIcon} alt="React.js" className="icon" />
          React.js
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={nextJsIcon} alt="Next.js" className="icon" />
          Next.js
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={viteIcon} alt="Vite" className="icon" />
          Vite
        </div>
      </div>
    </div>
  );
};

export default HSkillsList;
