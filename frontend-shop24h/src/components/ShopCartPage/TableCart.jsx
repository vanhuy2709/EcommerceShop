import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  handleIncreaseQuantityProductInCart,
  handleDecreaseQuantityProductInCart
} from '../../store/actions/user/changeQuantity.action';
import { handleRemoveProductInCart } from '../../store/actions/user/addCart.action';

const TableCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listCart } = useSelector(reduxData => reduxData.cartReducer);

  // Handle Navigate Shop Page
  const handleNavigateShopPage = () => {
    navigate('/shop');
  }

  // Handle Increase Quantity
  const handleIncQuantityCart = (product) => {
    dispatch(handleIncreaseQuantityProductInCart(product));
  }

  // Handle Decrease Quantity
  const handleDecQuantityCart = (product) => {
    dispatch(handleDecreaseQuantityProductInCart(product));
  }

  // Handle Remove Item in Cart
  const handleRemoveItem = (product) => {
    dispatch(handleRemoveProductInCart(product))
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <p className='uppercase text-gray-500 text-[14px] font-[Poppins] font-medium leading-[14px] tracking-[0.42px]'>Product</p>
            </TableCell>
            <TableCell align="right">
              <p className='uppercase text-gray-500 text-[14px] font-[Poppins] font-medium leading-[14px] tracking-[0.42px]'>Price</p>
            </TableCell>
            <TableCell align="right">
              <p className='uppercase text-gray-500 text-[14px] font-[Poppins] font-medium leading-[14px] tracking-[0.42px]'>Quantity</p>
            </TableCell>
            <TableCell align="right">
              <p className='uppercase text-gray-500 text-[14px] font-[Poppins] font-medium leading-[14px] tracking-[0.42px]'>Subtotal</p>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {/* Render List Cart in localStorage */}
          {
            listCart.map((item, index) => (
              <TableRow
                key={item._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span className='flex items-center gap-3'>
                    <img src={item.image} alt='image' className='w-[100px] h-[100px] object-cover' />
                    <p className='text-gray-900 font-[Poppins] font-normal leading-6'>{item.name}</p>
                  </span>
                </TableCell>
                <TableCell align="right">
                  <p className='text-gray-900 leading-6 font-[Poppins]'>${item.promotionPrice}</p>
                </TableCell>
                <TableCell align="right" className='relative'>
                  <span className='flex justify-end border items-center max-w-max absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2'>
                    <button className='bg-[#F2F2F2] p-1 rounded-full'>
                      <FaMinus onClick={() => handleDecQuantityCart(item)} />
                    </button>
                    <input
                      type='text'
                      className='w-10 text-center outline-none'
                      value={item.quantity}
                      readOnly
                    />
                    <button className='bg-[#F2F2F2] p-1 rounded-full'>
                      <FaPlus onClick={() => handleIncQuantityCart(item)} />
                    </button>
                  </span>
                </TableCell>
                <TableCell align="right">
                  <p className='text-gray-900 font-medium leading-6 font-[Poppins]'>${(item.promotionPrice * item.quantity).toFixed(2)}</p>
                </TableCell>
                <TableCell align="right" className=''>
                  <AiOutlineCloseCircle
                    className='text-[1.5rem] cursor-pointer'
                    onClick={() => handleRemoveItem(item)}
                  />
                </TableCell>
              </TableRow>
            ))
          }

          <TableRow>
            <TableCell className='px-5 py-4'>
              <button
                className='text-gray-700 md:text-[14px] font-semibold py-[14px] px-8 rounded-full bg-[#F2F2F2]'
                onClick={() => handleNavigateShopPage()}
              >
                Return to shop
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCart;