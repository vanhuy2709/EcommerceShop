import logoWebsite from '../../../assets/images/logo-website.svg';

const Subcribe = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between py-14 gap-6">
        {/* Logo Website */}
        <div className='flex items-center gap-2'>
          <img src={logoWebsite} alt='logo-website' />
          <h2 className='text-gray-900 text-[32px] font-medium leading-[38px]'>Ecobazar</h2>
        </div>

        {/* Subcribe */}
        <div className='text-center lg:text-left'>
          <h4 className='text-gray-900 text-[24px] font-medium leading-9 mb-1'>Subcribe our Newsletter</h4>
          <p className='text-gray-400 text-[14px] leading-[21px]'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
        </div>

        {/* Input Subcribe */}
        <div className='flex relative'>
          <input type='text' placeholder='Your email address' className='text-gray-500 leading-6 pl-6 pr-[170px] md:pr-40 rounded-full outline-none py-[14px] w-72 md:w-96' />
          <button className='text-white font-semibold leading-[20px] bg-[#00B207] rounded-full px-10 absolute right-0 top-1/2 -translate-y-1/2 py-4'>Subcribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;