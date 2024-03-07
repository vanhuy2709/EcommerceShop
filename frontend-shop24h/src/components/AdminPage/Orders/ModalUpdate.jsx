import { Modal, Button, Input, Select, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Action
import {
  handleCloseModalUpdateOrderAction,
  handleChangeStatusOrderAction
} from '../../../store/actions/admin/modal.action';
import {
  getOrderByIdAction,
  updateStatusOrderByIdAction
} from '../../../store/actions/admin/apiRequest.action';

const ModalUpdate = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { updateModalOrder } = useSelector(reduxData => reduxData.modalAdminReducer);
  const { orderById } = useSelector(reduxData => reduxData.orderAdminReducer);
  const { pending, order, isError } = orderById;
  const { open, id, status } = updateModalOrder;

  useEffect(() => {
    dispatch(getOrderByIdAction(id, storageUser.token))
  }, [id])

  // Handle Update Order
  const newStatusOrder = {
    status,
  }
  const handleUpdateStatusOrder = () => {
    dispatch(updateStatusOrderByIdAction(id, newStatusOrder, storageUser.token));
  }

  return (
    <Modal
      title="Detail Order"
      centered
      footer={false}
      open={open}
      width={1000}
      onCancel={() => dispatch(handleCloseModalUpdateOrderAction())}
    >

      {/* ID & User */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>ID: </label>
          <Input value={order?._id} variant="filled" disabled />
        </div>

        <div className="flex items-center gap-4">
          <label>User: </label>
          <Input value={order?.user?.name} variant="filled" disabled />
        </div>
      </div>

      {/* Shipping Address & Phone */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>Shipping Address: </label>
          <Input value={order?.shippingAddress} variant="filled" disabled />
        </div>
        <div className="flex items-center gap-4">
          <label>Phone: </label>
          <Input value={order?.phone} variant="filled" disabled />
        </div>
      </div>

      {/* City & Country */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>City: </label>
          <Input value={order?.city} variant="filled" disabled />
        </div>
        <div className="flex items-center gap-4">
          <label>Country: </label>
          <Input value={order?.country} variant="filled" disabled />
        </div>
      </div>

      {/* Total Price & Date Order */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>Total Price: </label>
          <Input value={`${order?.totalPrice} $`} variant="filled" disabled />
        </div>
        <div className="flex items-center gap-4">
          <label>Date: </label>
          <Input value={order?.dateOrdered} variant="filled" disabled />
        </div>
      </div>

      {/* Order Items */}
      <div className="mb-4">
        <h1 className="text-xl font-bold">List Order:</h1>
        {
          order?.orderItems && order?.orderItems.length > 0 &&
          order?.orderItems.map(item => (
            <div key={item._id} className="grid grid-cols-2">
              <div className="flex items-center gap-4">
                <Image src={item.product.image} width={100} />
                <p>{item.product.name}</p>
              </div>

              <div className="flex items-center gap-4">
                <label>Quantity: </label>
                <Input value={item.quantity} variant="filled" />
              </div>
            </div>
          ))
        }
      </div>

      {/* Status */}
      <div className="flex items-center gap-4 mb-4">
        <label>Status: </label>
        <Select
          style={{ width: '100%' }}
          value={status}
          onChange={(value) => dispatch(handleChangeStatusOrderAction(value))}
          options={[
            {
              value: 'Pending',
              label: 'Pending',
            },
            {
              value: 'Processing',
              label: 'Processing',
            },
            {
              value: 'Delivered',
              label: 'Delivered',
            },
          ]}
        />
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button
          onClick={() => handleUpdateStatusOrder()}
        >
          Update Status
        </Button>
        <Button
          danger
          type="primary"
          onClick={() => dispatch(handleCloseModalUpdateOrderAction())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalUpdate;