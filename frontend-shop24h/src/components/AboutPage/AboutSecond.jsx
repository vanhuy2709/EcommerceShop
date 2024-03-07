import { LuLeaf } from "react-icons/lu";
import { PiShootingStarLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { PiPackage } from "react-icons/pi";
import aboutImage2 from '../../assets/images/about/about-2.png';

const AboutSecond = () => {
  return (
    <div className='bg-[#FBFBFB] px-4'>
      <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-8'>
        {/* Image */}
        <div className='flex-1'>
          <img src={aboutImage2} alt='about-image' />
        </div>

        {/* Info */}
        <div className='flex-1'>
          <h2 className='text-[#002603] text-[46px] lg:text-[56px] font-semibold leading-[68px] mb-5 text-center lg:text-left'>100% Trusted Organic Food Store</h2>
          <p className='text-gray-500 leading-6 text-center lg:text-left mb-6'>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </p>

          {/* Benefit */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Left */}
            <div className='flex flex-col gap-6'>
              <div className='flex items-center gap-4'>
                <LuLeaf className='text-[#00B207] text-[60px] p-4 bg-[#E6F8E7] rounded-full' />
                <div>
                  <h4 className='text-gray-900 text-[18px] font-medium leading-[27px] mb-2'>100% Organic food</h4>
                  <p className='text-gray-500 text-[14px] leading-[21px]'>100% healthy & Fresh food.</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <PiShootingStarLight className='text-[#00B207] text-[60px] p-4 bg-[#E6F8E7] rounded-full' />
                <div>
                  <h4 className='text-gray-900 text-[18px] font-medium leading-[27px] mb-2'>Customer Feedback</h4>
                  <p className='text-gray-500 text-[14px] leading-[21px]'>Our happy customer</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <CiDeliveryTruck className='text-[#00B207] text-[60px] p-4 bg-[#E6F8E7] rounded-full' />
                <div>
                  <h4 className='text-gray-900 text-[18px] font-medium leading-[27px] mb-2'>Free Shipping</h4>
                  <p className='text-gray-500 text-[14px] leading-[21px]'>Free shipping with discount</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className='flex flex-col gap-6'>
              <div className='flex items-center gap-4'>
                <CiHeadphones className='text-[#00B207] text-[60px] p-4 bg-[#E6F8E7] rounded-full' />
                <div>
                  <h4 className='text-gray-900 text-[18px] font-medium leading-[27px] mb-2'>Great Support 24/7</h4>
                  <p className='text-gray-500 text-[14px] leading-[21px]'>Instant access to Contact</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <CiShoppingBasket className='text-[#00B207] text-[60px] p-4 bg-[#E6F8E7] rounded-full' />
                <div>
                  <h4 className='text-gray-900 text-[18px] font-medium leading-[27px] mb-2'>100% Sucure Payment</h4>
                  <p className='text-gray-500 text-[14px] leading-[21px]'>We ensure your money is save</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <PiPackage className='text-[#00B207] text-[60px] p-4 bg-[#E6F8E7] rounded-full' />
                <div>
                  <h4 className='text-gray-900 text-[18px] font-medium leading-[27px] mb-2'>100% Organic Food</h4>
                  <p className='text-gray-500 text-[14px] leading-[21px]'>100% healthy & Fresh food.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSecond;