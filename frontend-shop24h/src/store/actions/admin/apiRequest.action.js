import axios from 'axios';
import { notification } from 'antd';

import {
  // Fetch List Product
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,

  // Fetch Product by ID
  FETCH_PRODUCT_BY_ID_ERROR,
  FETCH_PRODUCT_BY_ID_PENDING,
  FETCH_PRODUCT_BY_ID_SUCCESS,

  // Update Product by ID
  UPDATE_PRODUCT_BY_ID_ERROR,
  UPDATE_PRODUCT_BY_ID_PENDING,
  UPDATE_PRODUCT_BY_ID_SUCCESS,

  // Delete Product by ID
  DELETE_PRODUCT_BY_ID_ERROR,
  DELETE_PRODUCT_BY_ID_PENDING,
  DELETE_PRODUCT_BY_ID_SUCCESS,

  // Create Product 
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_PENDING,
  CREATE_PRODUCT_SUCCESS,

  // Fetch List Product Featured
  FETCH_PRODUCTS_FEATURED_ERROR,
  FETCH_PRODUCTS_FEATURED_PENDING,
  FETCH_PRODUCTS_FEATURED_SUCCESS
} from '../../constants/admin/product.constant';
import {
  // Fetch list Category
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,

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

  // Fetch List User
  FETCH_USERS_ERROR,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,

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
  // Fetch List Order
  FETCH_ORDERS_ERROR,
  FETCH_ORDERS_PENDING,
  FETCH_ORDERS_SUCCESS,

  // Fetch Order by ID
  FETCH_ORDER_BY_ID_ERROR,
  FETCH_ORDER_BY_ID_PENDING,
  FETCH_ORDER_BY_ID_SUCCESS,

  // Update Status Order by ID
  UPDATE_STATUS_ORDER_BY_ID_ERROR,
  UPDATE_STATUS_ORDER_BY_ID_PENDING,
  UPDATE_STATUS_ORDER_BY_ID_SUCCESS,

  // Delete Order by ID
  DELETE_ORDER_BY_ID_ERROR,
  DELETE_ORDER_BY_ID_PENDING,
  DELETE_ORDER_BY_ID_SUCCESS,

  // Fetch Total Sales Order
  FETCH_TOTAL_SALES_ORDER_ERROR,
  FETCH_TOTAL_SALES_ORDER_PENDING,
  FETCH_TOTAL_SALES_ORDER_SUCCESS,
} from '../../constants/admin/order.constant';

// URL Link
const API_URL_CATEGORY = 'http://localhost:8080/api/categories';
const API_URL_PRODUCT = 'http://localhost:8080/api/products';
const API_URL_PRODUCT_GALLERY = 'http://localhost:8080/api/products/gallery-images';
const API_URL_AUTH = 'http://localhost:8080/api/auth';
const API_URL_ORDER = 'http://localhost:8080/api/orders';
const API_URL_USER = 'http://localhost:8080/api/users';

// Get all Product
export const getAllProductAction = () => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_PRODUCTS_PENDING
      })

      // Success
      let response = await axios.get(API_URL_PRODUCT);
      return dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      return dispatch({
        type: FETCH_PRODUCTS_ERROR,
        error
      })
    }
  }
}

// Get Product by ID
export const getProductByIdAction = (id) => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_PRODUCT_BY_ID_PENDING
      })

      // Success
      let response = await axios.get(API_URL_PRODUCT + '/' + id);
      return dispatch({
        type: FETCH_PRODUCT_BY_ID_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      return dispatch({
        type: FETCH_PRODUCT_BY_ID_ERROR,
        error
      })
    }
  }
}

// Update Product by ID
export const updateProductByIdAction = (id, product, token) => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: UPDATE_PRODUCT_BY_ID_PENDING
      })

      const imagesProduct = await dispatch(updateImagesProductById(id, product.images, token));

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      const newInfoProduct = {
        name: product.name,
        description: product.description,
        richDescription: product.richDescription,
        image: imagesProduct.images[0],
        brand: product.brand,
        buyPrice: product.buyPrice,
        promotionPrice: product.promotionPrice,
        category: product.category,
        countInStock: product.countInStock,
        rating: product.rating,
        numReviews: product.numReviews,
        isFeatured: product.isFeatured
      }
      let response = await axios.put(API_URL_PRODUCT + '/' + id, newInfoProduct, { headers });

      notification.success({
        message: 'Success',
        description: 'Update Product Success',
      })

      await dispatch(getAllProductAction());

      return dispatch({
        type: UPDATE_PRODUCT_BY_ID_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      notification.error({
        message: 'Error',
        description: error.message
      })

      return dispatch({
        type: UPDATE_PRODUCT_BY_ID_ERROR,
        error
      })
    }
  }
}

// Delete Product by ID
export const deleteProductByIdAction = (id, token) => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: DELETE_PRODUCT_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.delete(API_URL_PRODUCT + '/' + id, { headers });

      notification.success({
        message: 'Success',
        description: 'Delete Product Successfully'
      })

      await dispatch(getAllProductAction());

      return dispatch({
        type: DELETE_PRODUCT_BY_ID_SUCCESS,
        payload: response.data
      })
    } catch (error) {

      // Error
      notification.error({
        message: 'Error',
        description: error.response.data
      })

      return dispatch({
        type: DELETE_PRODUCT_BY_ID_ERROR,
        error
      })
    }
  }
}

// Create Product
export const createProductAction = (product, token) => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: CREATE_PRODUCT_PENDING
      })

      // Success
      if (product.images.length <= 0) {
        return notification.error({
          message: 'Error',
          description: 'No Images added'
        })
      }

      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('richDescription', product.richDescription);
      formData.append('brand', product.brand);
      formData.append('buyPrice', product.buyPrice);
      formData.append('promotionPrice', product.promotionPrice);
      formData.append('category', product.category);
      formData.append('countInStock', product.countInStock);
      formData.append('rating', product.rating);
      formData.append('numReviews', product.numReviews);
      formData.append('isFeatured', product.isFeatured);
      formData.append('image', product.images[0]);

      // Create Product
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };
      let result = await fetch(API_URL_PRODUCT, requestOptions);
      let response = await result.json();

      // Update Images Product by ID
      dispatch(updateImagesProductById(response._id, product.images, token));

      notification.success({
        message: 'Success',
        description: 'Create Product Successfully'
      })

      return dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: response
      })

    } catch (error) {
      // Error
      notification.error({
        message: 'Error',
        description: error.message
      })

      return dispatch({
        type: CREATE_PRODUCT_ERROR,
        error
      })
    }
  }
}

// Update Images Product by ID
export const updateImagesProductById = (id, images, token) => {

  return async (dispatch) => {

    try {

      // Success
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();

      await images.forEach(image => {
        formData.append('images', image);
      });
      // Update Images
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: formData,
      };
      let response = await fetch(API_URL_PRODUCT_GALLERY + '/' + id, requestOptions);
      let result = await response.json();

      return result;

    } catch (error) {

      // Error
      notification.error({
        message: 'Error',
        description: "Can't update images for this product!"
      })
    }
  }
}

// Get all Category
export const getAllCategoryAction = () => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: FETCH_CATEGORIES_PENDING
      })

      // Success
      let response = await axios.get(API_URL_CATEGORY);
      return dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      return dispatch({
        type: FETCH_CATEGORIES_ERROR,
        error
      })
    }
  }
}

// Update Category by ID
export const updateCategoryByIdAction = (id, category, token) => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: UPDATE_CATEGORY_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.put(API_URL_CATEGORY + '/' + id, category, { headers });

      notification.success({
        message: 'Success',
        description: 'Update Category Success',
      })

      await dispatch(getAllCategoryAction());

      return dispatch({
        type: UPDATE_CATEGORY_BY_ID_SUCCESS,
        payload: response.data
      })
    } catch (error) {

      // Error
      notification.error({
        message: 'Error',
        description: error.response.data
      })

      return dispatch({
        type: UPDATE_CATEGORY_BY_ID_ERROR,
        error
      })

    }
  }
}

// Delete Category by ID
export const deleteCategoryByIdAction = (id, token) => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: DELETE_CATEGORY_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.delete(API_URL_CATEGORY + '/' + id, { headers });
      notification.success({
        message: 'Success',
        description: 'Delete Category Successfully'
      })
      await dispatch(getAllCategoryAction());

      return dispatch({
        type: DELETE_CATEGORY_BY_ID_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      notification.error({
        message: 'Error',
        description: error.response.data
      })

      return dispatch({
        type: DELETE_CATEGORY_BY_ID_ERROR,
        error
      })
    }
  }
}

// Get all User
export const getAllUserAction = () => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: FETCH_USERS_PENDING
      })

      // Success
      let response = await axios.get(API_URL_USER);
      return dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data
      })
    } catch (error) {

      // Error
      return dispatch({
        type: FETCH_USERS_ERROR,
        error
      })
    }
  }
}

// Update User by ID
export const updateUserByIdAction = (id, user, token) => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: UPDATE_USER_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.put(API_URL_USER + '/' + id, user, { headers });
      dispatch(getAllUserAction());
      notification.success({
        message: 'Success',
        description: 'Update User Success',
      })
      return dispatch({
        type: UPDATE_USER_BY_ID_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      notification.error({
        message: 'Error',
        description: error.response.data
      })

      return dispatch({
        type: UPDATE_USER_BY_ID_ERROR,
        error
      })
    }

  }
}

// Delete User by ID
export const deleteUserByIdAction = (id, token) => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: DELETE_USER_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.delete(API_URL_USER + '/' + id, { headers });
      notification.success({
        message: 'Success',
        description: 'Delete User Successfully'
      })
      await dispatch(getAllUserAction());

      return dispatch({
        type: DELETE_USER_BY_ID_SUCCESS,
        payload: response.data
      })

    } catch (error) {
      // Error
      notification.error({
        message: 'Error',
        description: error.response.data
      })

      return dispatch({
        type: DELETE_USER_BY_ID_ERROR,
        error
      })
    }
  }
}

// Get all Order
export const getAllOrderAction = (token) => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_ORDERS_PENDING
      })

      // Success
      const headers = {
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.get(API_URL_ORDER, { headers });
      return dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: response.data
      })

    } catch (error) {
      // Error
      return dispatch({
        type: FETCH_ORDERS_ERROR,
        error
      })
    }
  }
}

// Get Order by ID
export const getOrderByIdAction = (id, token) => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_ORDER_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.get(API_URL_ORDER + '/' + id, { headers });
      return dispatch({
        type: FETCH_ORDER_BY_ID_SUCCESS,
        payload: response.data
      })

    } catch (error) {
      // Error
      return dispatch({
        type: FETCH_ORDER_BY_ID_ERROR,
        error
      })
    }
  }
}

// Update Status Order by ID
export const updateStatusOrderByIdAction = (id, order, token) => {

  return async (dispatch) => {

    try {

      // Pending
      await dispatch({
        type: UPDATE_STATUS_ORDER_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.put(API_URL_ORDER + '/' + id, order, { headers });
      notification.success({
        message: 'Success',
        description: 'Update Order Successfully'
      })
      dispatch(getAllOrderAction(token));

      return dispatch({
        type: UPDATE_STATUS_ORDER_BY_ID_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      notification.error({
        message: 'Error',
        description: error.response.data
      })

      return dispatch({
        type: UPDATE_STATUS_ORDER_BY_ID_ERROR,
        error
      })
    }
  }
}

// Delete Order by ID
export const deleteOrderByIdAction = (id, token) => {

  return async (dispatch) => {

    try {
      // Pending 
      await dispatch({
        type: DELETE_ORDER_BY_ID_PENDING
      })

      // Success
      const headers = {
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.delete(API_URL_ORDER + '/' + id, { headers });
      notification.success({
        message: 'Success',
        description: 'Delete Order Successfully'
      })

      dispatch(getAllOrderAction(token));

      return dispatch({
        type: DELETE_ORDER_BY_ID_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      notification.error({
        message: 'Error',
        description: error.response.data
      })

      return dispatch({
        type: DELETE_ORDER_BY_ID_ERROR,
        error
      })
    }
  }
}

// Get Total Sales Order
export const getTotalSalesOrder = (token) => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_TOTAL_SALES_ORDER_PENDING
      })

      // Success
      const headers = {
        'Authorization': `Bearer ${token}`
      }
      let response = await axios.get(API_URL_ORDER + '/get/totalsales', { headers });
      return dispatch({
        type: FETCH_TOTAL_SALES_ORDER_SUCCESS,
        payload: response.data
      })

    } catch (error) {

      // Error
      return dispatch({
        type: FETCH_TOTAL_SALES_ORDER_ERROR,
        error
      })
    }
  }
}

// Get all Product Featured
export const getAllProductFeaturedAction = () => {

  return async (dispatch) => {

    try {
      // Pending
      await dispatch({
        type: FETCH_PRODUCTS_FEATURED_PENDING
      })

      // Success
      let response = await axios.get(API_URL_PRODUCT + "/featured");
      return dispatch({
        type: FETCH_PRODUCTS_FEATURED_SUCCESS,
        payload: response.data
      })

    } catch (error) {
      // Error
      return dispatch({
        type: FETCH_PRODUCTS_FEATURED_ERROR,
        error
      })
    }
  }
}