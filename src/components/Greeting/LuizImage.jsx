import luizfritoliImg from "../../assets/icons/luizfritoli-img.jpeg";

const LuizImage = () => {
  return (
    <figure className="flex flex-col items-center text-center">
      <img
        src={luizfritoliImg}
        alt="Luiz Fritoli Image"
        className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover"
      />
      <figcaption className="mt-2 md:mt-4 text-sm text-violet-100 text-xl lg:text-2xl">
        Estudante em desenvolvimento Front-End
      </figcaption>
    </figure>
  );
};

export default LuizImage;
