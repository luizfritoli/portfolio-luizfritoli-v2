import { useState, useEffect } from "react";
import LuizImage from "./LuizImage";
import SocialMedia from "./SocialMedia";
import { motion } from "motion/react";

const Greeting = () => {
  return (
    <section
      id="greeting"
      className="h-screen flex justify-center items-center w-full text-[#000]"
    >
      <motion.div initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
         className="grid grid-rows-2 lg:flex lg:mt-0 lg:mb-20 mt-25">
        <LuizImage />
        <div className="lg:flex lg:justify-center lg:items-center lg:flex-col">
          <h1 className="w-full mt-6 ml-6 lg:mt-0 mb-5 text-[1.3em] md:text-[1.9em] md:ml-0 lg:ml-25">
            Olá, <br />eu sou o Luiz Fritoli!
          </h1>
          <div className="flex flex-col h-auto">
            <SocialMedia />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Greeting;
