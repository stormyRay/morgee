import React from "react";
import $ from "jquery";
import "jquery-validation";
import { browserHistory } from "react-router";
import {appid, TOTAL_LABEL, CONFIRM_AND_PAY, WARNING_LACK_OF_INFORMATION} from "../../constants/texts";
import {CONFIRM_ORDER} from "../../constants/paths";
import {getParameterByName, lauchWechatPay} from "../../constants/methods";

class ConfirmOrderBar extends React.Component{
	constructor(props) {
		super(props);
		this.handleConfirm = this.handleConfirm.bind(this);
	}

	render(){
		const {contentPrice, clothPrice, printPrice, orderNumber} = this.props;
		var number = parseInt(orderNumber) || 1;
		var totalPrice = parseFloat((contentPrice + clothPrice + printPrice) * number).toFixed(2);
		return (
			<div className="confirm-order-bar">
				<div className="confirm-label">{TOTAL_LABEL}</div>
				<div className="confirm-label">{"￥" + totalPrice}</div>
				<button className="confirm-order-button" onClick={this.handleConfirm} >{CONFIRM_AND_PAY}</button>
			</div>
		)
	}

	handleConfirm(e) {
		if(!$("#customer_info_form").valid()){
			alert(WARNING_LACK_OF_INFORMATION);
			return;
		}
		const {customizeType, contentPrice, clothPrice, printPrice, imageId, textType, orderNumber, clothType, clothColor, clothSize, textContent, textColor, textFont} = this.props;
		var formData = $("#customer_info_form").serializeArray();
		var parameters = {
			clothType,
			clothColor,
			clothSize,
			orderNumber,
			totalPrice: parseFloat((contentPrice + clothPrice + printPrice) * orderNumber).toFixed(2),
			openid: window.localStorage.getItem("wechatOpenid") || ""
		}
		if(customizeType == "image"){
			parameters = Object.assign(parameters, {imageId});
		} else {
			parameters = Object.assign(parameters, {
				textType,
				textContent,
				textColor,
				textFontId: textFont.id,
				textFontValue: textFont.text
			});
		}
		for(var i = 0; i < formData.length; i++){
			parameters[formData[i].name] = formData[i].value;
		}

		var errorFunc = function(msg){
			alert(msg || "Error happened when submitting!");
		}

		$.ajax({
			type: "POST",
			url: CONFIRM_ORDER,
			data: parameters,
			dataType: "json",
			success: function(response){
				if(typeof response == "string")
					var json = JSON.stringify(response.responseText);
				else 
					var json = response;
				if(json.success){
					// const path = "/order/success";
	    // 			browserHistory.push(path);
	    			lauchWechatPay(response);
	    		} else {
	    			alert(json.message);
	    		}
			},
			error: function(){
				alert("Pay error! Try again!")
			}
		});

	}
}

export default ConfirmOrderBar;