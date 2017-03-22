import {UPDATE_ORDER_INFO, UPDATE_ORDER_NUMBER} from "../constants/actionTypes";

const orderInfo = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDER_INFO:
        return Object.assign({}, state, action.info);
    case UPDATE_ORDER_NUMBER: {
    	return Object.assign({}, state, {number: action.number});
    }
    default:
        return state;
  }
}

export default orderInfo;