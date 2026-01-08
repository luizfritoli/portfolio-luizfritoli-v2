import React from "react";
import logoLuiz from "/logo_luiz_white.png";

const Footer = () => {
  return (
    <footer className="min-h-[6em] h-auto bg-[#292929] text-[0.8em] text-white flex flex-col justify-around">
      <p className="text-center mb-1 mt-1">
        © Pensado e feito por <strong>Luiz Fritoli</strong>.
      </p>
      <p className="text-center break-words ml-4 mr-4">
        <strong>Tailwind CSS</strong>, <strong>JavaScript</strong> e{" "}
        <strong>React.js </strong>foram utilizados para a montagem da página.
        Escrito com <strong>Visual Studio Code</strong>.
      </p>
      <span className="flex justify-center">
        <a href="#greeting">
          <img
            src={logoLuiz}
            alt="Logo do Luiz Fritoli"
            className="h-[5em] w-[5.5em]"
          />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
