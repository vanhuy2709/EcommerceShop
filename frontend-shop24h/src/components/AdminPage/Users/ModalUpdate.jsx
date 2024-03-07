import { Button, Modal, Input, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

// Action
import {
  handleCloseModalUpdateUserAction,
  handleChangeAddressUserAction,
  handleChangeCityUserAction,
  handleChangeNameUserAction,
  handleChangeRoleUserAction,
  handleChangeEmailUserAction,
  handleChangePhoneUserAction,
  handleChangeCountryUserAction
} from '../../../store/actions/admin/modal.action';
import { updateUserByIdAction } from '../../../store/actions/admin/apiRequest.action';

const ModalUpdate = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { updateModalUser } = useSelector(reduxData => reduxData.modalAdminReducer);
  const {
    open,
    id,
    name,
    email,
    phone,
    isAdmin,
    address,
    city,
    country } = updateModalUser;

  // Handle Update User
  const newInfoUser = {
    name,
    email,
    phone,
    isAdmin,
    address,
    city,
    country
  }
  const handleUpdateUser = () => {
    dispatch(updateUserByIdAction(id, newInfoUser, storageUser.token));
  }

  return (
    <Modal
      title="Detail User"
      centered
      footer={false}
      open={open}
      width={1000}
      onCancel={() => dispatch(handleCloseModalUpdateUserAction())}
    >
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className='flex items-center gap-4'>
          <label>ID: </label>
          <Input value={id} disabled />
        </div>

        <div className='flex items-center gap-4'>
          <label>Name: </label>
          <Input
            value={name}
            onChange={(e) => dispatch(handleChangeNameUserAction(e.target.value))}
          />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div className='flex items-center gap-4'>
          <label>Email: </label>
          <Input
            value={email}
            onChange={(e) => dispatch(handleChangeEmailUserAction(e.target.value))}
          />
        </div>

        <div className='flex items-center gap-4'>
          <label>Phone: </label>
          <Input
            value={phone}
            onChange={(e) => dispatch(handleChangePhoneUserAction(e.target.value))}
          />
        </div>
      </div>

      <div className='flex items-center gap-4 mb-4'>
        <label>Address: </label>
        <Input
          value={address}
          onChange={(e) => dispatch(handleChangeAddressUserAction(e.target.value))}
        />
      </div>

      <div className='grid grid-cols-3 gap-4 mb-4'>
        <div className='flex items-center gap-4'>
          <label>City: </label>
          <Input
            value={city}
            onChange={(e) => dispatch(handleChangeCityUserAction(e.target.value))}
          />
        </div>

        <div className='flex items-center gap-4'>
          <label>Country: </label>
          <Input
            value={country}
            onChange={(e) => dispatch(handleChangeCountryUserAction(e.target.value))}
          />
        </div>

        <div className='flex items-center gap-4'>
          <label>Role: </label>
          <Select
            value={isAdmin}
            onChange={(value) => dispatch(handleChangeRoleUserAction(value))}
            style={{
              width: '100%'
            }}
            options={[
              {
                value: true,
                label: 'Admin',
              },
              {
                value: false,
                label: 'User',
              },
            ]}
          />
        </div>
      </div>

      <div className='flex items-center justify-end gap-4'>
        <Button onClick={() => handleUpdateUser()}>Update</Button>
        <Button
          danger
          type='primary'
          onClick={() => dispatch(handleCloseModalUpdateUserAction())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalUpdate;