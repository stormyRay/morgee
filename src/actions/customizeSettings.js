import {CHANGE_CLOTH_TYPE, CHANGE_CLOTH_SIZE, CHANGE_CLOTH_COLOR, CHANGE_IMAGE_SIZE, CHANGE_IMAGE_POSITION, CHANGE_TEXT_CONTENT, CHANGE_TEXT_FONT, CHANG_TEXT_COLOR, CHANGE_THUMBNAIL_SRC} from "../constants/actionTypes";
import {GET_THUMBNAIL_SRC} from "../constants/paths";
import fetch from "isomorphic-fetch";
import $ from "jquery";

export const changeClothType = (clothType) => {
	return{
		type: CHANGE_CLOTH_TYPE,
		clothType
	}
}
export const changeClothSize = (clothSize) => {
	return{
		type: CHANGE_CLOTH_SIZE,
		clothSize
	}
}
export const changeClothColor = (clothColor) => {
	return{
		type: CHANGE_CLOTH_COLOR,
		clothColor
	}
}
export const changeImageSize = (imageSize) => {
	return{
		type: CHANGE_IMAGE_SIZE,
		imageSize
	}
}
export const changeImagePosition = (imagePosition) => {
	return{
		type: CHANGE_IMAGE_POSITION,
		imagePosition
	}
}
export const changeTextContent = (textContent) => {
	return{
		type: CHANGE_IMAGE_SIZE,
		textContent
	}
}
export const changeTextFont = (textFont) => {
	return{
		type: CHANGE_IMAGE_SIZE,
		textFont
	}
}
export const changeTextColor = (textColor) => {
	return{
		type: CHANGE_IMAGE_SIZE,
		textColor
	}
}

export const getThumbnailSrc = (type, opts) => {
	var params = $.param(opts);
	return dispatch => {
    return fetch(GET_THUMBNAIL_SRC + "/" + type + "?" + params)
      .then(response => response.json())
      .then(json => dispatch(changeThumbnailSrc(json.src)))
  }
}

export const changeThumbnailSrc = (src) => {
	return{
		type: CHANGE_THUMBNAIL_SRC,
		src
	}
}
export default {changeClothType, changeClothSize, changeClothColor, changeImageSize, changeImagePosition, changeTextContent, changeTextFont, changeTextColor, getThumbnailSrc};