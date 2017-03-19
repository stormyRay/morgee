import {UPDATE_ORDER_INFO} from "../constants/actionTypes";

const order = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDER_INFO:
        return Object.assign({}, state);
    default:
        return state;
  }
}

export default order;