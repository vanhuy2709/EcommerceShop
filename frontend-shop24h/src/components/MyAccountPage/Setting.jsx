import { Input, notification } from "antd";
import { useEffect, useState } from "react";
import { validateEmail, validatePhone } from '../../utils/validate';
import { useDispatch, useSelector } from "react-redux";

// Action
import {
  updateUserByIdAction,
  getUserByIdAction,
  updatePasswordUserByIdAction
} from '../../store/actions/user/apiRequest.action';
import {
  handleChangeUserAddressAction,
  handleChangeUserCityAction,
  handleChangeUserCountryAction,
  handleChangeUserEmailAction,
  handleChangeUserNameAction,
  handleChangeUserPhoneAction
} from '../../store/actions/user/user.action';

const Setting = () => {
  const dispatch = useDispatch();
  const storageUser = JSON.parse(sessionStorage.getItem('user'));

  const { userById } = useSelector(reduxData => reduxData.userReducer);
  const { id, name, email, password, phone, address, city, country } = userById;

  // Handle Change info User
  const handleChangeInfoUser = () => {

    const newInfoUser = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      address: address.trim(),
      city: city.trim(),
      country: country.trim()
    }

    if (!validateEmail(newInfoUser.email)) {
      notification.error({
        message: 'Error',
        description: 'Email is not valid'
      })
      return false;
    }
    if (!validatePhone(newInfoUser.phone)) {
      notification.error({
        message: 'Error',
        description: 'Your phone number is not valid'
      })
      return false;
    }

    dispatch(updateUserByIdAction(id, newInfoUser));
  }

  // Handle Change Password
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    const newPasswordUser = {
      oldPassword,
      newPassword,
      confirmPassword
    }

    if (newPasswordUser.newPassword !== newPasswordUser.confirmPassword) {
      return notification.error({
        message: 'Error',
        description: 'Your confirm password is not same'
      })
    }

    dispatch(updatePasswordUserByIdAction(id, newPasswordUser));
  }

  // Get User by ID
  useEffect(() => {
    dispatch(getUserByIdAction(storageUser.user._id));
  }, [])

  return (
    <div className="flex-[3]">

      {/* Account Settings */}
      <div className="border rounded-lg pt-4 mb-6">
        {/* Title */}
        <div className='flex justify-between items-center px-6 pb-4 border-b'>
          <h2 className='font-medium text-xl'>Account Settings</h2>
        </div>

        {/* InFo User */}
        <div className="p-6 flex flex-col gap-4">

          {/* Change Username */}
          <div>
            <label className="text-sm">Full Name</label>
            <Input
              value={name}
              onChange={(e) => dispatch(handleChangeUserNameAction(e.target.value))}
              className="py-[14px] px-4 text-base"
            />
          </div>

          {/* Change Email */}
          <div>
            <label className="text-sm">Email</label>
            <Input
              value={email}
              onChange={(e) => dispatch(handleChangeUserEmailAction(e.target.value))}
              className="py-[14px] px-4 text-base"
            />
          </div>

          {/* Change Phone Number */}
          <div>
            <label className="text-sm">Phone Number</label>
            <Input
              value={phone}
              onChange={(e) => dispatch(handleChangeUserPhoneAction(e.target.value))}
              className="py-[14px] px-4 text-base"
            />
          </div>

          {/* Change Street Address */}
          <div>
            <label className="text-sm">Street Address</label>
            <Input
              value={address}
              onChange={(e) => dispatch(handleChangeUserAddressAction(e.target.value))}
              className="py-[14px] px-4 text-base"
            />
          </div>

          <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Change Country */}
            <div>
              <label className="text-sm">Country</label>
              <Input
                value={country}
                onChange={(e) => dispatch(handleChangeUserCountryAction(e.target.value))}
                className="py-[14px] px-4 text-base"
              />
            </div>

            {/* Change City */}
            <div>
              <label className="text-sm">City</label>
              <Input
                value={city}
                onChange={(e) => dispatch(handleChangeUserCityAction(e.target.value))}
                className="py-[14px] px-4 text-base"
              />
            </div>
          </div>

          <button
            className="bg-[#00B207] text-white py-[14px] px-8 rounded-full font-semibold text-sm w-fit"
            onClick={() => handleChangeInfoUser()}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Change Password */}
      <div className="border rounded-lg py-4">

        {/* Title */}
        <div className='flex justify-between items-center px-6 pb-4 border-b'>
          <h2 className='font-medium text-xl'>Change Password</h2>
        </div>

        {/* Current Password */}
        <div className="px-6 mb-6 mt-4">
          <label className="text-sm">Current Password</label>
          <Input.Password
            className="py-[14px] px-4 text-base"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>

        {/* New Password & Confirm Password */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm">New Password</label>
            <Input.Password
              className="py-[14px] px-4 text-base"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm">Confirm Password</label>
            <Input.Password
              className="py-[14px] px-4 text-base"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-[#00B207] text-white py-[14px] px-8 rounded-full font-semibold text-sm w-fit mx-6"
          onClick={() => handleChangePassword()}
        >
          Save Password
        </button>
      </div>

    </div>
  );
};

export default Setting;