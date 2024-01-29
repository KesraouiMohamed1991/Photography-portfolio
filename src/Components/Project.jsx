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
    "../../images/photo00007.jpg",
    "../../images/photo00008.jpg",
    "../../images/photo00009.jpg",
    "../../images/photo00010.jpg",
    "../../images/photo00011.jpg",
    "../../images/photo00012.jpg",
    "../../images/photo00013.jpg",
    "../../images/photo00014.jpg",
    "../../images/photo00015.jpg",
    "../../images/photo00016.jpg",
    "../../images/photo00017.jpg",
    "../../images/photo00018.jpg",
    "../../images/photo00019.jpg",
    "../../images/photo00020.jpg",
    "../../images/photo00021.jpg",
    "../../images/photo00022.jpg",
    "../../images/photo00023.jpg",
    "../../images/photo00024.jpg",
    "../../images/photo00025.jpg",
    "../../images/photo00026.jpg",
    "../../images/photo00027.jpg",
    "../../images/photo00028.jpg",
    "../../images/photo00029.webp",
    "../../images/photo00030.jpg",
    "../../images/photo00031.webp",
  ];
  return (
    <div className="w-4/5 mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl w-full px-4 py-16 sm:mt-24 lg:mt-42 font-custom2 text-text text-center">
        Portfolio Showcase
      </h1>

      <motion.div className="w-full min-h-screen   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 ">
        {images.map((image, index) => (
          <LazyLoadImage
            key={index}
            height={400}
            width={300}
            src={image}
            alt={`Image ${index + 1}`}
            effect="blur"
            className="w-42 h-full object-cover rounded-lg"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Project;
