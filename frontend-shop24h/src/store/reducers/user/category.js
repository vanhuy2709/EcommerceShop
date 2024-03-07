// Import Constants
import {
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
  HANDLE_CHECKED_CATEGORIES
} from '../../constants/user/category.constant';

const initState = {

  // List Category
  listCategory: {
    pending: false,
    categoryList: null,
    isError: false,
  },

  // Filter Categories (checked)
  filterCategories: {
    categoryListChecked: []
  }

}

const categoryReducer = (state = initState, action) => {
  switch (action.type) {

    // Fetch Category List
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

    // Filter Categories
    case HANDLE_CHECKED_CATEGORIES:
      state.filterCategories.categoryListChecked = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default categoryReducer;