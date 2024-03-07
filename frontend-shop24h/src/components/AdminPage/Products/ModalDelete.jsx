import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

// Action
import { handleCloseModalDeleteProductAction } from '../../../store/actions/admin/modal.action';
import { deleteProductByIdAction } from '../../../store/actions/admin/apiRequest.action';

const ModalDelete = () => {
  const dispatch = useDispatch();
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const { deleteModal } = useSelector(reduxData => reduxData.modalAdminReducer);
  const { open, id } = deleteModal;

  // Handle Delete Product
  const handleDeleteProduct = () => {
    dispatch(deleteProductByIdAction(id, storageUser.token));
  }

  return (
    <Modal
      title="Delete Product"
      centered
      footer={false}
      open={open}
      onCancel={() => dispatch(handleCloseModalDeleteProductAction())}
      width={500}
    >
      <p className="mb-6">Are you sure you want to delete this product?</p>
      <div className="flex items-center justify-end gap-4">
        <Button
          danger
          type="primary"
          onClick={() => handleDeleteProduct()}
        >
          Delete
        </Button>
        <Button
          onClick={() => dispatch(handleCloseModalDeleteProductAction())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;