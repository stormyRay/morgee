import {UPDATE_ORDER_INFO, UPDATE_ORDER_NUMBER} from "../constants/actionTypes";
import {GET_ORDER_INFO} from "../constants/paths";
import fetch from "isomorphic-fetch";
import $ from "jquery";

export const getOrderInfo = (clothInfo, customType, imageId, textInfo) => {
	if(customType == "image"){
		var parameters = {
			imageId: imageId,
			clothType: clothInfo.clothType,
			clothColor: clothInfo.clothColor,
			clothSize: clothInfo.clothSize
		};
	} else {
		var parameters = {
			textType: textInfo.textType,
			textContent: textInfo.textContent,
			textFontId: textInfo.textFont.id,
			textColor: textInfo.textColor,
			clothType: clothInfo.clothType,
			clothColor: clothInfo.clothColor,
			clothSize: clothInfo.clothSize
		};
	}
	var params = $.param(parameters);
	return dispatch => {
    return fetch(GET_ORDER_INFO + "?" + params)
      .then(response => response.json())
      .then(json => dispatch(updateOrderInfo(json.info)))
  }
}

export const updateOrderInfo = (info) => {
	return{
		type: UPDATE_ORDER_INFO,
		info
	};
}

export const updateOrderNumber = (number) => {
	return{
		type: UPDATE_ORDER_NUMBER,
		number
	};
}
export default {getOrderInfo, updateOrderInfo, updateOrderNumber};