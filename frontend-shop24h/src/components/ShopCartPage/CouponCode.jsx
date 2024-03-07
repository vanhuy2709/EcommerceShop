
const CouponCode = () => {

  return (
    <div className='border rounded-lg flex flex-col lg:flex-row items-center mt-6 p-5 gap-6 justify-between'>
      <p className='text-gray-900 text-[20px] font-medium leading-[30px]'>Coupon Code</p>
      <div className='flex'>
        <input
          className='border text-gray-400 leading-6 pl-6 pr-20 py-[14px] outline-none rounded-full lg:w-96 w-60'
          placeholder='Enter Code'
        />
        <button className='text-white font-semibold leading-5 bg-gray-800 px-4 lg:py-4 lg:px-10 rounded-full -translate-x-11 lg:text-[1rem] text-[0.6rem]'>Apply Coupon</button>
      </div>
    </div>
  );
};

export default CouponCode;