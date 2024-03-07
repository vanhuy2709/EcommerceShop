import {
  // Handle Change Slide Price
  HANDLE_CHANGE_SLIDE_PRICE,

  // Fetch Product Max Price
  FETCH_PRODUCT_MAX_PRICE_ERROR,
  FETCH_PRODUCT_MAX_PRICE_PENDING,
  FETCH_PRODUCT_MAX_PRICE_SUCCESS,

  // Handle Change Sort Price
  HANDLE_CHANGE_SORT_PRICE,
} from '../../constants/user/price.constant';

const initState = {

  // Filter Price
  filterPrice: {
    pending: false,
    isError: false,
    valuePrice: [0, 0],
    maxPrice: 0,
  },

  // Sort Price
  price: {
    sortValue: ''
  },

}

const priceReducer = (state = initState, action) => {
  switch (action.type) {

    // Fetch Product Max Price
    case FETCH_PRODUCT_MAX_PRICE_PENDING:
      break;
    case FETCH_PRODUCT_MAX_PRICE_ERROR:
      break;
    case FETCH_PRODUCT_MAX_PRICE_SUCCESS:
      state.filterPrice.valuePrice[1] = action.payload.promotionPrice;
      state.filterPrice.maxPrice = action.payload.promotionPrice;
      break;

    // Handle Change Slide Price
    case HANDLE_CHANGE_SLIDE_PRICE:
      state.filterPrice.valuePrice = action.payload;
      break;

    // Handle Change Sort Price
    case HANDLE_CHANGE_SORT_PRICE:
      state.price.sortValue = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default priceReducer;
