import {UPDATE_ORDER_LIST} from "../constants/actionTypes";
import {GET_ORDER_LIST} from "../constants/paths";
import fetch from "isomorphic-fetch";

export const getOrderList = (page) => {
	return dispatch => {
    return fetch(GET_ORDER_LIST + "?page=" + page + openid + (window.localStorage.getItem("wechatOpenid") || ""))
      .then(response => response.json())
      .then(json => dispatch(updateHotImages(json.orders)))
  }
}

export const updateOrderList = (orderList) => {
	return{
		type: UPDATE_ORDER_LIST,
		orderList
	}
}


export default {getOrderList, updateOrderList};