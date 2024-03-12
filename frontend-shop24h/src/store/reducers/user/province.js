import {
  FETCH_PROVINCES_ERROR,
  FETCH_PROVINCES_PENDING,
  FETCH_PROVINCES_SUCCESS,

  FETCH_DISTRICT_BY_PROVINCE_ID_ERROR,
  FETCH_DISTRICT_BY_PROVINCE_ID_PENDING,
  FETCH_DISTRICT_BY_PROVINCE_ID_SUCCESS
} from '../../constants/user/province.constant';

const initState = {

  // Provinces
  provinces: {
    pending: false,
    listProvince: null,
    isError: false,
  },

  // District
  districts: {
    pending: false,
    listDistrict: null,
    isError: false,
  },
}

const provinceReducer = (state = initState, action) => {

  switch (action.type) {
    case FETCH_PROVINCES_PENDING:
      state.provinces.pending = true;
      break;
    case FETCH_PROVINCES_ERROR:
      state.provinces.pending = false;
      state.provinces.isError = true;
      break;
    case FETCH_PROVINCES_SUCCESS:
      state.provinces.pending = false;
      state.provinces.isError = false;
      state.provinces.listProvince = action.payload.results;
      break;

    case FETCH_DISTRICT_BY_PROVINCE_ID_PENDING:
      state.districts.pending = true;
      break;
    case FETCH_DISTRICT_BY_PROVINCE_ID_ERROR:
      state.districts.pending = false;
      state.districts.isError = true;
      break;
    case FETCH_DISTRICT_BY_PROVINCE_ID_SUCCESS:
      state.districts.pending = false;
      state.districts.isError = false;
      state.districts.listDistrict = action.payload.results;
      break;

    default:
      break;
  }

  return { ...state };
}

export default provinceReducer;