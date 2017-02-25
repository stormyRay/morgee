import {CHANGE_CLOTH_TYPE, CHANGE_CLOTH_COLOR, CHANGE_IMAGE_SIZE, CHANGE_IMAGE_POSITION} from "../constants/actionTypes";

export const changeClothType = (clothType) => {
	return{
		type: CHANGE_CLOTH_TYPE,
		clothType
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
export default {changeClothType, changeClothColor, changeImageSize, changeImagePosition};