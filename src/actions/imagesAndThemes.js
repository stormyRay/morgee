import {UPDATE_HOT_IMAGES, UPDATE_THEMES, UPDATE_IMAGES} from "../constants/actionTypes";
import fetch from "isomorphic-fetch";

export const getHotImages = () => {
	return dispatch => {
    return fetch("/getHotImages.json")
      .then(response => response.json())
      .then(json => dispatch(updateHotImages(json.hotImages)))
  }
}

export const updateHotImages = (images) => {
	return{
		type: UPDATE_HOT_IMAGES,
		images
	}
}

export const getThemes = (page) => {
	return dispatch => {
    return fetch("/getThemes.json?page=" + page)
      .then(response => response.json())
      .then(json => dispatch(updateThemes(json.themes)))
  }
}

export const updateThemes = (themes) => {
	return{
		type: UPDATE_THEMES,
		themes
	}
}


export default {getHotImages, getThemes};