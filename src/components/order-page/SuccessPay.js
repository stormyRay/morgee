import React from "react";
import {SUCCESSFULLY_PAID, FOLLOW_TO_SEE_DETAIL} from "../../constants/texts";

class SuccessPay extends React.Component{
	constructor(props) {
		super(props);
		document.removeEventListener('touchstart', this.props.route.touchHandlers.touchstartHandler);
		document.removeEventListener('touchmove', this.props.route.touchHandlers.touchmoveHandler);
	}

	render() {
		return (
			<div className="success-pay-container">
				<div className="center-logo" />
				<p className="success-pay-text">{SUCCESSFULLY_PAID}</p>
				<div className="follow-button">{FOLLOW_TO_SEE_DETAIL}</div>
			</div>
		)
	}
}

export default SuccessPay;