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
      <div className="grid grid-rows-2 mt-20">
        <LuizImage />
        <div>
          <h1 className="w-full mt-10 ml-6 mb-10 text-[1.3em]">{typingName}</h1>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};

export default Greeting;
