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
		this.changeName = this.changeName.bind(this);
		this.changeTelNumber = this.changeTelNumber.bind(this);
		this.changeAddress = this.changeAddress.bind(this);
		this.textAreaKeyDown = this.textAreaKeyDown.bind(this);
	}

	render(){
		return (
			<div className="mail-info-area order-info-wrapper">
				<div className="order-info-area">
					<div className="order-label">{CUSTOMER_NAME}</div>
					<input className="order-input name-input" name="name" value={this.state.name} onChange={this.changeName}></input>
				</div>
				<div className="order-info-area">
					<div className="order-label">{TEL_NUMBER}</div>
					<input className="order-input tel-input" name="telNumber" type="number" value={this.state.telNumber} onChange={this.changeTelNumber}></input>
				</div>
				DISTRICT
				<div className="order-info-area">
					<div className="order-label address-label">{MAIL_DETAIL}</div>
					<textarea className="order-input address-input" name="address" value={this.state.address} onChange={this.changeAddress} onKeyDown={this.textAreaKeyDown}></textarea>
				</div>
			</div>
		)
	}

	changeName(e){
		this.setState({
			name: e.target.value.trim()
		});
	}

	changeTelNumber(e){
		this.setState({
			telNumber: e.target.value.trim()
		});
	}

	changeAddress(e){
		this.setState({
			address: e.target.value.trim()
		});
	}

	textAreaKeyDown(e){
		var el = e.target;
		setTimeout(function(){
			el.style.cssText = 'height:auto; padding:0';
    		// for box-sizing other than "content-box" use:
    		// el.style.cssText = '-moz-box-sizing:content-box';
    		el.style.cssText = 'height:' + el.scrollHeight + 'px';
		},0);
	}
}

export default MailInfo;