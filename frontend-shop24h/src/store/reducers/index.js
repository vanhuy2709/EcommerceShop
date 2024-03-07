import { combineReducers } from "redux";

// User Reducer
import categoryReducer from './user/category';
import productReducer from "./user/product";
import priceReducer from './user/price';
import ratingReducer from "./user/rating";
import cartReducer from "./user/cart";
import authReducer from "./user/auth";
import orderReducer from "./user/order";
import userReducer from './user/user';

// Admin Reducer
import productAdminReducer from "./admin/product";
import categoryAdminReducer from "./admin/category";
import modalAdminReducer from "./admin/modal";
import userAdminReducer from "./admin/user";
import orderAdminReducer from "./admin/order";


const rootReducer = combineReducers({
  categoryReducer,
  productReducer,
  priceReducer,
  ratingReducer,
  cartReducer,
  authReducer,
  orderReducer,
  userReducer,
  productAdminReducer,
  categoryAdminReducer,
  modalAdminReducer,
  userAdminReducer,
  orderAdminReducer
})

export default rootReducer;