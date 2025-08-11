import luizfritoliImg from "../../assets/luizfritoli-img.jpeg";

const LuizImage = () => {
  return (
    <figure className="flex flex-col items-center text-center">
      <img
        src={luizfritoliImg}
        alt="Luiz Fritoli Image"
        className="w-64 h-64 rounded-full object-cover"
      />
      <figcaption className="mt-2 text-sm text-violet-100 text-xl">
        Estudante em desenvolvimento Front-End
      </figcaption>
    </figure>
  );
};

export default LuizImage;
