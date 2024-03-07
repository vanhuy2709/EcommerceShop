// Import Components
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ dataImages }) => {

  const settings = {
    customPaging: (i) => {
      return (
        <div>
          <img
            src={dataImages && dataImages[i]}
            className='w-[50px] h-[50px] object-cover rounded-lg'
          />
        </div>
      )
    },
    dots: true,
    dotsClass: "slick-dots custom-indicator",
    arrows: false,
    swipeToSlide: true,
    adaptiveHeight: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="images-slider w-full">
      <Slider {...settings}>
        {dataImages && dataImages.map((image, index) => (
          <div key={index} className='w-[556px] h-[556px]'>
            <img src={image} className='w-full h-full object-contain' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;