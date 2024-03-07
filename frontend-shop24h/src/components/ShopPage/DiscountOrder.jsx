
const DiscountOrder = () => {

  return (
    <div className="bg-[url('/src/assets/images/shop/discount-image.jfif')] bg-no-repeat bg-cover bg-top pt-5 pb-[180px] rounded-[10px] my-4">
      <h2 className="text-center mb-[2px]">
        <span className="text-[#FF8A00] text-[32px] font-semibold leading-[39px]">79%</span>
        <span className="text-gray-900 leading-9 text-[24px]"> Discount</span>
      </h2>
      <p className="text-center text-gray-700 leading-6 mb-3">on your first order</p>
      <p className="text-[#00B207] font-semibold leading-5 text-center cursor-pointer">Shop Now</p>
    </div>
  );
};

export default DiscountOrder;