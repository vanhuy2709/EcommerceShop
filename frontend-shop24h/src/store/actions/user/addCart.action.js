import {
  // Handle Add Cart in List Product
  HANDLE_ADD_CART,

  // Handle Add Cart Product by ID
  HANDLE_ADD_CART_PRODUCT_BY_ID,

  // Handle Remove Product in Cart
  HANDLE_REMOVE_PRODUCT_IN_CART
} from '../../constants/user/cart.constant';

// Handle Add Cart in List Product
export const handleAddCartAction = (product) => {

  return {
    type: HANDLE_ADD_CART,
    payload: product
  }
}

// Handle Add Cart in Product Detail by ID
export const handleAddCartProductById = (product) => {

  return {
    type: HANDLE_ADD_CART_PRODUCT_BY_ID,
    payload: product
  }
}

// Handle Remove Product in Cart
export const handleRemoveProductInCart = (product) => {

  return {
    type: HANDLE_REMOVE_PRODUCT_IN_CART,
    payload: product
  }
}