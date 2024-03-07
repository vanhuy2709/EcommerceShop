import { HANDLE_CHECKED_RATING } from '../../constants/user/rating.constant';

const initState = {

  // Checked rating
  checkedRating: 1
}

const ratingReducer = (state = initState, action) => {
  switch (action.type) {

    // Handle Check Rating
    case HANDLE_CHECKED_RATING:
      state.checkedRating = action.payload;
      break;

    default:
      break;
  }

  return { ...state };
}

export default ratingReducer;