import userAvatar1 from '../../assets/images/customer/customer-1.jfif';
import userAvatar2 from '../../assets/images/customer/customer-2.jfif';
import userAvatar3 from '../../assets/images/customer/customer-3.jfif';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../styles/slider.css';
import BoxClient from '../Client/BoxClient';

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };

  return (
    <div className="bg-[#EDF2EE]">
      <div className="max-w-screen-xl mx-auto px-7 py-[100px]">
        <h2
          className="text-gray-900 text-[40px] font-semibold leading-[48px] mb-[70px]">
          Client Testimonial
        </h2>


        <Slider {...settings}>
          <div className="px-2">
            <BoxClient userAvatar={userAvatar1} userName={'Robert Rosie'} />
          </div>
          <div className="px-2">
            <BoxClient userAvatar={userAvatar2} userName={'Dianne Russell'} />
          </div>
          <div className="px-2">
            <BoxClient userAvatar={userAvatar3} userName={'Eleanor Pena'} />
          </div>
          <div className="px-2">
            <BoxClient userAvatar={userAvatar1} userName={'Robert Fox'} />
          </div>
          <div className="px-2">
            <BoxClient userAvatar={userAvatar2} userName={'Dianne Russell'} />
          </div>
          <div className="px-2">
            <BoxClient userAvatar={userAvatar3} userName={'Eleanor Pena'} />
          </div>
        </Slider>

      </div>
    </div>
  );
};

export default Client;