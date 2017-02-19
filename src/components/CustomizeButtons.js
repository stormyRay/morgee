import React from "react";
import {SELECT_OTHER_IMAGE, COMPLETE_CUSTOMIZE} from "../constants/texts";

class CustomizeButtons extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="customize-buttons-container">
				<button className="customize-button customize-button-back">{SELECT_OTHER_IMAGE}</button>
				<button className="customize-button customize-button-complete">{COMPLETE_CUSTOMIZE}</button>
			</div>
			)
	}
}

export default CustomizeButtons;