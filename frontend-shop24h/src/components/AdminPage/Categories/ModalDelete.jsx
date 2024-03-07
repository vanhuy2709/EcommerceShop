import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";

// Action
import { handleCloseModalDeleteCategoryAction } from '../../../store/actions/admin/modal.action';
import { deleteCategoryByIdAction } from '../../../store/actions/admin/apiRequest.action';

const ModalDelete = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { deleteModalCategory } = useSelector(reduxData => reduxData.modalAdminReducer);
  const { open, id } = deleteModalCategory;

  // Handle Delete Category
  const handleDeleteCategory = () => {
    dispatch(deleteCategoryByIdAction(id, storageUser.token));
  }

  return (
    <Modal
      title="Delete Category"
      centered
      footer={false}
      open={open}
      onCancel={() => dispatch(handleCloseModalDeleteCategoryAction())}
    >
      <p className="mb-6">Are you sure you want to delete this product?</p>

      <div className="flex items-center justify-end gap-4">
        <Button
          danger
          type="primary"
          onClick={() => handleDeleteCategory()}
        >
          Delete
        </Button>
        <Button
          onClick={() => dispatch(handleCloseModalDeleteCategoryAction())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;