import {UPDATE_ORDER_INFO, UPDATE_ORDER_NUMBER} from "../constants/actionTypes";
import {GET_ORDER_INFO} from "../constants/paths";
import fetch from "isomorphic-fetch";
import $ from "jquery";

export const getOrderInfo = (imageId, clothType, clothColor, clothSize) => {
	var parameters = {
		imageId: imageId,
		clothType: clothType,
		clothColor: clothColor,
		clothSize: clothSize
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