import React from "react";
import { browserHistory } from "react-router";
import {SELECT_OTHER_IMAGE, COMPLETE_CUSTOMIZE} from "../constants/texts";

class CustomizeButtons extends React.Component{
	constructor(props) {
		super(props);
		this.handleBackClick = this.handleBackClick.bind(this);
		this.handleConfirmClick = this.handleConfirmClick.bind(this);
	}

	render(){
		return (
			<div className="customize-buttons-container">
				<button className="customize-button customize-button-back" onClick={this.handleBackClick}>{SELECT_OTHER_IMAGE}</button>
				<button className="customize-button customize-button-complete" onClick={this.handleConfirmClick}>{COMPLETE_CUSTOMIZE}</button>
			</div>
			)
	}

	handleBackClick(){
		if(!window.history.back()){
			location.href = "/index?stamp=" + (new Date()).getTime();
		}
	}

	handleConfirmClick(){
		const {imageId, settings, customizeType} = this.props;
		const {clothType, clothColor, clothSize, imageSize, imagePosition, textContent, textFont, textColor} = settings;
		if(customizeType == "image")
			const path = `/order/image/${imageId}?clothType=${clothType}&clothColor=${clothColor}&clothSize=${clothSize}&imageSize=${imageSize}&imagePosition=${imagePosition}`;
		else if(customizeType == "text")
			const path = `/order/text/${textContent}?clothType=${clothType}&clothColor=${clothColor}&clothSize=${clothSize}&textFont=${textFont}&textColor=${textColor}`;
    	browserHistory.push(path);
	}
}

export default CustomizeButtons;