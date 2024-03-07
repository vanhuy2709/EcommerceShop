import { Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

// Action
import { handleCloseModalDeleteOrderAction } from '../../../store/actions/admin/modal.action';
import { deleteOrderByIdAction } from '../../../store/actions/admin/apiRequest.action';

const ModalDelete = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { deleteModalOrder } = useSelector(reduxData => reduxData.modalAdminReducer);
  const { open, id } = deleteModalOrder;

  return (
    <Modal
      title="Delete Order"
      centered
      footer={false}
      open={open}
      onCancel={() => dispatch(handleCloseModalDeleteOrderAction())}
    >
      <p className="mb-4">Are you sure you want to delete this order?</p>

      <div className="flex items-center justify-end gap-4">
        <Button
          danger
          type="primary"
          onClick={() => dispatch(deleteOrderByIdAction(id, storageUser.token))}
        >
          Delete
        </Button>
        <Button
          onClick={() => dispatch(handleCloseModalDeleteOrderAction())}
        >
          Cancel
        </Button>
      </div>
    </Modal>

  );
};

export default ModalDelete;