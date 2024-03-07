import { useNavigate } from 'react-router-dom';
import { Rate } from 'antd';
import { FaFire } from "react-icons/fa6";
import { handleAddCartAction } from '../../store/actions/user/addCart.action';
import { useDispatch } from 'react-redux';

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleViewDetail = () => {
    navigate(`/shop/${product._id}`);
  }

  // Handle Add Cart
  const handleAddCart = () => {
    dispatch(handleAddCartAction(product));
  }

  return (
    <div
      className='bg-white rounded-lg overflow-hidden border hover:border hover:border-[#00B207] hover:shadow-xl duration-200'
    >
      {/* Image Product */}
      <div
        className='relative cursor-pointer'
        onClick={() => handleViewDetail()}
      >

        {/* Check Count in Stock */}
        {
          product.countInStock === 0 ?
            (<div className='bg-black absolute py-[3px] px-2 rounded m-3'>
              <p className='text-white text-[14px] leading-[21px]'>Out of Stock</p>
            </div>)
            :
            (<></>)
        }

        {/* Check Feature */}
        {
          product.isFeatured &&
          (
            <div className='bg-red-600 absolute py-[3px] px-2 rounded m-3 right-0'>
              <p className='text-white text-[14px] leading-[21px] flex items-center gap-1'>
                <FaFire />
                Hot
              </p>
            </div>
          )
        }

        <img
          src={product.image}
          alt='product-image'
          className='p-[5px] w-full h-full lg:h-[300px] object-cover'
        />
      </div>

      {/* Info Product */}
      <div className='flex items-center justify-between py-4 px-5 cursor-pointer'>
        <div>
          <h4
            className='text-[#2B572E] leading-6 mb-[2px] cursor-pointer'
            onClick={() => handleViewDetail()}
          >
            {product.name}
          </h4>
          <p className='mb-[11px] flex items-center gap-1'>
            <span className='text-[#002603] text-[18px] font-medium leading-[27px]'>
              ${product.promotionPrice}
            </span>
            <span className='text-[#7A997C] line-through leading-6'>
              ${product.buyPrice}
            </span>
          </p>
          <Rate
            allowHalf
            value={product.rating}
            disabled
          />
        </div>

        {/* Add Cart */}
        <i
          className="fa-solid fa-bag-shopping bg-[#DAE5DA] p-[13px] rounded-full text-[#002602] cursor-pointer text-[24px] hover:bg-[#00B207] hover:text-white duration-200"
          onClick={() => handleAddCart(product)}
        ></i>
      </div>
    </div>
  );
};

export default CardProduct;