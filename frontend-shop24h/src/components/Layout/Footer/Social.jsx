
const Social = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00B207] hover:text-white cursor-pointer text-gray-300'>
        <i className="fa-brands fa-facebook-f"></i>
      </div>
      <div className='rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00B207] hover:text-white cursor-pointer text-gray-300'>
        <i className="fa-brands fa-pinterest-p"></i>
      </div>
      <div className='rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00B207] hover:text-white cursor-pointer text-gray-300'>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <div className='rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#00B207] hover:text-white cursor-pointer text-gray-300'>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
};

export default Social;