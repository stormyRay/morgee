import React from "react";
import $ from "jquery";
import {TOTAL_LABEL, CONFIRM_AND_PAY} from "../../constants/texts";
import {CONFIRM_ORDER} from "../../constants/paths";
class ConfirmOrderBar extends React.Component{
	constructor(props) {
		super(props);
		this.handleConfirm = this.handleConfirm.bind(this);
	}

	render(){
		const {imagePrice, clothPrice, printPrice, orderNumber} = this.props;
		var number = parseInt(orderNumber) || 1;
		var totalPrice = parseFloat((imagePrice + clothPrice + printPrice) * number).toFixed(2);
		return (
			<div className="confirm-order-bar">
				<div className="confirm-label">{TOTAL_LABEL}</div>
				<div className="confirm-label">{"￥" + totalPrice}</div>
				<button className="confirm-order-button" onClick={this.handleConfirm} >{CONFIRM_AND_PAY}</button>
			</div>
		)
	}

	handleConfirm(e) {
		const {imagePrice, clothPrice, printPrice, imageId, orderNumber, clothType, clothColor, clothSize} = this.props;
		var formData = $("#customer_info_form").serializeArray();
		var parameters = {
			imageId: imageId,
			clothType: clothType,
			clothColor: clothColor,
			clothSize: clothSize,
			orderNumber: orderNumber,
			totalPrice: parseFloat((imagePrice + clothPrice + printPrice) * orderNumber).toFixed(2)
		};
		for(var i = 0; i < formData.length; i++){
			parameters[formData[i].name] = formData[i].value;
		}

		$.ajax({
			type: "POST",
			url: CONFIRM_ORDER,
			data: parameters,
			dataType: "json",
			success: function(){
				alert("Successfully confirmed!")
			},
			error: function(){
				alert("Error happened when submitting!")
			}
		});

	}
}

export default ConfirmOrderBar;