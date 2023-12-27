import { useState } from 'react';
import PropTypes from 'prop-types';
const RotatingImages = ({ images }) => {
  const [imageOrder, setImageOrder] = useState([...images]);

  const handleClick = (index) => {
    const newOrder = [...imageOrder];
    const clickedImage = newOrder.splice(index, 1)[0];
    newOrder.push(clickedImage);
    setImageOrder(newOrder);
  };

  return (
    <div className="h-1/3 w-full sm:h-[600px] sm:w-[400px]  flex items-center justify-center ">
      {imageOrder.map((image, index) => (
        <img
   
          
          className='sm:h-2/5 sm:w-1/3 w-1/2 object-cover shadow-lg shadow-text'
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{
            // width: '',
            // height: '600px',
            position: 'absolute',
            transformOrigin: 'center',
            transform: `rotate(${index % 2 === 0 ? '-' : ''}${(index + 1) * 4}deg)`,
            animationDelay:'2s'
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
