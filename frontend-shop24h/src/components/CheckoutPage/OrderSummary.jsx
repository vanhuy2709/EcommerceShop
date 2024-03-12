import {
  Radio, RadioGroup, FormControlLabel, FormControl,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderAction } from '../../store/actions/user/apiRequest.action';
import { useNavigate } from 'react-router-dom';
import { validatePhone } from '../../utils/validate';
import { message, notification } from 'antd';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get Order User
  const { orderUser } = useSelector(reduxData => reduxData.orderReducer);

  // Get info of Order User
  const { address, country, city, phone, note, province, district } = orderUser;

  // Get list Provinces & Districts
  const { provinces, districts } = useSelector(reduxData => reduxData.provinceReducer);
  const { listProvince } = provinces;
  const { listDistrict } = districts;

  // Get listCart & Subtotal
  const { listCart, subTotal } = useSelector(reduxData => reduxData.cartReducer);
  // Get User
  const storageUser = JSON.parse(sessionStorage.getItem('user'));

  const orderItems = listCart.map(item => {
    return {
      quantity: item.quantity,
      product: item._id
    }
  })

  // Fetch Provinces

  const handleSubmitOrder = () => {

    const order = {
      orderItems: orderItems,
      shippingAddress: address.trim(),
      city: listProvince.find(item => item.province_id === province)?.province_name,
      country: listDistrict.find(item => item.district_id === district)?.district_name,
      phone: phone.trim(),
      note: note.trim(),
      user: storageUser.user._id
    }

    // Validate Phone
    if (!validatePhone(order.phone)) {
      notification.error({
        message: 'Error',
        description: 'Your number phone is not valid'
      })
      return false;
    }

    dispatch(createOrderAction(order, storageUser.token, navigate));
  }

  return (
    <div className="flex-1 border rounded-lg p-6 h-fit">
      <h2 className="mb-3 text-gray-900 text-[20px] font-medium leading-[30px]">Order Summary</h2>

      {/* List Cart */}
      {
        listCart && listCart.length > 0 &&
        listCart.map(item => (
          <div key={item._id} className='flex flex-col sm:flex-row sm:items-center justify-between mb-3'>
            <div className='flex gap-[6px] items-center'>
              <img src={item.image} className='w-[60px] h-[60px] object-cover' />
              <p>{item.name}</p>
              <p>x{item.quantity}</p>
            </div>
            <p className='text-right'>
              ${(item.promotionPrice * item.quantity).toFixed(2)}
            </p>
          </div>
        ))
      }

      {/* SubTotal */}
      <div className='flex items-center justify-between py-3 border-b'>
        <p className='text-gray-700 text-[14px]'>Subtotal:</p>
        <p className='text-gray-900 text-[14px] font-medium'>${subTotal.toFixed(2)}</p>
      </div>

      <div className='flex items-center justify-between py-3 border-b'>
        <p className='text-gray-700 text-[14px]'>Shipping:</p>
        <p className='text-gray-900 text-[14px] font-medium'>Free</p>
      </div>

      <div className='flex items-center justify-between pt-3 mb-6'>
        <p className='text-gray-700 text-[14px]'>Total:</p>
        <p className='text-gray-900 text-[18px] font-semibold'>${subTotal.toFixed(2)}</p>
      </div>

      {/* Payment */}
      {/* <h2 className='text-gray-900 text-[20px] font-medium leading-[30px] mb-4'>Payment Method</h2>

      <div className='mb-6'>
        <FormControl>
          <RadioGroup defaultValue="cash">
            <FormControlLabel
              value="cash"
              control={<Radio color='success' />}
              label="Cash on Delivery"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio color='success' />}
              label="Paypal"
            />
          </RadioGroup>
        </FormControl>
      </div> */}

      <button
        className='text-white font-semibold py-4 px-10 bg-[#00B207] rounded-full w-full'
        onClick={() => handleSubmitOrder()}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;