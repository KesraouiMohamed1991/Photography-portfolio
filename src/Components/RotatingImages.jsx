import { useState } from "react";
import PropTypes from "prop-types";
const RotatingImages = ({ images }) => {
  const [imageOrder, setImageOrder] = useState([...images]);

  const handleClick = index => {
    const newOrder = [...imageOrder];
    const clickedImage = newOrder.splice(index, 1)[0];
    newOrder.push(clickedImage);
    setImageOrder(newOrder);
  };

  return (
    <div className="h-1/3  w-full sm:h-[600px] sm:w-[400px] p-8  flex items-center justify-center ">
      {imageOrder.map((image, index) => (
        <img
          className=" h-64 w-48  sm:h-72 sm:w-72 md:h-80 md:w-80 lg:w-96 lg:h-96 object-cover shadow-lg shadow-text"
          key={index}
          src={image}
          sizes=""
          alt={`Image ${index + 1}`}
          style={{
            position: "absolute",
            transformOrigin: "center",
            transform: `rotate(${index % 2 === 0 ? "-" : ""}${
              (index + 1) * 4
            }deg)`,
            animationDelay: "2s",
          }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

RotatingImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default RotatingImages;
