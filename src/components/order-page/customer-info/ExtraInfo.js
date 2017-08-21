import React from "react";
import {SHIPPING_METHOD, SHIPPING_SOLID_VALUE, COMMON_FAQ} from "../../../constants/texts";
class ExtraInfo extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="extra-info-area order-info-wrapper">
				<div className="order-info-area">
					<div className="order-label">{SHIPPING_METHOD}</div>
					<div className="shipping-value order-input">{SHIPPING_SOLID_VALUE}</div>
				</div>
				{/*
				<div className="order-info-area faq-area last">
					<div className="order-label">{COMMON_FAQ}</div>
					<span className="right-arrow sprite sprite-linearrow-right-black" />
				</div>
				*/}
			</div>
		)
	}
}

export default ExtraInfo;