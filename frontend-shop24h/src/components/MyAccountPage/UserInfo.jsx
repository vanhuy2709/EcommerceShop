import avatar from '../../assets/images/customer/user1.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Action
import { getOrdersByUserIdAction } from '../../store/actions/user/apiRequest.action';
import { getUserByIdAction } from '../../store/actions/user/apiRequest.action';

const UserInfo = () => {
  const dispatch = useDispatch();
  const storageUser = JSON.parse(sessionStorage.getItem('user'));

  const { orderByUserId } = useSelector(reduxData => reduxData.orderReducer);
  const { userById } = useSelector(reduxData => reduxData.userReducer);
  const { id, name, email, phone, isAdmin, address, city, country } = userById;
  const { pending, listOrderByUser, isError } = orderByUserId;

  // Get User by ID
  useEffect(() => {
    dispatch(getUserByIdAction(storageUser.user._id));
  }, [])

  // Get Order by User ID
  if (storageUser) {
    useEffect(() => {
      dispatch(getOrdersByUserIdAction(storageUser.token, storageUser.user._id))
    }, [])
  }

  return (
    <div className="flex-[3]">

      <div className='grid grid-cols-3 gap-6 mb-6'>
        {/* User */}
        <div className='border col-span-2 rounded-lg flex flex-col items-center py-8'>
          <img
            src={avatar}
            className='w-[120px] h-[120px] object-cover rounded-full mb-2'
          />
          <h2 className='text-xl font-medium text-gray-900'>{name}</h2>
          <p className='text-sm text-gray-500 mb-2'>
            {isAdmin ? "Admin" : "Customer"}
          </p>
        </div>

        {/* Address */}
        <div className='border rounded-lg p-8'>
          <p className='text-gray-400 font-medium text-sm mb-[18px]'>
            BILLING ADDRESS
          </p>
          <h2 className='text-lg font-medium text-gray-900 mb-2'>
            {name}
          </h2>
          <p className='text-gray-600 text-sm mb-2'>
            {address}
          </p>
          <p className='text-gray-900 text-base mb-2'>{email}</p>
          <p className='text-gray-900 text-base mb-2'>{phone}</p>
        </div>
      </div>

      {/* Recent Order History */}
      <div className='border rounded-lg pt-4'>
        {/* Title */}
        <div className='flex justify-between items-center px-6 mb-4'>
          <h2 className='font-medium text-xl'>Recent Order History</h2>
        </div>

        {/* Table */}
        <div className='grid grid-cols-4 bg-[#F2F2F2] px-6 py-3'>
          <h4 className='font-medium text-xs text-gray-700'>ORDER ID</h4>
          <h4 className='font-medium text-xs text-gray-700'>DATE</h4>
          <h4 className='font-medium text-xs text-gray-700'>TOTAL</h4>
          <h4 className='font-medium text-xs text-gray-700'>STATUS</h4>
        </div>

        {/* Render List Order by User */}
        {
          listOrderByUser && listOrderByUser.length > 0 &&
          listOrderByUser.map(order => (
            <div key={order._id} className='grid grid-cols-4 px-6 py-3'>
              <p className='text-sm text-gray-800 overflow-hidden overflow-ellipsis w-1/2'>{order._id}</p>
              <p className='text-sm text-gray-800'>{order.dateOrdered.slice(0, 10)}</p>
              <p className='text-sm text-gray-800'>
                <span className='font-medium'>
                  ${order.totalPrice.toFixed(2)}
                </span> ({order.orderItems.length} Products)
              </p>
              <p className='text-sm text-gray-800'>{order.status}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default UserInfo;