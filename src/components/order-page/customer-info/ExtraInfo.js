import React from "react";
import {SHIPPING_METHOD, COMMON_FAQ} from "../../../constants/texts";
class ExtraInfo extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<div className="order-info-area">
					<div className="order-label">{SHIPPING_METHOD}</div>
					<div className="shipping-value"></div>
				</div>
				<div className="order-info-area">
					<div className="order-label">{COMMON_FAQ}</div>
					<span className="sprite_right-arrow" />
				</div>
			</div>
		)
	}
}

export default ExtraInfo;