import { SatelliteAlt } from '@mui/icons-material';
import {
  FETCH_USERS_ERROR,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS
} from '../../constants/admin/user.constant';

const initState = {

  // Fetch List User
  listUser: {
    pending: false,
    userList: null,
    isError: false,
  },
}

const userAdminReducer = (state = initState, action) => {
  switch (action.type) {

    // Fetch List User
    case FETCH_USERS_PENDING:
      state.listUser.pending = true;
      break;
    case FETCH_USERS_ERROR:
      state.listUser.pending = false;
      state.listUser.isError = true;
      break;
    case FETCH_USERS_SUCCESS:
      state.listUser.pending = false;
      state.listUser.isError = false;
      state.listUser.userList = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default userAdminReducer;