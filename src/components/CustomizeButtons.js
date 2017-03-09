import React from "react";
import {SELECT_OTHER_IMAGE, COMPLETE_CUSTOMIZE} from "../constants/texts";

class CustomizeButtons extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render(){
		return (
			<div className="customize-buttons-container">
				<button className="customize-button customize-button-back" onClick={this.handleClick}>{SELECT_OTHER_IMAGE}</button>
				<button className="customize-button customize-button-complete">{COMPLETE_CUSTOMIZE}</button>
			</div>
			)
	}

	handleClick(){
		if(!window.history.back()){
			location.href = "/index?stamp=" + (new Date()).getTime();
		}
	}
}

export default CustomizeButtons;