import {UPDATE_HOT_IMAGES, UPDATE_THEMES, UPDATE_IMAGES, CLEAR_IMAGES} from "../constants/actionTypes";
import fetch from "isomorphic-fetch";

export const getHotImages = () => {
	return dispatch => {
    return fetch("/getHotImages.json")
      .then(response => response.json())
      .then(json => dispatch(updateHotImages(json.hotImages)))
  }
}

export const updateHotImages = (hotImages) => {
	return{
		type: UPDATE_HOT_IMAGES,
		hotImages
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

export const getImages = (page, theme) => {
	return dispatch => {
    return fetch("/getImages.json?page=" + page + "&theme=" + theme)
      .then(response => response.json())
      .then(json => dispatch(updateImages(json.images)))
  }
}

export const updateImages = (images) => {
	return{
		type: UPDATE_IMAGES,
		images
	}
}

export const clearImageList = () => {
	return {
		type: CLEAR_IMAGES
	}
}

export default {getHotImages, getThemes, getImages, clearImageList};