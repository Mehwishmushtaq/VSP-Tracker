import { useEffect, useState } from "react";
import LogoDump from "../../assets/images/dumptracker.png";
import LogoExcavator from "../../assets/images/excavator.png";
import LogoScraper from "../../assets/images/scraper.png";

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
      case "excavater":
        return LogoExcavator;
      case "scraper":
        return LogoScraper;
      default:
        return LogoDump;
    }
  };

  const selectedLogo = getImageByText();

  return (
    <div className="bg-[#464646] w-full max-w-[320px] p-5 rounded-md">
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <img
          src={selectedLogo}
          className="h-[100px] sm:h-[126px] w-auto object-contain"
          alt={text}
        />
        <h2 className="text-green-700 font-semibold text-center sm:text-left text-lg underline underline-offset-2 mt-2 sm:mt-[1.2rem]">
          {text}
        </h2>
      </div>
    </div>
  );
}
