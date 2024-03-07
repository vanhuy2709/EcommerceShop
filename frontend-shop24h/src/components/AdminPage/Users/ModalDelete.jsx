import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

// Action
import { handleCloseModalDeleteUserAction } from '../../../store/actions/admin/modal.action';
import { deleteUserByIdAction } from '../../../store/actions/admin/apiRequest.action';

const ModalDelete = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { deleteModalUser } = useSelector(reduxData => reduxData.modalAdminReducer);
  const { open, id } = deleteModalUser;

  const handleDeleteUser = () => {
    dispatch(deleteUserByIdAction(id, storageUser.token));
  }

  return (
    <Modal
      title="Delete User"
      centered
      footer={false}
      open={open}
      onCancel={() => dispatch(handleCloseModalDeleteUserAction())}
    >
      <p className="mb-6">Are you sure you want to delete this user?</p>

      <div className="flex items-center justify-end gap-4">
        <Button
          danger
          type="primary"
          onClick={() => handleDeleteUser()}
        >
          Delete
        </Button>
        <Button
          onClick={() => dispatch(handleCloseModalDeleteUserAction())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;