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
		const {getOrderInfo, clothType, clothColor, clothSize, textContent, textColor, textFont} = this.props;
		getOrderInfo({
			clothType,
			clothColor,
			clothType,
			clothSize
		}, this.props.route.customizeType, 
		this.props.params.imageId, {
			textType: this.props.params.textType,
			textContent,
			textColor,
			textFont
		});
	}

	componentDidMount() {
		changeTitle("确认购买");
	}

	render(){
		const {orderNumber, contentPrice, clothPrice, printPrice} = this.props;
		return (
			<div className="order-page-root">
				<TshirtSummaryArea imageId={this.props.params.imageId} customizeType={this.props.route.customizeType} textType={this.props.params.textType} {...this.props}/>
				<CustomerInfoArea {...this.props}/>
				<ConfirmOrderBar imageId={this.props.params.imageId} customizeType={this.props.route.customizeType} textType={this.props.params.textType} {...this.props}/>
			</div>
		)
	}
}

export default OrderPage;