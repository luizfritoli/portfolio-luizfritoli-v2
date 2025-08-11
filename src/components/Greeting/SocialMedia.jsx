import githubLogo from "../../assets/github.png";
import instagramLogo from "../../assets/instagram.png";
import linkedinLogo from "../../assets/linkedin-logo.png";

const SocialMedia = () => {
  return (
    <div className="flex gap-5 ml-5">
      <a href="https://github.com/luizfritoli/" target="_blank">
        <img
          src={githubLogo}
          alt="Luiz Fritoli Github"
          className="h-[49px] w-[52]"
        />
      </a>
      <a href="https://www.instagram.com/luizgfritoli/" target="_blank">
        <img
          src={instagramLogo}
          alt="Luiz Fritoli Instagram"
          className="h-[49px] w-[49px]"
        />
      </a>
      <a href="https://www.linkedin.com/in/luiz-fritoli/" target="_blank">
        <img
          src={linkedinLogo}
          alt="Luiz Fritoli Instagram"
          className="h-[49px] w-[49px]"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
