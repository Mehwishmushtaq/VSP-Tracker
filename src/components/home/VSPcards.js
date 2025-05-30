import { useEffect, useState } from "react";
import LogoDump from "../../assets/images/dumptruck.svg";
import LogoExcavator from "../../assets/images/excavator.svg";
import LogoScraper from "../../assets/images/scraper.svg";

export default function Banner({ text }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageByText = () => {
    const key = text?.toLowerCase()?.trim();
    switch (key) {
      case "dump tracker":
        return LogoDump;
      case "excavator":
        return LogoExcavator;
      case "scraper":
        return LogoScraper;
      default:
        return LogoDump;
    }
  };

  const selectedLogo = getImageByText();

  return (
    <div className="bg-[#464646] w-full max-w-[350px] p-5 rounded-md">
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <img
          src={selectedLogo}
          className="h-[100px] sm:h-[126.57px] w-auto object-contain"
          alt={text}
        />
        <a
          href="#"
          className="text-primary font-bold text-xl sm:text-2xl text-center sm:text-right sm:self-start sm:mt-0 sm:mr-6 underline underline-offset-4 decoration-2 mt-2"
        >
          {text}
        </a>
      </div>
    </div>
  );
}
