import React from "react";
import CustomerInfoArea from "./customer-info/CustomerInfoArea";
import TshirtSummaryArea from "./tshirt-summary/TshirtSummaryArea";
import ConfirmOrderBar from "./ConfirmOrderBar";
import {changeTitle} from "../../constants/methods";

class OrderPage extends React.Component{
	constructor(props) {
		super(props);
		document.removeEventListener('touchstart', this.props.route.touchHandlers.touchstartHandler);
		document.removeEventListener('touchmove', this.props.route.touchHandlers.touchmoveHandler);
	}
	componentWillMount() {
		const {getOrderInfo, clothType, clothColor, clothSize} = this.props;
		getOrderInfo(this.props.params.imageId, clothType, clothColor, clothSize);
	}

	componentDidMount() {
		changeTitle("确认购买");
	}

	render(){
		const {orderNumber, imagePrice, clothPrice, printPrice} = this.props;
		return (
			<div className="order-page-root">
				<TshirtSummaryArea imageId={this.props.params.imageId}/>
				<CustomerInfoArea {...this.props}/>
				<ConfirmOrderBar {...this.props}/>
			</div>
		)
	}
}

export default OrderPage;