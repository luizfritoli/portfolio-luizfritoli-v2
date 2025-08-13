import { useState, useEffect } from "react";
import LuizImage from "./LuizImage";
import SocialMedia from "./SocialMedia";

const Greeting = () => {
  const charLf = "Olá!\nEu sou o Luiz Fritoli!";
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
    <section className="h-screen flex justify-center items-center w-full">
      <div className="grid grid-rows-2 lg:flex gap-40 mt-20">
        <LuizImage />
        <div className="lg:flex lg:justify-center lg:items-center lg:flex-col">
          <h1 className="w-full mt-6 ml-6 lg:mt-0 mb-8 text-[1.3em] md:text-[1.7em] md:ml-0">
            {typingName}
          </h1>
          <div className="flex flex-col h-auto">
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
