const images = [

  '../../images/photo00001.jpg',
  '../../images/photo00002.jpg',
  '../../images/photo00003.jpg',
  '../../images/photo00004.jpg',
  '../../images/photo00005.jpg',
  '../../images/photo00006.jpg',
  '../../images/photo00007.jpg',
  '../../images/photo00008.jpg',
  '../../images/photo00009.jpg',
  '../../images/photo00010.jpg'
 
];






import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={90}
      // slidesPerView={3}
      navigation={false}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        // when window width is <= 640px (mobile)
        640: {
          slidesPerView: 1,
        },
        // when window width is <= 768px (tablet)
        768: {
          slidesPerView: 1,
        },
        // when window width is <= 1024px (small desktop)
        1024: {
          slidesPerView: 1,
        },
      }}
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide className='h-96 w-96 z-0 cursor-grab  ' key={index}>
          <img src={imageUrl} alt={`slide-${index + 1}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;


      {/* <div className='h-1/2 sm:h-3/5 w-full overflow-hidden px-0   flex  justify-center items-center '>
        
        <Carousel />
        
      </div>  */}