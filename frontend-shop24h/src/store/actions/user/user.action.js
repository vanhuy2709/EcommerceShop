import {
  HANDLE_CHANGE_USER_ADDRESS,
  HANDLE_CHANGE_USER_CITY,
  HANDLE_CHANGE_USER_COUNTRY,
  HANDLE_CHANGE_USER_EMAIL,
  HANDLE_CHANGE_USER_NAME,
  HANDLE_CHANGE_USER_PHONE
} from '../../constants/user/user.constant';

export const handleChangeUserNameAction = (value) => {

  return {
    type: HANDLE_CHANGE_USER_NAME,
    payload: value
  }
}
export const handleChangeUserEmailAction = (value) => {

  return {
    type: HANDLE_CHANGE_USER_EMAIL,
    payload: value
  }
}
export const handleChangeUserPhoneAction = (value) => {

  return {
    type: HANDLE_CHANGE_USER_PHONE,
    payload: value
  }
}
export const handleChangeUserAddressAction = (value) => {

  return {
    type: HANDLE_CHANGE_USER_ADDRESS,
    payload: value
  }
}
export const handleChangeUserCityAction = (value) => {

  return {
    type: HANDLE_CHANGE_USER_CITY,
    payload: value
  }
}
export const handleChangeUserCountryAction = (value) => {

  return {
    type: HANDLE_CHANGE_USER_COUNTRY,
    payload: value
  }
}
