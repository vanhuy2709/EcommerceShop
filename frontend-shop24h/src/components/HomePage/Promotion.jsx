
const Promotion = () => {
  return (
    <div className="mx-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 py-[100px]">
        {/* Milk */}
        <div className="bg-[url('/src/assets/images/promotion/milk.jfif')] bg-center bg-cover bg-no-repeat py-10 px-6 rounded-lg">
          <h2 className="text-white text-[32px] font-semibold leading-[39px] mb-2">100% Fresh<br />Cow Milk</h2>
          <p className="text-white mb-4">
            <span className="text-[14px] leading-[21px]">Starting at </span>
            <span className="text-[20px] font-medium leading-[30px]">$14.99</span>
          </p>
          {/* <button className="text-[#00B207] text-[14px] font-semibold leading-4 bg-white py-[14px] px-8 rounded-[43px]">Shop Now</button> */}
        </div>

        {/* Water */}
        <div className="bg-[url('/src/assets/images/promotion/coca.jfif')] bg-center bg-cover bg-no-repeat py-10 px-6 rounded-lg text-right">
          <p className="text-[#002603] text-[14px] font-medium uppercase leading-[14px] tracking-[0.42px] mb-2">Drink Sale</p>
          <h2 className="text-[#002603] text-[32px] font-semibold leading-[39px] mb-5">Water &<br />Soft Drink</h2>
          {/* <button className="text-[#00B207] text-[14px] font-semibold leading-4 bg-white py-[14px] px-8 rounded-[43px]">Shop Now</button> */}
        </div>

        {/* Breakfast */}
        <div className="bg-[url('/src/assets/images/promotion/breakfast.jfif')] bg-center bg-cover bg-no-repeat py-10 px-6 rounded-lg text-right">
          <p className="text-[#002603] text-[14px] font-medium uppercase leading-[14px] tracking-[0.42px] mb-2">100% Organic</p>
          <h2 className="text-[#002603] text-[32px] font-semibold leading-[39px] mb-5">Quick<br />Breakfast</h2>
          {/* <button className="text-[#00B207] text-[14px] font-semibold leading-4 bg-white py-[14px] px-8 rounded-[43px]">Shop Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default Promotion;