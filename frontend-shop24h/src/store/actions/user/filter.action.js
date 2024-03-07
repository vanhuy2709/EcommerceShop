// Import Constants
import { HANDLE_CHECKED_CATEGORIES } from '../../constants/user/category.constant';
import { HANDLE_CHANGE_SLIDE_PRICE, HANDLE_CHANGE_SORT_PRICE } from '../../constants/user/price.constant';
import { HANDLE_CHECKED_RATING } from '../../constants/user/rating.constant';


// Handle Check Categories
export const handleCheckCategories = (listCheckedCategory, id) => {
  const isChecked = listCheckedCategory.includes(id);

  if (isChecked) {
    // Uncheck
    return {
      type: HANDLE_CHECKED_CATEGORIES,
      payload: listCheckedCategory.filter(item => item !== id)
    }
  } else {
    return {
      type: HANDLE_CHECKED_CATEGORIES,
      payload: [...listCheckedCategory, id]
    }
  }
}

// Handle Change Slide Price
export const handleChangeSlidePriceAction = (newValue) => {
  return {
    type: HANDLE_CHANGE_SLIDE_PRICE,
    payload: newValue
  }
}

// Handle Check Rating
export const handleCheckRatingAction = (value) => {

  return {
    type: HANDLE_CHECKED_RATING,
    payload: value
  }
}

// Handle Change Sort Price
export const handleChangeSortPriceAction = (value) => {

  return {
    type: HANDLE_CHANGE_SORT_PRICE,
    payload: value
  }
}