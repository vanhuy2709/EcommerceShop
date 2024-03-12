import {
  HANDLE_CLOSE_MODAL_UPDATE_COMMENT,
  HANDLE_OPEN_MODAL_UPDATE_COMMENT,
  HANDLE_CHANGE_MESSAGE_COMMENT,
  HANDLE_CHANGE_RATING_COMMENT
} from '../../constants/user/comment.constant';

export const handleOpenModalUpdateCommentAction = (comment) => {

  return {
    type: HANDLE_OPEN_MODAL_UPDATE_COMMENT,
    payload: comment
  }
}

export const handleCloseModalUpdateCommentAction = () => {

  return {
    type: HANDLE_CLOSE_MODAL_UPDATE_COMMENT,
  }
}

export const handleChangeMessageCommentAction = (value) => {

  return {
    type: HANDLE_CHANGE_MESSAGE_COMMENT,
    payload: value
  }
}

export const handleChangeRatingCommentAction = (value) => {

  return {
    type: HANDLE_CHANGE_RATING_COMMENT,
    payload: value
  }
}