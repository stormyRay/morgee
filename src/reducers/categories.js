import { combineReducers } from "redux";
import {UPDATE_CATEGORIES} from "../constants/actionTypes";
import activeType from "./activeType";

const categories = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
       return action.categories;
    default:
      return state;
  }
}

const reducers = combineReducers({
	categories,
	activeType
});

export default reducers;