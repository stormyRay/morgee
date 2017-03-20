import React from "react";
import TshirtNumber from "./TshirtNumber";
import MailInfo from "./MailInfo";
import ExtraInfo from "./ExtraInfo";
class CustomerInfoArea extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="customer-info-wrapper">
				<TshirtNumber />
				<MailInfo />
				<ExtraInfo />
			</div>
		)
	}
}

export default CustomerInfoArea;