import {
  // Fetch Product is Featured
  FETCH_PRODUCTS_FEATURED_ERROR,
  FETCH_PRODUCTS_FEATURED_PENDING,
  FETCH_PRODUCTS_FEATURED_SUCCESS,

  // Fetch list Product
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,

  // Fetch Filter Product
  FETCH_FILTER_PRODUCTS_ERROR,
  FETCH_FILTER_PRODUCTS_PENDING,
  FETCH_FILTER_PRODUCTS_SUCCESS,

  // Fetch Product by ID
  FETCH_PRODUCT_BY_ID_ERROR,
  FETCH_PRODUCT_BY_ID_PENDING,
  FETCH_PRODUCT_BY_ID_SUCCESS,

  // Handle Change Quantity Product by ID
  HANDLE_INCREASE_QUANTITY_PRODUCT_BY_ID,
  HANDLE_DECREASE_QUANTITY_PRODUCT_BY_ID,
  HANDLE_CHANGE_QUANTITY_PRODUCT_BY_ID
} from '../../constants/user/product.constant';

const initState = {

  // List Product Featured
  listProductFeatured: {
    pending: false,
    productFeaturedList: null,
    isError: false
  },

  // List Product
  listProduct: {
    pending: false,
    productList: null,
    isError: false
  },

  // Product by ID
  productById: {
    pending: false,
    product: null,
    isError: false
  }
}

const productReducer = (state = initState, action) => {
  switch (action.type) {

    // Fetch Products Featured List
    case FETCH_PRODUCTS_FEATURED_PENDING:
      state.listProductFeatured.pending = true;
      break;
    case FETCH_PRODUCTS_FEATURED_ERROR:
      state.listProductFeatured.pending = false;
      state.listProductFeatured.isError = true;
      break;
    case FETCH_PRODUCTS_FEATURED_SUCCESS:
      state.listProductFeatured.pending = false;
      state.listProductFeatured.isError = false;
      state.listProductFeatured.productFeaturedList = action.payload
      break;

    // Fetch Products List
    case FETCH_PRODUCTS_PENDING:
      state.listProduct.pending = true;
      break;
    case FETCH_PRODUCTS_ERROR:
      state.listProduct.pending = false;
      state.listProduct.isError = true;
      break
    case FETCH_PRODUCTS_SUCCESS:
      state.listProduct.pending = false;
      state.listProduct.isError = false;
      state.listProduct.productList = action.payload;
      break

    // Fetch Filter Product
    case FETCH_FILTER_PRODUCTS_PENDING:
      state.listProduct.pending = true;
      break;
    case FETCH_FILTER_PRODUCTS_ERROR:
      state.listProduct.pending = false;
      state.listProduct.isError = true;
      break;
    case FETCH_FILTER_PRODUCTS_SUCCESS:
      state.listProduct.pending = false;
      state.listProduct.isError = false;
      state.listProduct.productList = action.payload;
      break;

    // Fetch Product by ID
    case FETCH_PRODUCT_BY_ID_PENDING:
      state.productById.pending = true;
      state.productById.isError = false;
      state.productById.product = null;
      break;
    case FETCH_PRODUCT_BY_ID_ERROR:
      state.productById.pending = false;
      state.productById.isError = true;
      state.productById.product = null;
      break;
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      state.productById.pending = false;
      state.productById.isError = false;
      state.productById.product = { ...action.payload, quantity: 1 };
      break;


    // Handle Change Quantity Product by ID
    case HANDLE_INCREASE_QUANTITY_PRODUCT_BY_ID:
      if (state.productById.product.quantity < state.productById.product.countInStock) {
        state.productById.product.quantity += 1;
      } else {
        state.productById.product.quantity = state.productById.product.countInStock;
      }
      break;
    case HANDLE_DECREASE_QUANTITY_PRODUCT_BY_ID:
      if (state.productById.product.quantity > 1) {
        state.productById.product.quantity -= 1;
      } else {
        state.productById.product.quantity = 1;
      }
      break;
    case HANDLE_CHANGE_QUANTITY_PRODUCT_BY_ID:
      if (action.payload <= state.productById.product.countInStock) {
        state.productById.product.quantity = action.payload;
      } else {
        state.productById.product.quantity = state.productById.product.countInStock;
      }
      break;

    default:
      break;
  }

  return { ...state };
}

export default productReducer;