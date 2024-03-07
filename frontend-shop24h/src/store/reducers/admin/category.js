import {
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS
} from '../../constants/admin/category.constant';

const initState = {

  // List Category
  listCategory: {
    pending: false,
    categoryList: null,
    isError: false,
  },
}

const categoryAdminReducer = (state = initState, action) => {
  switch (action.type) {

    // Fetch List Categories
    case FETCH_CATEGORIES_PENDING:
      state.listCategory.pending = true;
      break;
    case FETCH_CATEGORIES_ERROR:
      state.listCategory.pending = false;
      state.listCategory.isError = true;
      break;
    case FETCH_CATEGORIES_SUCCESS:
      state.listCategory.pending = false;
      state.listCategory.isError = false;
      state.listCategory.categoryList = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default categoryAdminReducer;