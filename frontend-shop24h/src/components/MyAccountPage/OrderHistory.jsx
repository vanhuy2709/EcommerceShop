import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Action
import { getOrdersByUserIdAction } from '../../store/actions/user/apiRequest.action';
import { useEffect } from "react";

const OrderHistory = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { orderByUserId } = useSelector(reduxData => reduxData.orderReducer);
  const { userById } = useSelector(reduxData => reduxData.userReducer);
  const { pending, listOrderByUser, isError } = orderByUserId;

  if (storageUser) {
    useEffect(() => {
      dispatch(getOrdersByUserIdAction(storageUser.token, storageUser.user._id));
    }, [])
  }

  return (
    <div className='flex-[3] border rounded-lg pt-4'>
      {/* Title */}
      <div className='flex justify-between items-center px-6 mb-4'>
        <h2 className='font-medium text-xl'>Recent Order History</h2>
      </div>

      {/* Table */}
      <div className='grid grid-cols-5 bg-[#F2F2F2] px-6 py-3'>
        <h4 className='font-medium text-xs text-gray-700'>ORDER ID</h4>
        <h4 className='font-medium text-xs text-gray-700'>DATE</h4>
        <h4 className='font-medium text-xs text-gray-700'>TOTAL</h4>
        <h4 className='font-medium text-xs text-gray-700'>STATUS</h4>
      </div>

      {/* Render List Order by User */}
      {
        listOrderByUser && listOrderByUser.length > 0 &&
        listOrderByUser.map(order => (
          <div key={order._id} className='grid grid-cols-5 px-6 py-3'>
            <p className='text-sm text-gray-800 overflow-ellipsis overflow-hidden w-1/2'>
              {order._id}
            </p>
            <p className='text-sm text-gray-800'>
              {order.dateOrdered.slice(0, 10)}
            </p>
            <p className='text-sm text-gray-800'>
              <span className='font-medium'>
                ${order.totalPrice.toFixed(2)}
              </span> ({order.orderItems.length} Products)
            </p>
            <p className='text-sm text-gray-800'>{order.status}</p>
            <Link
              className="text-[#00B207] font-medium text-sm"
              to={`/account/order-history/${order._id}`}
            >
              View Details
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default OrderHistory;