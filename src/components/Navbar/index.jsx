import React from "react";
import Menu from "./Menu";
import logoLuiz from "/logo_luiz_white.png";

const Navbar = () => {
  return (
    <div className="md:flex hidden justify-center items-center">
      <nav className="bg-[#3b20669b] min-h-12 h-auto w-[75%] mt-4 rounded-md list-none flex justify-between z-50">
        <img
          src={logoLuiz}
          alt="Logo do Luiz Fritoli"
          className="h-[3em] w-[4em] self-start ml-2 cursor-pointer"
        />
        <Menu />
      </nav>
    </div>
  );
};

export default Navbar;
