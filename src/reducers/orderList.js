import { combineReducers } from "redux";
import {UPDATE_ORDER_LIST} from "../constants/actionTypes";

const orderList = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDER_LIST:
       return action.orderList;
    default:
      return state;
  }
}

const reducers = combineReducers({
	orderList
});

export default reducers;