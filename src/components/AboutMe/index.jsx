import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <section id="about" className="pb-[6em] text-[#000]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        viewport={{ once: true }}
        className="card ">
        
        <div className="flex flex-col justify-center items-start px-16">
          <h2 className="font-bold text-[1.2rem] pl-8">Sobre mim, digo que</h2>
          <p className="text-[0.7em] md:text-[1.1em] text-justify px-8 py-[0.4em]">
            sou técnico em informática e estudante de{" "}
            <strong>Engenharia de Software</strong> pela Uniasselvi, atualmente
            no 3° semestre, com previsão de término em dezembro de 2028. Tenho
            experiência em projetos em desenvolvimento web especialmente com{" "}
            <strong>React.js, JavaScript, TypeScript e Tailwind CSS</strong>.<br />
            <br />
            Meus projetos mais relevantes são o{" "}
            <a 
            href="https://shapeview.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold underline"
            >
            ShapeView
            </a> 
           {" "} e o {" "}
            <a 
            href="https://wicebank.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold underline"
            >
            WiceBank
            </a>, feitos para colocar em prática meus aprendizados e testar funcionalidades
            das linguagens que estudo. Veja mais sobre os meus projetos {" "}
            <a href="#projects" className="font-bold underline">clicando aqui</a>.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
