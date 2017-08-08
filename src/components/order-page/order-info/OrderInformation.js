import React from "react";
import TshirtSummaryArea from "../tshirt-sumaary/TshirtSummaryArea";
import {ORDER_NUMBER, SHIPPING_INFORMATION, SHIPPING_NUMBER, SHIPPING_STATUS} from "../../constants/texts";

class OrderInformation extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {orderNumber, orderTime, shippingMethod, shippingNumber} = this.props;
		return (
			<div className="order-information-container">
				<div className="order-general-wrapper">
					<div className="order-number">{ORDER_NUMBER + orderNumber}</div>
					<div className="order-time">{orderTime}</div>
				</div>
				<div className="shipping-information-wrapper">
					<div className="shipping-information">{SHIPPING_INFORMATION + shippingMethod + " (" + SHIPPING_NUMBER + shippingNumber + ")"}</div>
					<div className="status-checking">{SHIPPING_STATUS}</div>
				</div>
				<TshirtSummaryArea {...this.props}/>
			</div>
		)
	}
}

export default OrderInformation;