import {CHANGE_CLOTH_TYPE, CHANGE_CLOTH_COLOR, CHANGE_IMAGE_SIZE, CHANGE_IMAGE_POSITION} from "../constants/actionTypes";

export const changeClothType = (type) => {
	return{
		type: CHANGE_CLOTH_TYPE,
		clothType
	}
}

export const changeClothColor = (type) => {
	return{
		type: CHANGE_CLOTH_COLOR,
		clothColor
	}
}
export const changeImageSize = (type) => {
	return{
		type: CHANGE_IMAGE_SIZE,
		imageSize
	}
}
export const changeImagePosition = (type) => {
	return{
		type: CHANGE_IMAGE_POSITION,
		imagePosition
	}
}
export default {changeClothType, changeClothColor, changeImageSize, changeImagePosition};