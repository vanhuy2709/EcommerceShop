import {

  // Fetch List Comment by Product
  FETCH_COMMENTS_PRODUCT_BY_ID_ERROR,
  FETCH_COMMENTS_PRODUCT_BY_ID_PENDING,
  FETCH_COMMENTS_PRODUCT_BY_ID_SUCCESS,

  // Create Comment
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_PENDING,
  CREATE_COMMENT_SUCCESS,

  // Update Comment
  UPDATE_COMMENT_ERROR,
  UPDATE_COMMENT_PENDING,
  UPDATE_COMMENT_SUCCESS,

  // Handle Open / Close Modal Update Comment
  HANDLE_CLOSE_MODAL_UPDATE_COMMENT,
  HANDLE_OPEN_MODAL_UPDATE_COMMENT,

  // Handle change info comment
  HANDLE_CHANGE_MESSAGE_COMMENT,
  HANDLE_CHANGE_RATING_COMMENT,
} from '../../constants/user/comment.constant';

const initState = {

  // Fetch List Comment by Product
  listCommentProduct: {
    pending: false,
    listComment: null,
    isError: false,
  },

  // Update Comment by ID
  updateCommentModal: {
    open: false,
    message: '',
    rating: 0,
  },
}

const commentReducer = (state = initState, action) => {

  switch (action.type) {

    // Fetch List Comment by Product
    case FETCH_COMMENTS_PRODUCT_BY_ID_PENDING:
      state.listCommentProduct.pending = true;
      break;
    case FETCH_COMMENTS_PRODUCT_BY_ID_ERROR:
      state.listCommentProduct.pending = false;
      state.listCommentProduct.isError = true;
      break;
    case FETCH_COMMENTS_PRODUCT_BY_ID_SUCCESS:
      state.listCommentProduct.pending = false;
      state.listCommentProduct.isError = false;
      state.listCommentProduct.listComment = action.payload;
      break;

    // Handle Open / Close Modal Update Comment
    case HANDLE_OPEN_MODAL_UPDATE_COMMENT:
      state.updateCommentModal.open = true;
      state.updateCommentModal.message = action.payload.message;
      state.updateCommentModal.rating = action.payload.rating;
      break;
    case HANDLE_CLOSE_MODAL_UPDATE_COMMENT:
      state.updateCommentModal.open = false;
      state.updateCommentModal.message = '';
      state.updateCommentModal.rating = 0;
      break;

    // Handle Change info comment
    case HANDLE_CHANGE_MESSAGE_COMMENT:
      state.updateCommentModal.message = action.payload;
      break;
    case HANDLE_CHANGE_RATING_COMMENT:
      state.updateCommentModal.rating = action.payload;
      break;

    // Update Comment by ID
    case UPDATE_COMMENT_ERROR:
      break;
    case UPDATE_COMMENT_PENDING:
      break;
    case UPDATE_COMMENT_SUCCESS:
      state.updateCommentModal.open = false;
      break;

    default:
      break;
  }

  return { ...state };
}

export default commentReducer;