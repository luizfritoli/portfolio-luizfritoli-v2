import { useState, useEffect } from "react";
import LuizImage from "./LuizImage";
import SocialMedia from "./SocialMedia";
import { motion } from "motion/react";

const Greeting = () => {
  const charLf = "Olá,\nEu sou o Luiz Fritoli!";
  const interval = 110;
  const char = charLf.split("").reverse();

  const [typingName, setTypingName] = useState([]);

  useEffect(() => {
    const typer = setInterval(() => {
      if (!char.length) {
        clearInterval(typer);
        return;
      }

      const nextChar = char.pop();
      setTypingName((prev) => {
        if (nextChar === "\n") {
          return [...prev, <br key={prev.length} />];
        } else {
          return [...prev, nextChar];
        }
      });
    }, interval);

    return () => clearInterval(typer);
  }, []);

  return (
    <section
      id="greeting"
      className="h-screen flex justify-center items-center w-full"
    >
      <motion.div initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
         className="grid grid-rows-2 lg:flex lg:mt-0 lg:mb-20 mt-25">
        <LuizImage />
        <div className="lg:flex lg:justify-center lg:items-center lg:flex-col">
          <h1 className="w-full mt-6 ml-6 lg:mt-0 mb-5 text-[1.3em] md:text-[1.9em] md:ml-0 lg:ml-25">
            {typingName}
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
