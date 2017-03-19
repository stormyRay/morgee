import React from "react";
import TshirtNumber from "./TshirtNumber";
import MailInfo from "./MailInfo";
import ExtraInfo from "./ExtraInfo";
import ConfirmOrderBar from "../ConfirmOrderBar";
class CustomerInfoArea extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<TshirtNumber />
				<MailInfo />
				<ExtraInfo />
				<ConfirmOrderBar price={90} />
			</div>
		)
	}
}

export default CustomerInfoArea;