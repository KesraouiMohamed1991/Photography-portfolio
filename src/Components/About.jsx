import { useState } from "react";
import RotatingImages from "./RotatingImages";

function About() {
  const images = [
    "../../images/photo00001.webp",
    "../../images/photo00002.webp",
    "../../images/photo00003.webp",
    "../../images/photo00004.webp",
    "../../images/photo00005.webp",
    "../../images/photo00006.webp",
    "../../images/photo00007.jpg",
  ];

  const [isHoveredH1, setIsHoveredH1] = useState(false);
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);

  const handleMouseEnterH1 = () => {
    setIsHoveredH1(true);
  };

  const handleMouseLeaveH1 = () => {
    setIsHoveredH1(false);
  };

  const handleMouseEnterBtn = () => {
    setIsHoveredBtn(true);
  };

  const handleMouseLeaveBtn = () => {
    setIsHoveredBtn(false);
  };

  return (
    <div className="lg:w-4/5 w-full mx-auto flex flex-col-reverse sm:flex-row items-center justify-around  min-h-screen   ">
      <div className="h-2/5 p-4 mb-16  sm:h-2/3 flex flex-col items-center justify-center sm:items-start sm:justify-center   w-full sm:w-1/2  ">
        <h1
          onMouseEnter={handleMouseEnterH1}
          onMouseLeave={handleMouseLeaveH1}
          className="sm:text-6xl text-3xl sm:mt-24 py-4 font-custom2 text-center sm:text-start"
        >
          Visual Stories, Timeless Images {!isHoveredH1 ? "📷" : "📸"}{" "}
        </h1>
        <a
          className="ml-4 px-7 py-3 sm:mt-16 bg-text text-background rounded-3xl"
          href="https://wa.me/+33656853329"
          target="_blank "
          onMouseEnter={handleMouseEnterBtn}
          onMouseLeave={handleMouseLeaveBtn}
        >
          Book a call {!isHoveredBtn ? "😃" : "😉"}
        </a>
      </div>

      <div className="h-2/5 sm:h-3/5 p-16 mt-32   w-full flex items-center justify-center sm:w-1/2 ">
        <RotatingImages images={images} />
      </div>
    </div>
  );
}

export default About;
