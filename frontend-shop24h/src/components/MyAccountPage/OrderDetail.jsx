import { Steps } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Action
import { getOrderByIdAction } from '../../store/actions/user/apiRequest.action';

const OrderDetail = () => {
  const { orderid } = useParams()
  const dispatch = useDispatch();
  const { orderById } = useSelector(reduxData => reduxData.orderReducer);
  const { pending, order, isError } = orderById;

  // Get order by ID
  if (orderid) {
    useEffect(() => {
      dispatch(getOrderByIdAction(orderid))
    }, [])
  }

  // Handle Status
  const valueOfStatus = (status) => {
    if (status === 'Pending') {
      return 0;
    }
    if (status === 'Processing') {
      return 1;
    }
    if (status === 'Delivered') {
      return 2;
    }
  }

  return (
    <div className="flex-[3] border rounded-lg pt-4">
      {/* Title */}
      <div className='flex items-center px-6 mb-4 gap-3'>
        <h2 className='font-medium text-xl'>Order Details</h2>
        <span className="w-1 h-1 bg-black rounded-full"></span>
        <p>{order?.dateOrdered.slice(0, 10)}</p>
        <span className="w-1 h-1 bg-black rounded-full"></span>
        <p>{order?.orderItems.length} Products</p>
      </div>

      <div className="grid grid-cols-2 gap-6 m-6">
        {/* SHIPPING ADDRESS */}
        <div className="border rounded-lg">
          <h2 className="py-[18px] px-5 border-b font-medium text-sm text-gray-400">SHIPPING ADDRESS</h2>

          <div className="py-[14px] px-5">
            <h2 className="mb-2">{order?.user.name}</h2>
            <p className="text-sm text-gray-600 mb-9">
              {order?.shippingAddress}
            </p>

            <div className="mb-3">
              <p className="text-xs font-medium text-gray-400 mb-1">CITY</p>
              <p className="text-sm">{order?.city}</p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-400 mb-1">PHONE</p>
              <p className="text-sm">{order?.phone}</p>
            </div>
          </div>
        </div>

        {/* ORDER DETAIL */}
        <div className="border rounded-lg">
          <div className="px-5 py-[18px] border-b flex items-center justify-between">
            <h4 className="font-medium text-sm text-gray-400">ORDER ID:</h4>
            <p className="text-sm font-medium overflow-ellipsis overflow-hidden">
              {order?._id}
            </p>
          </div>

          <div className="px-5">
            <div className="py-[18px] border-b flex justify-between items-center">
              <h4 className="text-gray-500">Subtotal:</h4>
              <p className="font-semibold">${order?.totalPrice}</p>
            </div>
            {/* <div className=" py-[18px] border-b flex justify-between items-center">
              <h4 className="text-gray-500">Discount:</h4>
              <p className="font-semibold">20%</p>
            </div> */}
            <div className=" py-[18px] border-b flex justify-between items-center">
              <h4 className="text-gray-500">Shipping:</h4>
              <p className="font-semibold">Free</p>
            </div>
            <div className=" py-[18px] flex justify-between items-center">
              <h4 className="text-lg">Total:</h4>
              <p className="text-lg font-semibold text-[#00B207]">
                ${order?.totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="m-6">
        <Steps
          current={valueOfStatus(order?.status)}
          items={[
            {
              title: 'Pending',
            },
            {
              title: 'Processing',
            },
            {
              title: 'Delivered',
            },
          ]}
        />
      </div>

      {/* List Order */}
      <div>
        {/* Title */}
        <div className="grid grid-cols-5 bg-[#F2F2F2] px-6 py-3">
          <h4 className='font-medium text-xs text-gray-700 col-span-2'>PRODUCT</h4>
          <h4 className='font-medium text-xs text-gray-700'>PRICE</h4>
          <h4 className='font-medium text-xs text-gray-700'>QUANTITY</h4>
          <h4 className='font-medium text-xs text-gray-700'>SUBTOTAL</h4>
        </div>

        {/* Render List Product */}
        {
          order && order.orderItems.length > 0 &&
          order.orderItems.map(item => (
            <div key={item._id} className='grid grid-cols-5 px-6 py-3 items-center'>
              <div className="flex items-center gap-3 col-span-2">
                <img src={item.product.image} className="w-20 h-20 object-cover" />
                <p>{item.product.name}</p>
              </div>

              <p className='text-sm text-gray-800'>
                ${item.product.promotionPrice}
              </p>
              <p className='text-sm text-gray-800'>x{item.quantity}</p>
              <p className='text-sm text-gray-800 font-semibold'>${item.quantity * item.product.promotionPrice}</p>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default OrderDetail;