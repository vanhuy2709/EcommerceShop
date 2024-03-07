import {
  HANDLE_INCREASE_QUANTITY_PRODUCT_BY_ID,
  HANDLE_DECREASE_QUANTITY_PRODUCT_BY_ID,
  HANDLE_CHANGE_QUANTITY_PRODUCT_BY_ID,
} from '../../constants/user/product.constant';
import {
  HANDLE_INCREASE_QUANTITY_PRODUCT_IN_CART,
  HANDLE_DECREASE_QUANTITY_PRODUCT_IN_CART
} from '../../constants/user/cart.constant';

// Handle Increase Quantity Product by ID
export const handleIncreaseQuantityProductById = () => {

  return {
    type: HANDLE_INCREASE_QUANTITY_PRODUCT_BY_ID
  }
}

// Handle Decrease Quantity Product by ID
export const handleDecreaseQuantityProductById = () => {

  return {
    type: HANDLE_DECREASE_QUANTITY_PRODUCT_BY_ID
  }
}

// Handle Change Quantity Product by ID (Input[number])
export const handleChangeQuantityProductById = (value) => {

  return {
    type: HANDLE_CHANGE_QUANTITY_PRODUCT_BY_ID,
    payload: +value
  }
}

// Handle Increase Quantity Product in Cart
export const handleIncreaseQuantityProductInCart = (product) => {

  return {
    type: HANDLE_INCREASE_QUANTITY_PRODUCT_IN_CART,
    payload: product
  }
}

// Handle Decrease Quantity Product in Cart
export const handleDecreaseQuantityProductInCart = (product) => {

  return {
    type: HANDLE_DECREASE_QUANTITY_PRODUCT_IN_CART,
    payload: product
  }
}