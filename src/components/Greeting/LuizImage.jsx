import luizfritoliImg from "../../assets/icons/luizfritoli-img.jpeg";

const LuizImage = () => {
  return (
    <figure className="flex flex-col items-center text-center">
      <img
        src={luizfritoliImg}
        alt="Luiz Fritoli Image"
        className="w-64 h-64 md:w-86 md:h-86 md:w-72 md:h-72 rounded-full object-cover hover:scale-105 transition-all duration-300 ease-in cursor-pointer"
      />
      <figcaption className="mt-2 md:mt-4 ml-6 mr-6 lg:mr-0 lg:ml-0 text-sm text-violet-100 text-[1.1em] md:text-[1.5em]">
        Estudante em
        <br />
        Desenvolvimento Front-End
      </figcaption>
    </figure>
  );
};

export default LuizImage;
