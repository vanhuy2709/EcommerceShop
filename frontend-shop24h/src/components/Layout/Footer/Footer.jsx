import downloadAppStore from '../../../assets/images/download-app-store.png';
import downloadGooglePlay from '../../../assets/images/download-google-play.png';
import { myAccountMenu, helpsMenu, proxyMenu } from '../../../data/menu';

import AboutWebsite from './AboutWebsite';
import MenuFooter from './MenuFooter';
import Social from './Social';
import Payment from './Payment';
import Subcribe from './Subcribe';

const Footer = () => {
  return (
    <div className="bg-[#191919]">
      {/* Subcribe */}
      <Subcribe />

      {/* Top Content */}
      <div className='py-10 lg:py-20 flex flex-col lg:flex-row max-w-screen-xl mx-auto px-4 gap-5 lg:justify-between'>
        <AboutWebsite />
        <div>
          <h4 className='text-white text-[20px] font-medium leading-[30px] mb-5'>Account</h4>
          <MenuFooter listMenu={myAccountMenu} />
        </div>
        <div>
          <h4 className='text-white text-[20px] font-medium leading-[30px] mb-5'>Helps</h4>
          <MenuFooter listMenu={helpsMenu} />
        </div>
        <div>
          <h4 className='text-white text-[20px] font-medium leading-[30px] mb-5'>Proxy</h4>
          <MenuFooter listMenu={proxyMenu} />
        </div>

        {/* Download our Mobile App */}
        <div>
          <h4 className='text-white text-[20px] font-medium leading-[30px] mb-5'>Download our Mobile App</h4>
          <div className='flex gap-2 lg:flex-col lg:items-start xl:flex-row'>
            <button>
              <img src={downloadAppStore} alt='download-app-store' />
            </button>
            <button>
              <img src={downloadGooglePlay} alt='download-google-play' />
            </button>
          </div>
        </div>
      </div>

      {/* Hr */}
      <div className='max-w-screen-xl mx-auto'>
        <hr />
      </div>

      {/* Bot Content */}
      <div className='max-w-screen-xl mx-auto py-6 flex flex-col items-center gap-4 lg:flex-row lg:justify-between px-4'>
        <Social />
        <p className='text-gray-500 text-[14px] leading-[21px]'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
        <Payment />
      </div>

    </div>
  );
};

export default Footer;