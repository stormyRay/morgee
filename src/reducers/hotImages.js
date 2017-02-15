import {UPDATE_HOT_IMAGES} from "../constants/actionTypes";

const hotImages = (state = [], action) => {
  switch (action.type) {
    case UPDATE_HOT_IMAGES:
       return action.hotImages;
    default:
      return state;
  }
}

export default hotImages;