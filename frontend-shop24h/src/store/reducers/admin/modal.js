
import {
  // Handle Change info Product (Update)
  HANDLE_CHANGE_NAME_PRODUCT,
  HANDLE_CHANGE_DESC_PRODUCT,
  HANDLE_CHANGE_RICH_DESC_PRODUCT,
  HANDLE_CHANGE_IMAGE_PRODUCT,
  HANDLE_CHANGE_BRAND_PRODUCT,
  HANDLE_CHANGE_BUY_PRICE_PRODUCT,
  HANDLE_CHANGE_PROMOTION_PRICE_PRODUCT,
  HANDLE_CHANGE_CATEGORY_PRODUCT,
  HANDLE_CHANGE_COUNT_IN_STOCK_PRODUCT,
  HANDLE_CHANGE_RATING_PRODUCT,
  HANDLE_CHANGE_REVIEWS_PRODUCT,
  HANDLE_CHANGE_FEATURED_PRODUCT,

  // Update Product by ID
  UPDATE_PRODUCT_BY_ID_ERROR,
  UPDATE_PRODUCT_BY_ID_PENDING,
  UPDATE_PRODUCT_BY_ID_SUCCESS,

  // Delete Product by ID
  DELETE_PRODUCT_BY_ID_ERROR,
  DELETE_PRODUCT_BY_ID_PENDING,
  DELETE_PRODUCT_BY_ID_SUCCESS
} from '../../constants/admin/product.constant';

import {
  // Handle Change info Category
  HANDLE_CHANGE_COLOR_CATEGORY,
  HANDLE_CHANGE_IMAGE_CATEGORY,
  HANDLE_CHANGE_NAME_CATEGORY,

  // Update Category by ID
  UPDATE_CATEGORY_BY_ID_ERROR,
  UPDATE_CATEGORY_BY_ID_PENDING,
  UPDATE_CATEGORY_BY_ID_SUCCESS,

  // Delete Category by ID
  DELETE_CATEGORY_BY_ID_ERROR,
  DELETE_CATEGORY_BY_ID_PENDING,
  DELETE_CATEGORY_BY_ID_SUCCESS,
} from '../../constants/admin/category.constant';

import {

  // Handle Change info User
  HANDLE_CHANGE_ADDRESS_USER,
  HANDLE_CHANGE_CITY_USER,
  HANDLE_CHANGE_COUNTRY_USER,
  HANDLE_CHANGE_EMAIL_USER,
  HANDLE_CHANGE_NAME_USER,
  HANDLE_CHANGE_PHONE_USER,
  HANDLE_CHANGE_ROLE_USER,

  // Update User by ID
  UPDATE_USER_BY_ID_ERROR,
  UPDATE_USER_BY_ID_PENDING,
  UPDATE_USER_BY_ID_SUCCESS,

  // Delete User by ID
  DELETE_USER_BY_ID_ERROR,
  DELETE_USER_BY_ID_PENDING,
  DELETE_USER_BY_ID_SUCCESS,
} from '../../constants/admin/user.constant';

import {
  HANDLE_CHANGE_STATUS_ORDER,
  UPDATE_STATUS_ORDER_BY_ID_ERROR,
  UPDATE_STATUS_ORDER_BY_ID_PENDING,
  UPDATE_STATUS_ORDER_BY_ID_SUCCESS
} from '../../constants/admin/order.constant';

import {
  // Handle Open & Close Modal Update Product
  HANDLE_CLOSE_MODAL_UPDATE_PRODUCT,
  HANDLE_OPEN_MODAL_UPDATE_PRODUCT,

  // Handle Open & Close Modal Delete Product
  HANDLE_CLOSE_MODAL_DELETE_PRODUCT,
  HANDLE_OPEN_MODAL_DELETE_PRODUCT,

  // Handle Open & Close Modal Update Category
  HANDLE_CLOSE_MODAL_UPDATE_CATEGORY,
  HANDLE_OPEN_MODAL_UPDATE_CATEGORY,

  // Handle Open & Close Modal Delete Category
  HANDLE_CLOSE_MODAL_DELETE_CATEGORY,
  HANDLE_OPEN_MODAL_DELETE_CATEGORY,

  // Handle Open & Close Modal Update User
  HANDLE_CLOSE_MODAL_UPDATE_USER,
  HANDLE_OPEN_MODAL_UPDATE_USER,

  // Handle Open & Close Modal Delete User
  HANDLE_CLOSE_MODAL_DELETE_USER,
  HANDLE_OPEN_MODAL_DELETE_USER,

  // Handle Open & Close Modal Update Order
  HANDLE_CLOSE_MODAL_UPDATE_ORDER,
  HANDLE_OPEN_MODAL_UPDATE_ORDER,

  // Handle Open & Close Modal Delete Order
  HANDLE_CLOSE_MODAL_DELETE_ORDER,
  HANDLE_OPEN_MODAL_DELETE_ORDER
} from '../../constants/admin/modal.constant';

const initState = {

  // Update Product
  updateModal: {
    open: false,
    id: '',
    name: '',
    description: '',
    richDescription: '',
    images: '',
    image: '',
    brand: '',
    buyPrice: '',
    promotionPrice: '',
    category: '',
    countInStock: '',
    rating: '',
    numReviews: '',
    isFeatured: '',
  },

  // Delete Product
  deleteModal: {
    open: false,
    id: ''
  },

  // Update Category
  updateModalCategory: {
    open: false,
    id: '',
    name: '',
    icon: '',
    color: '',
  },

  // Delete Category
  deleteModalCategory: {
    open: false,
    id: ''
  },

  // Update User
  updateModalUser: {
    open: false,
    id: '',
    name: '',
    email: '',
    phone: '',
    isAdmin: '',
    address: '',
    city: '',
    country: '',
  },

  // Delete User
  deleteModalUser: {
    open: false,
    id: '',
  },

  // Update Order
  updateModalOrder: {
    open: false,
    status: '',
    id: ''
  },

  // Delete Order
  deleteModalOrder: {
    open: '',
    id: ''
  }
}

const modalAdminReducer = (state = initState, action) => {

  switch (action.type) {

    // Handle Open & Close Modal Update Product
    case HANDLE_OPEN_MODAL_UPDATE_PRODUCT:
      state.updateModal.open = true;

      // Show info
      state.updateModal.id = action.payload._id;
      state.updateModal.name = action.payload.name;
      state.updateModal.description = action.payload.description;
      state.updateModal.richDescription = action.payload.richDescription;
      state.updateModal.image = action.payload.image;
      state.updateModal.images = action.payload.images;
      state.updateModal.brand = action.payload.brand;
      state.updateModal.buyPrice = action.payload.buyPrice;
      state.updateModal.promotionPrice = action.payload.promotionPrice;
      state.updateModal.category = action.payload.category._id;
      state.updateModal.countInStock = action.payload.countInStock;
      state.updateModal.rating = action.payload.rating;
      state.updateModal.numReviews = action.payload.numReviews;
      state.updateModal.isFeatured = action.payload.isFeatured;
      break;
    case HANDLE_CLOSE_MODAL_UPDATE_PRODUCT:
      state.updateModal.open = false;

      // Hide info
      state.updateModal.id = '';
      state.updateModal.name = '';
      state.updateModal.description = '';
      state.updateModal.richDescription = '';
      state.updateModal.image = '';
      state.updateModal.images = '';
      state.updateModal.brand = '';
      state.updateModal.buyPrice = '';
      state.updateModal.promotionPrice = '';
      state.updateModal.category = '';
      state.updateModal.countInStock = '';
      state.updateModal.rating = '';
      state.updateModal.numReviews = '';
      state.updateModal.isFeatured = '';
      break;

    // Handle Change Info Product (Update)
    case HANDLE_CHANGE_NAME_PRODUCT:
      state.updateModal.name = action.payload;
      break;
    case HANDLE_CHANGE_DESC_PRODUCT:
      state.updateModal.description = action.payload;
      break;
    case HANDLE_CHANGE_RICH_DESC_PRODUCT:
      state.updateModal.richDescription = action.payload;
      break;
    case HANDLE_CHANGE_IMAGE_PRODUCT:
      state.updateModal.image = action.payload;
      break;
    case HANDLE_CHANGE_BRAND_PRODUCT:
      state.updateModal.brand = action.payload;
      break;
    case HANDLE_CHANGE_BUY_PRICE_PRODUCT:
      state.updateModal.buyPrice = action.payload;
      break;
    case HANDLE_CHANGE_PROMOTION_PRICE_PRODUCT:
      state.updateModal.promotionPrice = action.payload;
      break;
    case HANDLE_CHANGE_CATEGORY_PRODUCT:
      state.updateModal.category = action.payload;
      break;
    case HANDLE_CHANGE_COUNT_IN_STOCK_PRODUCT:
      state.updateModal.countInStock = action.payload;
      break;
    case HANDLE_CHANGE_RATING_PRODUCT:
      state.updateModal.rating = action.payload;
      break;
    case HANDLE_CHANGE_REVIEWS_PRODUCT:
      state.updateModal.numReviews = action.payload;
      break;
    case HANDLE_CHANGE_FEATURED_PRODUCT:
      state.updateModal.isFeatured = action.payload;
      break;

    // Update Product by ID
    case UPDATE_PRODUCT_BY_ID_PENDING:
      break;
    case UPDATE_PRODUCT_BY_ID_ERROR:
      break;
    case UPDATE_PRODUCT_BY_ID_SUCCESS:
      // Hide Update Modal
      state.updateModal.open = false;
      break;

    // Handle Open & Close Modal Delete Product
    case HANDLE_OPEN_MODAL_DELETE_PRODUCT:
      state.deleteModal.open = true;
      state.deleteModal.id = action.payload;
      break;
    case HANDLE_CLOSE_MODAL_DELETE_PRODUCT:
      state.deleteModal.open = false;
      state.deleteModal.id = '';
      break;

    // Delete Product by ID
    case DELETE_PRODUCT_BY_ID_PENDING:
      break;
    case DELETE_PRODUCT_BY_ID_ERROR:
      break;
    case DELETE_PRODUCT_BY_ID_SUCCESS:
      // Hide Delete Modal
      state.deleteModal.open = false;
      break;

    // Handle Open & Close Modal Update Category
    case HANDLE_OPEN_MODAL_UPDATE_CATEGORY:
      state.updateModalCategory.open = true;
      state.updateModalCategory.id = action.payload._id;
      state.updateModalCategory.name = action.payload.name;
      state.updateModalCategory.icon = action.payload.icon;
      state.updateModalCategory.color = action.payload.color;
      break;
    case HANDLE_CLOSE_MODAL_UPDATE_CATEGORY:
      state.updateModalCategory.open = false;
      state.updateModalCategory.id = '';
      state.updateModalCategory.name = '';
      state.updateModalCategory.icon = '';
      state.updateModalCategory.color = '';
      break;

    // Handle Change info Category (Update)
    case HANDLE_CHANGE_NAME_CATEGORY:
      state.updateModalCategory.name = action.payload;
      break;
    case HANDLE_CHANGE_IMAGE_CATEGORY:
      state.updateModalCategory.icon = action.payload;
      break;
    case HANDLE_CHANGE_COLOR_CATEGORY:
      state.updateModalCategory.color = action.payload;
      break;

    // Update Category by ID
    case UPDATE_CATEGORY_BY_ID_PENDING:
      break;
    case UPDATE_CATEGORY_BY_ID_ERROR:
      break;
    case UPDATE_CATEGORY_BY_ID_SUCCESS:
      state.updateModalCategory.open = false;
      break;

    // Handle Open & Close Modal Delete Category
    case HANDLE_OPEN_MODAL_DELETE_CATEGORY:
      state.deleteModalCategory.open = true;
      state.deleteModalCategory.id = action.payload._id;
      break;
    case HANDLE_CLOSE_MODAL_DELETE_CATEGORY:
      state.deleteModalCategory.open = false;
      state.deleteModalCategory.id = '';
      break;

    // Delete Category by ID
    case DELETE_CATEGORY_BY_ID_PENDING:
      break;
    case DELETE_CATEGORY_BY_ID_ERROR:
      break;
    case DELETE_CATEGORY_BY_ID_SUCCESS:
      state.deleteModalCategory.open = false;
      break;

    // Handle Open & Close Modal Update User
    case HANDLE_OPEN_MODAL_UPDATE_USER:
      state.updateModalUser.open = true;
      state.updateModalUser.id = action.payload._id;
      state.updateModalUser.name = action.payload.name;
      state.updateModalUser.email = action.payload.email;
      state.updateModalUser.phone = action.payload.phone;
      state.updateModalUser.isAdmin = action.payload.isAdmin;
      state.updateModalUser.address = action.payload.address;
      state.updateModalUser.city = action.payload.city;
      state.updateModalUser.country = action.payload.country;
      break;
    case HANDLE_CLOSE_MODAL_UPDATE_USER:
      state.updateModalUser.open = false;
      state.updateModalUser.id = '';
      state.updateModalUser.name = '';
      state.updateModalUser.email = '';
      state.updateModalUser.phone = '';
      state.updateModalUser.isAdmin = '';
      state.updateModalUser.address = '';
      state.updateModalUser.city = '';
      state.updateModalUser.country = '';
      break;


    // Handle change info User (Update)
    case HANDLE_CHANGE_NAME_USER:
      state.updateModalUser.name = action.payload;
      break;
    case HANDLE_CHANGE_EMAIL_USER:
      state.updateModalUser.email = action.payload;
      break;
    case HANDLE_CHANGE_PHONE_USER:
      state.updateModalUser.phone = action.payload;
      break;
    case HANDLE_CHANGE_ROLE_USER:
      state.updateModalUser.isAdmin = action.payload;
      break;
    case HANDLE_CHANGE_ADDRESS_USER:
      state.updateModalUser.address = action.payload;
      break;
    case HANDLE_CHANGE_CITY_USER:
      state.updateModalUser.city = action.payload;
      break;
    case HANDLE_CHANGE_COUNTRY_USER:
      state.updateModalUser.country = action.payload;
      break;

    // Update User by ID
    case UPDATE_USER_BY_ID_PENDING:
      break;
    case UPDATE_USER_BY_ID_ERROR:
      break;
    case UPDATE_USER_BY_ID_SUCCESS:
      state.updateModalUser.open = false;
      break;

    // Handle Open & Close Modal Delete User
    case HANDLE_OPEN_MODAL_DELETE_USER:
      state.deleteModalUser.open = true;
      state.deleteModalUser.id = action.payload;
      break;
    case HANDLE_CLOSE_MODAL_DELETE_USER:
      state.deleteModalUser.open = false;
      state.deleteModalUser.id = '';
      break;


    // Delete User by ID
    case DELETE_USER_BY_ID_PENDING:
      break;
    case DELETE_USER_BY_ID_ERROR:
      break;
    case DELETE_USER_BY_ID_SUCCESS:
      state.deleteModalUser.open = false;
      break;


    // Handle Open & Close Modal Update Order
    case HANDLE_OPEN_MODAL_UPDATE_ORDER:
      state.updateModalOrder.open = true;
      state.updateModalOrder.id = action.payload._id;
      state.updateModalOrder.status = action.payload.status;
      break;
    case HANDLE_CLOSE_MODAL_UPDATE_ORDER:
      state.updateModalOrder.open = false;
      state.updateModalOrder.id = '';
      state.updateModalOrder.status = '';
      break;

    // Handle Change Status Order
    case HANDLE_CHANGE_STATUS_ORDER:
      state.updateModalOrder.status = action.payload;
      break;

    // Update Order by ID
    case UPDATE_STATUS_ORDER_BY_ID_PENDING:
      break;
    case UPDATE_STATUS_ORDER_BY_ID_ERROR:
      break;
    case UPDATE_STATUS_ORDER_BY_ID_SUCCESS:
      state.updateModalOrder.open = false;
      break;


    // Handle Open & Close Modal Delete Order
    case HANDLE_OPEN_MODAL_DELETE_ORDER:
      state.deleteModalOrder.open = true;
      state.deleteModalOrder.id = action.payload;
      break;
    case HANDLE_CLOSE_MODAL_DELETE_ORDER:
      state.deleteModalOrder.open = false;
      state.deleteModalOrder.id = '';
      break;


    default:
      break;
  }

  return { ...state };
}

export default modalAdminReducer;