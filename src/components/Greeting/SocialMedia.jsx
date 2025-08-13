import githubLogo from "../../assets/icons/github.png";
import instagramLogo from "../../assets/icons/instagram.png";
import linkedinLogo from "../../assets/icons/linkedin-logo.png";

const SocialMedia = () => {
  return (
    <div className="flex gap-5 ml-5 md:ml-0">
      <a href="https://github.com/luizfritoli/" target="_blank">
        <img
          src={githubLogo}
          alt="Luiz Fritoli Github"
          className="h-[49px] w-[52] lg:h-[69px] lg:w-[72px]"
        />
      </a>
      <a href="https://www.instagram.com/luizgfritoli/" target="_blank">
        <img
          src={instagramLogo}
          alt="Luiz Fritoli Instagram"
          className="h-[49px] w-[49px] lg:h-[72px] lg:w-[72px]"
        />
      </a>
      <a href="https://www.linkedin.com/in/luiz-fritoli/" target="_blank">
        <img
          src={linkedinLogo}
          alt="Luiz Fritoli Instagram"
          className="h-[49px] w-[49px] lg:h-[72px] lg:w-[72px]"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
