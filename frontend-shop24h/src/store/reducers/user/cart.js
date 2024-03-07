import {

  // Handle Add Cart in List Product
  HANDLE_ADD_CART,

  // Handle Add Cart Product by ID
  HANDLE_ADD_CART_PRODUCT_BY_ID,

  // Handle Change Quantity in Cart
  HANDLE_DECREASE_QUANTITY_PRODUCT_IN_CART,
  HANDLE_INCREASE_QUANTITY_PRODUCT_IN_CART,

  // Handle Remove Product in Cart
  HANDLE_REMOVE_PRODUCT_IN_CART
} from '../../constants/user/cart.constant';

const storageListCart = JSON.parse(localStorage.getItem('listCart'));

const initState = {
  listCart: storageListCart ? storageListCart : [],
  subTotal: storageListCart ? storageListCart.reduce((sum, item) => {
    return sum + (item.promotionPrice * item.quantity)
  }, 0) : 0,
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {

    // Handle Add cart in List Product
    case HANDLE_ADD_CART:
      const itemIndex = state.listCart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.listCart[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 }
        state.listCart.push(tempProduct);
      }

      localStorage.setItem('listCart', JSON.stringify(state.listCart));

      // Calculate Subtotal
      state.subTotal = state.listCart.reduce((sum, item) => sum + (item.promotionPrice * item.quantity), 0)
      break;

    // Handle Add cart in Product Detail by ID
    case HANDLE_ADD_CART_PRODUCT_BY_ID:
      const index = state.listCart.findIndex(
        (item) => item._id === action.payload._id
      );

      if (index >= 0) {
        state.listCart[index].quantity = action.payload.quantity;
      } else {
        state.listCart.push(action.payload);
      }
      localStorage.setItem('listCart', JSON.stringify(state.listCart));

      // Calculate Subtotal
      state.subTotal = state.listCart.reduce((sum, item) => sum + (item.promotionPrice * item.quantity), 0)
      break;

    // Handle Increase Quantity in Cart
    case HANDLE_INCREASE_QUANTITY_PRODUCT_IN_CART:
      const indexItemInc = state.listCart.findIndex(
        (item) => item._id === action.payload._id
      )

      if (indexItemInc >= 0) {
        state.listCart[indexItemInc].quantity += 1;
      }

      localStorage.setItem('listCart', JSON.stringify(state.listCart));

      // Calculate Subtotal
      state.subTotal = state.listCart.reduce((sum, item) => sum + (item.promotionPrice * item.quantity), 0)
      break;

    // Handle Decrease Quantity in Cart
    case HANDLE_DECREASE_QUANTITY_PRODUCT_IN_CART:
      const indexItemDec = state.listCart.findIndex(
        (item) => item._id === action.payload._id
      )

      if (indexItemDec >= 0) {
        if (state.listCart[indexItemDec].quantity > 1) {
          state.listCart[indexItemDec].quantity -= 1;
        }
      }
      localStorage.setItem('listCart', JSON.stringify(state.listCart));

      // Calculate Subtotal
      state.subTotal = state.listCart.reduce((sum, item) => sum + (item.promotionPrice * item.quantity), 0)
      break;

    // Handle Remove Product in Cart
    case HANDLE_REMOVE_PRODUCT_IN_CART:
      const indexItemRemove = state.listCart.findIndex(
        (item) => item._id === action.payload._id
      )

      // console.log(state.listCart[indexItemRemove]);
      if (indexItemRemove >= 0) {
        state.listCart.splice(indexItemRemove, 1);
      }

      localStorage.setItem('listCart', JSON.stringify(state.listCart));

      // Calculate Subtotal
      state.subTotal = state.listCart.reduce((sum, item) => sum + (item.promotionPrice * item.quantity), 0)
      break;

    default:
      break;
  }

  return { ...state };
}

export default cartReducer;