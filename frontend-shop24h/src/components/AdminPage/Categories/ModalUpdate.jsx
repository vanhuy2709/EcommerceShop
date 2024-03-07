import { Button, Modal, Input, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";

// Action
import {
  handleCloseModalUpdateCategoryAction,
  handleChangeNameCategoryAction,
  handleChangeColorCategoryAction,
  handleChangeImageCategoryAction
} from '../../../store/actions/admin/modal.action';
import { updateCategoryByIdAction } from '../../../store/actions/admin/apiRequest.action';

const ModalUpdate = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { updateModalCategory } = useSelector(reduxData => reduxData.modalAdminReducer);
  const { open, id, name, icon, color } = updateModalCategory;

  const handleChangeNameCategory = (e) => {
    dispatch(handleChangeNameCategoryAction(e.target.value))
  }
  const handleChangeColorCategory = (e) => {
    dispatch(handleChangeColorCategoryAction(e.target.value))
  }
  const handleChangeImageCategory = (e) => {
    dispatch(handleChangeImageCategoryAction(e.target.value))
  }

  // Update Category
  const newInfoCategory = {
    id,
    name: name.trim(),
    icon,
    color: color.trim()
  };
  const handleUpdateCategory = () => {
    dispatch(updateCategoryByIdAction(id, newInfoCategory, storageUser.token))
  }

  return (
    <Modal
      title="Detail Categories"
      centered
      footer={false}
      open={open}
      onCancel={() => dispatch(handleCloseModalUpdateCategoryAction())}
    >
      {/* ID */}
      <div className="flex items-center gap-4 mb-4">
        <label>ID: </label>
        <Input
          placeholder="ID"
          value={id}
          disabled
        />
      </div>

      {/* Name */}
      <div className="flex items-center gap-4 mb-4">
        <label>Name: </label>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => handleChangeNameCategory(e)}
        />
      </div>

      {/* Color */}
      <div className="flex items-center gap-4 mb-4">
        <label>Color: </label>
        <Input
          placeholder="Color"
          value={color}
          onChange={(e) => handleChangeColorCategory(e)}
        />
      </div>

      {/* Icon */}
      <div className="flex items-center gap-4 mb-4">
        <label>Icon: </label>
        <Image
          width={100}
          src={icon}
        />
      </div>

      {/* Action */}
      <div className="flex items-center justify-end gap-4">
        <Button onClick={() => handleUpdateCategory()}>Update</Button>
        <Button
          danger
          type="primary"
          onClick={() => dispatch(handleCloseModalUpdateCategoryAction())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalUpdate;