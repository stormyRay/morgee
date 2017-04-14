import { combineReducers } from "redux";
import {UPDATE_CATEGORIES} from "../constants/actionTypes";

const categories = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
       return action.categories;
    default:
      return state;
  }
}

const reducers = combineReducers({
	categories
});

export default reducers;