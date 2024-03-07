import aboutImage1 from '../../assets/images/about/about-1.jfif';

const AboutFirst = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className='flex flex-col lg:flex-row items-center my-20 gap-8'>
        {/* Info */}
        <div className='flex-1'>
          <h2 className='text-gray-900 text-[46px] text-center lg:text-left lg:text-[56px] font-semibold leading-[68px] mb-8'>100% Trusted Organic Food Store</h2>
          <p className='text-gray-600 text-[18px] leading-[27px] text-center lg:text-left'>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.</p>
        </div>

        {/* Image */}
        <div className='flex-1 rounded-lg overflow-hidden'>
          <img src={aboutImage1} alt='about-image' />
        </div>
      </div>
    </div>
  );
};

export default AboutFirst;