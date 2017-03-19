import React from "react";
import {TOTAL_LABEL, CONFIRM_AND_PAY} from "../../constants/texts";
class ConfirmOrderBar extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="confirm-order-bar">
				<div className="confirm-label">{TOTAL_LABEL}</div>
				<div className="confirm-label">{"￥" + this.props.price}</div>
				<button className="confirm-order-button">{CONFIRM_AND_PAY}</button>
			</div>
		)
	}
}

export default ConfirmOrderBar;