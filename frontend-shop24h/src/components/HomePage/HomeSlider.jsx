import Hero from './Hero';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/slider.css';

const HomeSlider = () => {
  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-7 pt-16 pb-40 home-slider">
      <Slider {...settings}>
        <Hero />
        <Hero />
        <Hero />
      </Slider>
    </div>
  );
};

export default HomeSlider;