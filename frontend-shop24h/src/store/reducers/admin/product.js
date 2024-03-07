import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,

  // Create Product
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_PENDING,
  CREATE_PRODUCT_SUCCESS,

  // Fetch List Product Featured
  FETCH_PRODUCTS_FEATURED_ERROR,
  FETCH_PRODUCTS_FEATURED_PENDING,
  FETCH_PRODUCTS_FEATURED_SUCCESS
} from '../../constants/admin/product.constant';

const initState = {

  // List Product
  listProduct: {
    pending: false,
    productList: null,
    isError: false
  },

  // Create Order
  createProduct: {
    pending: false,
    product: null,
    isError: false
  },

  // List Product Featured
  listFeaturedProduct: {
    pending: false,
    productFeaturedList: null,
    isError: false,
  },
}

const productAdminReducer = (state = initState, action) => {

  switch (action.type) {

    // Fetch List Product
    case FETCH_PRODUCTS_PENDING:
      state.listProduct.pending = true;
      break;
    case FETCH_PRODUCTS_ERROR:
      state.listProduct.pending = false;
      state.listProduct.isError = true;
      break;
    case FETCH_PRODUCTS_SUCCESS:
      state.listProduct.pending = false;
      state.listProduct.isError = false;
      state.listProduct.productList = action.payload.data;
      break;


    // Create Product
    case CREATE_PRODUCT_PENDING:
      break;
    case CREATE_PRODUCT_ERROR:
      break;
    case CREATE_PRODUCT_SUCCESS:
      state.createProduct.product = action.payload;
      break;

    // Fetch List Product Featured
    case FETCH_PRODUCTS_FEATURED_PENDING:
      state.listFeaturedProduct.pending = true;
      break;
    case FETCH_PRODUCTS_FEATURED_ERROR:
      state.listFeaturedProduct.pending = false;
      state.listFeaturedProduct.isError = true;
      break;
    case FETCH_PRODUCTS_FEATURED_SUCCESS:
      state.listFeaturedProduct.pending = false;
      state.listFeaturedProduct.isError = false;
      state.listFeaturedProduct.productFeaturedList = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default productAdminReducer;