import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Project() {
  const images = [
    "../../images/photo00001.webp",
    "../../images/photo00002.webp",
    "../../images/photo00003.webp",
    "../../images/photo00004.webp",
    "../../images/photo00005.webp",
    "../../images/photo00006.webp",
    "../../images/photo00007.webp",
    "../../images/photo00008.webp",
    "../../images/photo00009.webp",
    "../../images/photo00010.webp",
    "../../images/photo00011.webp",
    "../../images/photo00012.webp",
    "../../images/photo00013.webp",
    "../../images/photo00014.webp",
    "../../images/photo00015.webp",
    "../../images/photo00016.webp",
    "../../images/photo00017.webp",
    "../../images/photo00018.webp",
    "../../images/photo00019.webp",
    "../../images/photo00020.webp",
    "../../images/photo00021.webp",
    "../../images/photo00022.webp",
    "../../images/photo00023.webp",
    "../../images/photo00024.webp",
    "../../images/photo00025.webp",
    "../../images/photo00026.webp",
    "../../images/photo00027.webp",
    "../../images/photo00028.webp",
    "../../images/photo00029.webp",
    "../../images/photo00030.webp",
    "../../images/photo00031.webp",
    "../../images/photo00032.webp",
    "../../images/photo00033.webp",
    "../../images/photo00034.webp",
    "../../images/photo00035.webp",
  ];
  return (
    <div className="w-screen min-h-screen">
      <div className="w-4/5 mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl sm:text-4xl w-full px-4 py-16 sm:mt-24 lg:mt-42 font-custom2 text-text text-center">
          Portfolio Showcase
        </h1>

        <motion.div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 p-4 ">
          {images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.001 * index }}
              key={index}
              className=" "
            >
              <LazyLoadImage
                src={image}
                alt={`Image ${index + 1}`}
                effect="blur"
                className="h-[400px] w-[380px] sm:h-[360px] sm:w-[340px] md:h-[320px] md:w-[380px] object-cover rounded"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
