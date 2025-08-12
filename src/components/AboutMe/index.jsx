const AboutMe = () => {
  return (
    <section className="h-auto flex justify-center items-center">
      <div
        className="    flex flex-col items-center justify-center
    bg-white/10 backdrop-blur-sm
    border border-purple-300/30
    shadow-lg shadow-purple-900/40
    m-4 rounded-xl w-[90%] min-h-[15em] h-auto "
      >
        <h2 className="text-2xl break-words text-center font-bold pt-4 pb-4">
          Luiz em 1MB de memória
        </h2>
        <div className="flex justify-center items-center mt-[1em]">
          <p className="text-[0.9em] p-4">
            Sou técnico em informática e estudante de{" "}
            <strong>Engenharia de Software</strong> pela Uniasselvi, atualmente
            no 2° semestre, com previsão de término em dezembro de 2028. Tenho
            experiência em projetos em desenvolvimento web com{" "}
            <strong>React.js e TypeScript</strong>, com conhecimento em{" "}
            <strong>Tailwind CSS, Next.js e Git/Github</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
