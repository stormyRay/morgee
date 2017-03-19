import React from "react";
import CustomerInfoArea from "./customer-info/CustomerInfoArea";
import TshirtSummaryArea from "./tshirt-summary/TshirtSummaryArea";
import ConfirmPaymentLine from "./ConfirmPaymentLine";
import {changeTitle} from "../../constants/methods";

class OrderPage extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		changeTitle("确认购买");
	}

	render(){
		return (
			<div className="order-page-root">
				<TshirtSummaryArea imageId={this.props.params.imageId}/>
				<CustomerInfoArea />
				<ConfirmPaymentLine />
			</div>
		)
	}
}

export default OrderPage;