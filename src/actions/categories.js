import {UPDATE_CATEGORIES} from "../constants/actionTypes";
import {GET_CATEGORIES} from "../constants/paths";
import fetch from "isomorphic-fetch";

export const getCategories = () => {
	return dispatch => {
    return fetch(GET_CATEGORIES)
      .then(response => response.json())
      .then(json => dispatch(updateCategories(json.categories)))
  }
}

export const updateCategories = (categories) => {
	return{
		type: UPDATE_CATEGORIES,
		categories
	}
}

