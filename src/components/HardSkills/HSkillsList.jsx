import html5Icon from "../../assets/icons/html5.png";
import cssIcon from "../../assets/icons/css.png";
import javascriptIcon from "../../assets/icons/javascript.png";
import typescriptIcon from "../../assets/icons/typescript.png";
import tailwindIcon from "../../assets/icons/tailwind.png";
import reactIcon from "../../assets/icons/react.png"

const HSkillsList = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="flex flex-wrap justify-around items-center w-full p-4 gap-4">
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
  
      </div>
    </div>
  );
};

export default HSkillsList;
