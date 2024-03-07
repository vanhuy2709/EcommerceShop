import { SatelliteAlt } from '@mui/icons-material';
import {
  // Fetch List Order
  FETCH_ORDERS_ERROR,
  FETCH_ORDERS_PENDING,
  FETCH_ORDERS_SUCCESS,

  // Fetch Order by ID
  FETCH_ORDER_BY_ID_ERROR,
  FETCH_ORDER_BY_ID_PENDING,
  FETCH_ORDER_BY_ID_SUCCESS,

  // Fetch Total Sales Order
  FETCH_TOTAL_SALES_ORDER_ERROR,
  FETCH_TOTAL_SALES_ORDER_PENDING,
  FETCH_TOTAL_SALES_ORDER_SUCCESS,
} from '../../constants/admin/order.constant';

const initState = {

  // Fetch List Order
  listOrder: {
    pending: false,
    orderList: null,
    isError: false,
  },

  // Fetch Order by ID
  orderById: {
    pending: false,
    order: null,
    isError: false,
  },

  // Fetch Total Sales Order
  totalSalesOrder: {
    pending: false,
    totalSales: null,
    isError: false,
  },
}

const orderAdminReducer = (state = initState, action) => {

  switch (action.type) {

    // Fetch List Order
    case FETCH_ORDERS_PENDING:
      state.listOrder.pending = true;
      break;
    case FETCH_ORDERS_ERROR:
      state.listOrder.pending = false;
      state.listOrder.isError = true;
      break;
    case FETCH_ORDERS_SUCCESS:
      state.listOrder.pending = false;
      state.listOrder.isError = false;
      state.listOrder.orderList = action.payload;
      break;

    // Fetch Order by ID
    case FETCH_ORDER_BY_ID_PENDING:
      state.orderById.pending = true;
      break;
    case FETCH_ORDER_BY_ID_ERROR:
      state.orderById.pending = false;
      state.orderById.isError = true;
      break;
    case FETCH_ORDER_BY_ID_SUCCESS:
      state.orderById.pending = false;
      state.orderById.isError = false;
      state.orderById.order = action.payload;
      break;

    // Fetch Total Sales Order
    case FETCH_TOTAL_SALES_ORDER_PENDING:
      state.totalSalesOrder.pending = true;
      break;
    case FETCH_TOTAL_SALES_ORDER_ERROR:
      state.totalSalesOrder.pending = false;
      state.totalSalesOrder.isError = true;
      break;
    case FETCH_TOTAL_SALES_ORDER_SUCCESS:
      state.totalSalesOrder.pending = false;
      state.totalSalesOrder.isError = false;
      state.totalSalesOrder.totalSales = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default orderAdminReducer;