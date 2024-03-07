import aboutImage3 from '../../assets/images/about/about-3.png';
import { FaCheck } from "react-icons/fa6";

const AboutThird = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 mt-20'>
      <div className='flex flex-col lg:flex-row items-center gap-6'>
        {/* Info */}
        <div>
          <h2 className='text-gray-900 text-[38px] text-center lg:text-left lg:text-[48px] font-semibold leading-[58px] mb-6'>We Delivered, You Enjoy Your Order.</h2>
          <p className='text-gray-600 leading-6 mb-5 text-center lg:text-left'>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>

          {/* Benefit */}
          <div className='mb-8 flex flex-col gap-4'>
            {/* Benefit 1 */}
            <div className='flex items-center gap-2'>
              <FaCheck className='text-[#2C742F] bg-[#E6F8E7] rounded-full p-1 text-[20px]' />
              <p className='text-gray-600 text-[14px] leading-5'>Sed in metus pellentesque.</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaCheck className='text-[#2C742F] bg-[#E6F8E7] rounded-full p-1 text-[20px]' />
              <p className='text-gray-600 text-[14px] leading-5'>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
            </div>
            <div className='flex items-center gap-2'>
              <FaCheck className='text-[#2C742F] bg-[#E6F8E7] rounded-full p-1 text-[20px]' />
              <p className='text-gray-600 text-[14px] leading-5'>Maecenas ut nunc fringilla erat varius.</p>
            </div>
          </div>

          <div className='text-center lg:text-left'>

            <button className='text-white bg-[#00B207] font-semibold leading-5 rounded-full px-10 py-4'>Shop Now</button>
          </div>
        </div>

        {/* Image */}
        <div>
          <img src={aboutImage3} alt='about-image' />
        </div>
      </div>

    </div>
  );
};

export default AboutThird;