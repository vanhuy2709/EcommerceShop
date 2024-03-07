import {
  HANDLE_CHANGE_ADDRESS,
  HANDLE_CHANGE_CITY,
  HANDLE_CHANGE_COUNTRY,
  HANDLE_CHANGE_PHONE
} from '../../constants/user/order.constant';

// Handle change Information Order
export const handleChangeAddressAction = (value) => {

  return {
    type: HANDLE_CHANGE_ADDRESS,
    payload: value
  }
}

export const handleChangeCountryAction = (value) => {

  return {
    type: HANDLE_CHANGE_COUNTRY,
    payload: value
  }
}

export const handleChangeCityAction = (value) => {

  return {
    type: HANDLE_CHANGE_CITY,
    payload: value
  }
}

export const handleChangePhoneAction = (value) => {

  return {
    type: HANDLE_CHANGE_PHONE,
    payload: value
  }
}