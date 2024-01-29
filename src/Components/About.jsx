import { useState } from "react";
import RotatingImages from "./RotatingImages";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  const images = [
    "../../images/photo00006.webp",
    "../../images/photo00004.webp",
    "../../images/photo00005.webp",
    "../../images/photo00001.webp",
    "../../images/photo00002.webp",
    "../../images/photo00003.webp",
    "../../images/photo00029.webp",
    "../../images/photo00034.webp",
    "../../images/photo00050.webp",
    "../../images/photo00060.webp",
    // "../../images/photo00008.jpg",
    // "../../images/photo00009.jpg",
    // "../../images/photo00010.jpg",
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
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          onMouseEnter={handleMouseEnterH1}
          onMouseLeave={handleMouseLeaveH1}
          className=" sm:text-3xl mt-16 md:text-4xl lg:text-6xl text-2xl sm:mt-24 py-4 font-custom2 text-center sm:text-start"
        >
          Visual Stories, Timeless Images {!isHoveredH1 ? "📷" : "📸"}{" "}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="sm:mt-16 my-8 "
        >
          <Link
            className="ml-4 px-7  py-3  bg-text text-background rounded-3xl"
            to="https://wa.me/+33656853329"
            target="_blank "
            onMouseEnter={handleMouseEnterBtn}
            onMouseLeave={handleMouseLeaveBtn}
          >
            Book a call {!isHoveredBtn ? "😃" : "😉"}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="h-1/3 sm:h-3/5 p-16 mt-32   w-full flex items-center justify-center sm:w-1/2 "
      >
        <RotatingImages images={images} />
      </motion.div>
    </div>
  );
}

export default About;
