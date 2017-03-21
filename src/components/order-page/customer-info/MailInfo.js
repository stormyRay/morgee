import React from "react";
import DistrictArea from "./DistrictArea";
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
		this.autoHeight = this.autoHeight.bind(this);
		this.delayAutoHeight = this.delayAutoHeight.bind(this);
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
					<input className="order-input tel-input" name="telNumber" type="tel" value={this.state.telNumber} onChange={this.changeTelNumber}></input>
				</div>
				<DistrictArea />
				<div className="order-info-area">
					<div className="order-label address-label">{MAIL_DETAIL}</div>
					<textarea className="order-input address-input" rows="1" name="address" value={this.state.address} onChange={this.changeAddress} onKeyDown={this.delayAutoHeight}></textarea>
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
		this.autoHeight(e.target)
	}

	autoHeight(el){
		el.style.height = 'auto';
        el.style.height = el.scrollHeight+'px';
	}

	delayAutoHeight(e){
		var el = e.target;
		window.setTimeout(() => this.autoHeight(el), 0);
	}
}

export default MailInfo;