import React from "react";
import CustomerInfoArea from "./customer-info/CustomerInfoArea";
import TshirtSummaryArea from "./tshirt-summary/TshirtSummaryArea";
import ConfirmPaymentLine from "./ConfirmPaymentLine";

class OrderPage extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<TshirtSummaryArea />
				<CustomerInfoArea />
				<ConfirmPaymentLine />
			</div>
		)
	}
}

export default OrderPage;