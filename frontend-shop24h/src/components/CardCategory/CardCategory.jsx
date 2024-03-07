
const CardCategory = ({ category }) => {

  return (
    <div
      className='rounded-lg overflow-hidden border hover:shadow-xl duration-200 pt-8 pb-6 bg-white'
    >

      {/* Image */}
      <div className='flex justify-center mb-5'>
        <img src={category.icon} alt='image-category' />
      </div>

      {/* Title */}
      <h4 className='text-lg font-medium text-gray-900 text-center mb-[6px]'>
        {category.name}
      </h4>

      {/* Count Product in Categories */}
      <p className='text-[14px] leading-[21px] text-gray-500 text-center'>
        {category.countProduct} Products
      </p>

    </div>
  );
};

export default CardCategory;