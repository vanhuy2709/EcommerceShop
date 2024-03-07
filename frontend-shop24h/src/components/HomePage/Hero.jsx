import heroImage from '../../assets/images/home/hero-image.jfif';

const Hero = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row gap-[18px]'>
      <div className='flex-[1.5]'>
        <img src={heroImage} alt='hero-image' />
      </div>
      <div className='flex-1'>
        <p className='text-[#00B207] text-[14px] uppercase leading-[14px] tracking-[0.28px] mb-2'>WELCOME TO SHOPERY</p>
        <h2 className='text-gray-900 text-[40px] xl:text-[56px] font-semibold leading-[68px] mb-5'>Fresh & Healthy Organic Food</h2>
        <p className='text-[#618062] text-[18px] leading-[27px] mb-8'>Free shipping on all your order. we deliver, you enjoy</p>
      </div>
    </div>
  );
};

export default Hero;