const AboutMe = () => {
  return (
    <section id="about" className="flex justify-center items-center pb-[6em]">
      <div className="card">
        <h2 className="subtitle">Luiz em 1MB de memória</h2>
        <div className="flex justify-center items-center mt-[1em]">
          <p className="text-[0.9em] p-4 md:text-[1.2em]">
            Sou técnico em informática e estudante de{" "}
            <strong>Engenharia de Software</strong> pela Uniasselvi, atualmente
            no 2° semestre, com previsão de término em dezembro de 2028. Tenho
            experiência em projetos em desenvolvimento web com{" "}
            <strong>React.js e TypeScript</strong>, com conhecimento em{" "}
            <strong>Tailwind CSS, Next.js e Git/Github</strong>.<br />
            <br />
            Meu objetivo é me tornar um desenvolvedor front-end altamente
            capacitado, contribuindo com soluções e criando interfaces
            agradáveis para os usuários.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
