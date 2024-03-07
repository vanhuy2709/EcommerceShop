import {
  FETCH_USER_BY_ID_ERROR,
  FETCH_USER_BY_ID_PENDING,
  FETCH_USER_BY_ID_SUCCESS,

  HANDLE_CHANGE_USER_ADDRESS,
  HANDLE_CHANGE_USER_CITY,
  HANDLE_CHANGE_USER_COUNTRY,
  HANDLE_CHANGE_USER_EMAIL,
  HANDLE_CHANGE_USER_NAME,
  HANDLE_CHANGE_USER_PHONE,
} from '../../constants/user/user.constant';

const initState = {
  userById: {
    pending: false,
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    isAdmin: '',
    address: '',
    city: '',
    country: '',
    isError: false,
  },
}

const userReducer = (state = initState, action) => {
  switch (action.type) {

    // Get User by ID
    case FETCH_USER_BY_ID_PENDING:
      state.userById.pending = true;
      break;
    case FETCH_USER_BY_ID_ERROR:
      state.userById.pending = false;
      state.userById.isError = true;
      break;
    case FETCH_USER_BY_ID_SUCCESS:
      state.userById.pending = false;
      state.userById.isError = false;
      state.userById.id = action.payload._id;
      state.userById.name = action.payload.name;
      state.userById.email = action.payload.email;
      state.userById.password = action.payload.password;
      state.userById.phone = action.payload.phone;
      state.userById.isAdmin = action.payload.isAdmin;
      state.userById.address = action.payload.address;
      state.userById.city = action.payload.city;
      state.userById.country = action.payload.country;
      break;

    // Handle Change Info User
    case HANDLE_CHANGE_USER_NAME:
      state.userById.name = action.payload;
      break;
    case HANDLE_CHANGE_USER_EMAIL:
      state.userById.email = action.payload;
      break;
    case HANDLE_CHANGE_USER_PHONE:
      state.userById.phone = action.payload;
      break;
    case HANDLE_CHANGE_USER_ADDRESS:
      state.userById.address = action.payload;
      break;
    case HANDLE_CHANGE_USER_CITY:
      state.userById.city = action.payload;
      break;
    case HANDLE_CHANGE_USER_COUNTRY:
      state.userById.country = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default userReducer;