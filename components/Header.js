import Image from "next/image";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import twitterIcon from "../assets/icons/twitter.png";
import logoIcon from "../assets/icons/logo.png";

const Header = () => {
  const imgIcons = [
    {
      img: facebookIcon,
      alt: "facebookIcon",
    },
    {
      img: instagramIcon,
      alt: "instagramIcon",
    },
    {
      img: twitterIcon,
      alt: "twitterIcon",
    },
  ];
  return (
    <div className="bg-slate-200 mb-4">
      <div className="mx-10 py-5 flex justify-center">
        <Image src={logoIcon} alt="Picture of the author" />
      </div>
      <div className="bg-red-200 py-1">
        <div className="mx-10 flex justify-center gap-4 m-0">
          {imgIcons.map((icon, index) => (
            <button className="rounded hover:bg-red-100 w-10 h-10" key={index}>
              <Image src={icon.img} className="my-auto" alt={icon.alt} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
