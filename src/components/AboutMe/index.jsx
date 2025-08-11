const AboutMe = () => {
  return (
    <section className="h-[25em]">
      <div className="card">
        <h2 className="text-2xl break-words text-center font-bold pt-4">
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
