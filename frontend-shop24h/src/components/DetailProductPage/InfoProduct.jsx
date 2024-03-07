import Social from '../../components/Layout/Footer/Social';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';
import {
  handleIncreaseQuantityProductById,
  handleDecreaseQuantityProductById,
  handleChangeQuantityProductById
} from '../../store/actions/user/changeQuantity.action';
import { handleAddCartProductById } from '../../store/actions/user/addCart.action';

const InfoProduct = ({ product }) => {
  const dispatch = useDispatch();

  const percentDiscount = Math.ceil(100 - ((product?.promotionPrice * 100) / product?.buyPrice));

  // Handle Add Cart
  const handleAddCart = (product) => {
    dispatch(handleAddCartProductById(product));
  }

  // Handle Change Quantity
  const handleIncreaseQuantity = () => {
    dispatch(handleIncreaseQuantityProductById(product))
  }
  const handleDescreaseQuantity = () => {
    dispatch(handleDecreaseQuantityProductById(product));
  }
  const handleChangeQuantity = (e) => {
    dispatch(handleChangeQuantityProductById(e.target.value))
  }

  return (
    <div>
      {/* Name */}
      <div className='flex items-center gap-2 mb-3'>
        <h2 className='text-gray-900 text-[26px] md:text-[36px] font-semibold leading-[44px]'>{product?.name}</h2>
        {
          product?.countInStock > 0 ?
            (<p className='text-[#2C742F] text-[14px] leading-[21px] bg-[#D2F0D4] rounded px-2 py-1'>In Stock</p>)
            :
            (<p className='text-[#EA4B48] text-[14px] leading-[21px] bg-[#FDEDED] rounded px-2 py-1'>Out of Stock</p>)
        }
      </div>

      {/* Rating */}
      <div className='flex items-center gap-1 mb-5'>
        <Rate
          value={product?.rating}
          disabled
          allowHalf
        />
        <p className='text-gray-600 text-[14px]'>{product?.numReviews} Review</p>
      </div>

      {/* Price */}
      <div className='flex items-center gap-1 mb-5'>
        <p className='text-gray-300 text-[20px] line-through leading-[30px]'>
          ${product?.buyPrice}
        </p>
        <p className='text-[#2C742F] text-[24px] font-medium leading-9'>
          ${product?.promotionPrice}
        </p>
        <p
          className='text-[#EA4B48] text-[14px] font-medium bg-[#FDEDED] py-[3px] px-[10px] rounded-full ml-2'
        >
          {percentDiscount}% Off
        </p>
      </div>

      <hr />

      {/* Description */}
      <div className='my-6'>
        <div className='flex items-center mb-4 justify-center md:justify-end'>
          <p className='text-gray-900 text-[14px]'>Share item:</p>
          <Social />
        </div>
        <p className='text-gray-500 text-[14px]'>{product?.description}</p>
      </div>

      <hr />

      {/* Add cart */}
      <div className='flex gap-2 my-[18px]'>
        {/* Quantity */}
        <div className='flex items-center border p-2 rounded-full'>
          <div
            className='bg-[#F2F2F2] p-[10px] rounded-full cursor-pointer'
            onClick={() => handleDescreaseQuantity()}
          >
            <FaMinus />
          </div>
          <input
            type='number'
            className='w-10 text-center outline-none text-gray-900 leading-6'
            value={product?.quantity}
            onChange={handleChangeQuantity}
          />
          <div
            className='bg-[#F2F2F2] p-[10px] rounded-full cursor-pointer'
            onClick={() => handleIncreaseQuantity()}
          >
            <FaPlus />
          </div>
        </div>

        {/* Button */}
        <button
          className='text-white font-semibold leading-5 bg-[#00B207] py-4 px-10 rounded-full w-full flex items-center justify-center gap-4 text-[12px] md:text-[16px]'
          onClick={() => handleAddCart(product)}
        >
          Add to Cart
          <CiShoppingBasket className='text-[1rem] md:text-[1.5rem]' />
        </button>
      </div>

      <hr />

      {/* Type */}
      <div className='my-6'>
        <p className='text-gray-900 text-[14px] font-medium'>
          Category:
          <span className='text-gray-500 font-normal'> {product?.category.name}</span>
        </p>
      </div>

    </div>
  );
};

export default InfoProduct;