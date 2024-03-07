
const AboutWebsite = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-white text-[20px] font-medium leading-[30px]'>About Shopery</h4>
      <p className='text-gray-500 text-[14px] leading-[21px]'>Morbi cursus porttitor enim lobortis molestie.<br />Duis gravida turpis dui, eget bibendum magna congue nec.</p>
      <div className='flex items-center gap-4'>
        <a href="/mobile" className='text-white text-[14px] font-medium leading-[21px] border-b-[#20B526] border-b py-[6px]'>(219) 555-0114</a>
        <span className='text-gray-500'>or</span>
        <a href="/gmail" className='text-white text-[14px] font-medium leading-[21px] border-b-[#20B526] border-b py-[6px]'>Proxy@gmail.com</a>
      </div>
    </div>
  );
};

export default AboutWebsite;