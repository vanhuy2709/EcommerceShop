import {

  // Fetch User Login
  FETCH_USER_LOGIN_ERROR,
  FETCH_USER_LOGIN_PENDING,
  FETCH_USER_LOGIN_SUCCESS,

  // Fetch User Register
  FETCH_USER_REGISTER_ERROR,
  FETCH_USER_REGISTER_PENDING,
  FETCH_USER_REGISTER_SUCCESS
} from '../../constants/user/auth.constant';

const initState = {

  // Login User
  loginUser: {
    pending: false,
    user: null,
    isError: false,
  },

  // Register User
  registerUser: {
    pending: false,
    user: null,
    isError: false
  }
}

const authReducer = (state = initState, action) => {
  switch (action.type) {

    // Login User
    case FETCH_USER_LOGIN_PENDING:
      state.loginUser.pending = true;
      break;
    case FETCH_USER_LOGIN_ERROR:
      state.loginUser.pending = false;
      state.loginUser.isError = true;
      break;
    case FETCH_USER_LOGIN_SUCCESS:
      state.loginUser.pending = false;
      state.loginUser.isError = false;
      state.loginUser.user = action.payload;
      break;

    // Register User
    case FETCH_USER_REGISTER_PENDING:
      state.registerUser.pending = true;
      break;
    case FETCH_USER_REGISTER_ERROR:
      state.registerUser.pending = false;
      state.registerUser.isError = true;
      break;
    case FETCH_USER_REGISTER_SUCCESS:
      state.registerUser.pending = false;
      state.registerUser.isError = false;
      state.registerUser.user = action.payload;
      break;


    default:
      break;
  }

  return { ...state };
}

export default authReducer;

