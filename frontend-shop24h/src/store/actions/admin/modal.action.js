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
} from '../../constants/admin/product.constant';

import {
  HANDLE_CHANGE_COLOR_CATEGORY,
  HANDLE_CHANGE_IMAGE_CATEGORY,
  HANDLE_CHANGE_NAME_CATEGORY
} from '../../constants/admin/category.constant';

import {
  HANDLE_CHANGE_ADDRESS_USER,
  HANDLE_CHANGE_NAME_USER,
  HANDLE_CHANGE_EMAIL_USER,
  HANDLE_CHANGE_CITY_USER,
  HANDLE_CHANGE_COUNTRY_USER,
  HANDLE_CHANGE_PHONE_USER,
  HANDLE_CHANGE_ROLE_USER
} from '../../constants/admin/user.constant';

import { HANDLE_CHANGE_STATUS_ORDER } from '../../constants/admin/order.constant';

import {
  // Open & Close Modal Update Product
  HANDLE_CLOSE_MODAL_UPDATE_PRODUCT,
  HANDLE_OPEN_MODAL_UPDATE_PRODUCT,

  // Open & Close Modal Delete Product
  HANDLE_CLOSE_MODAL_DELETE_PRODUCT,
  HANDLE_OPEN_MODAL_DELETE_PRODUCT,

  // Open & Close Modal Update Category
  HANDLE_CLOSE_MODAL_UPDATE_CATEGORY,
  HANDLE_OPEN_MODAL_UPDATE_CATEGORY,

  // Open & Close Modal Delete Category
  HANDLE_CLOSE_MODAL_DELETE_CATEGORY,
  HANDLE_OPEN_MODAL_DELETE_CATEGORY,

  // Open & Close Modal Update User
  HANDLE_CLOSE_MODAL_UPDATE_USER,
  HANDLE_OPEN_MODAL_UPDATE_USER,

  // Open & Close Modal Delete User
  HANDLE_CLOSE_MODAL_DELETE_USER,
  HANDLE_OPEN_MODAL_DELETE_USER,

  // Open & Close Modal Update Order
  HANDLE_CLOSE_MODAL_UPDATE_ORDER,
  HANDLE_OPEN_MODAL_UPDATE_ORDER,

  // Open & Close Modal Delete Order
  HANDLE_CLOSE_MODAL_DELETE_ORDER,
  HANDLE_OPEN_MODAL_DELETE_ORDER
} from '../../constants/admin/modal.constant';

// Handle Open & Close Modal Update Product
export const handleOpenModalUpdateProductAction = (product) => {

  return {
    type: HANDLE_OPEN_MODAL_UPDATE_PRODUCT,
    payload: product
  }
}
export const handleCloseModalUpdateProductAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_UPDATE_PRODUCT
  }
}

// Handle Open & Close Modal Delete Product
export const handleOpenModalDeleteProductAction = (id) => {

  return {
    type: HANDLE_OPEN_MODAL_DELETE_PRODUCT,
    payload: id
  }
}
export const handleCloseModalDeleteProductAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_DELETE_PRODUCT
  }
}

// Handle Open & Close Modal Update Category
export const handleOpenModalUpdateCategoryAction = (category) => {

  return {
    type: HANDLE_OPEN_MODAL_UPDATE_CATEGORY,
    payload: category
  }
}
export const handleCloseModalUpdateCategoryAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_UPDATE_CATEGORY,
  }
}

// Handle Open & Close Modal Delete Category
export const handleOpenModalDeleteCategoryAction = (id) => {

  return {
    type: HANDLE_OPEN_MODAL_DELETE_CATEGORY,
    payload: id
  }
}
export const handleCloseModalDeleteCategoryAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_DELETE_CATEGORY,
  }
}

// Handle Open & Close Modal Update User
export const handleOpenModalUpdateUserAction = (user) => {

  return {
    type: HANDLE_OPEN_MODAL_UPDATE_USER,
    payload: user
  }
}
export const handleCloseModalUpdateUserAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_UPDATE_USER,
  }
}

// Handle Open & Close Modal Delete User
export const handleOpenModalDeleteUserAction = (id) => {

  return {
    type: HANDLE_OPEN_MODAL_DELETE_USER,
    payload: id
  }
}
export const handleCloseModalDeleteUserAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_DELETE_USER,
  }
}

// Handle Open & Close Modal Update Order
export const handleOpenModalUpdateOrderAction = (order) => {

  return {
    type: HANDLE_OPEN_MODAL_UPDATE_ORDER,
    payload: order
  }
}
export const handleCloseModalUpdateOrderAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_UPDATE_ORDER,
  }
}

// Handle Open & Close Modal Delete Order
export const handleOpenModalDeleteOrderAction = (id) => {

  return {
    type: HANDLE_OPEN_MODAL_DELETE_ORDER,
    payload: id
  }
}
export const handleCloseModalDeleteOrderAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_DELETE_ORDER,
  }
}

// Handle Change info Product (Update)
export const handleChangeNameProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_NAME_PRODUCT,
    payload: value
  }
}
export const handleChangeDescProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_DESC_PRODUCT,
    payload: value
  }
}
export const handleChangeRichDescProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_RICH_DESC_PRODUCT,
    payload: value
  }
}
export const handleChangeImageProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_IMAGE_PRODUCT,
    payload: value
  }
}
export const handleChangeBrandProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_BRAND_PRODUCT,
    payload: value
  }
}
export const handleChangeBuyPriceProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_BUY_PRICE_PRODUCT,
    payload: value
  }
}
export const handleChangePromotionPriceProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_PROMOTION_PRICE_PRODUCT,
    payload: value
  }
}
export const handleChangeCategoryProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_CATEGORY_PRODUCT,
    payload: value
  }
}
export const handleChangeCountInStockProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_COUNT_IN_STOCK_PRODUCT,
    payload: value
  }
}
export const handleChangeRatingProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_RATING_PRODUCT,
    payload: value
  }
}
export const handleChangeReviewsProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_REVIEWS_PRODUCT,
    payload: value
  }
}
export const handleChangeFeaturedProductAction = (value) => {

  return {
    type: HANDLE_CHANGE_FEATURED_PRODUCT,
    payload: value
  }
}

// Handle Change info Categories (Update)
export const handleChangeNameCategoryAction = (value) => {

  return {
    type: HANDLE_CHANGE_NAME_CATEGORY,
    payload: value
  }
}
export const handleChangeColorCategoryAction = (value) => {

  return {
    type: HANDLE_CHANGE_COLOR_CATEGORY,
    payload: value
  }
}
export const handleChangeImageCategoryAction = (value) => {

  return {
    type: HANDLE_CHANGE_IMAGE_CATEGORY,
    payload: value
  }
}

// Handle Change info User (Update)
export const handleChangeNameUserAction = (value) => {

  return {
    type: HANDLE_CHANGE_NAME_USER,
    payload: value
  }
}
export const handleChangeEmailUserAction = (value) => {

  return {
    type: HANDLE_CHANGE_EMAIL_USER,
    payload: value
  }
}
export const handleChangePhoneUserAction = (value) => {

  return {
    type: HANDLE_CHANGE_PHONE_USER,
    payload: value
  }
}
export const handleChangeRoleUserAction = (value) => {

  return {
    type: HANDLE_CHANGE_ROLE_USER,
    payload: value
  }
}
export const handleChangeAddressUserAction = (value) => {

  return {
    type: HANDLE_CHANGE_ADDRESS_USER,
    payload: value
  }
}
export const handleChangeCityUserAction = (value) => {

  return {
    type: HANDLE_CHANGE_CITY_USER,
    payload: value
  }
}
export const handleChangeCountryUserAction = (value) => {

  return {
    type: HANDLE_CHANGE_COUNTRY_USER,
    payload: value
  }
}

// Handle Change Status Order (Update)
export const handleChangeStatusOrderAction = (value) => {

  return {
    type: HANDLE_CHANGE_STATUS_ORDER,
    payload: value
  }
}