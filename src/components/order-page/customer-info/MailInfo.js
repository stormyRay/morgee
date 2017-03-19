import React from "react";
import {CUSTOMER_NAME, TEL_NUMBER, MAIL_DETAIL} from "../../../constants/texts";
class MailInfo extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			telNumber: "",
			address: ""
		};
	}

	render(){
		return (
			<div>
				<div className="order-info-area">
					<div className="order-label">{CUSTOMER_NAME}</div>
					<input className="order-input name-input" name="name" value={this.state.name}></input>
				</div>
				<div className="order-info-area">
					<div className="order-label">{TEL_NUMBER}</div>
					<input className="order-input tel-input" name="telNumber" value={this.state.telNumber}></input>
				</div>
				DISTRICT
				<div className="order-info-area">
					<div className="order-label">{TEL_NUMBER}</div>
					<textarea className="order-input tel-input" name="address" value={this.state.address}></textarea>
				</div>
			</div>
		)
	}
}

export default MailInfo;