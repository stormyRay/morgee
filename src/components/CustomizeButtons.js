import React from "react";
import { browserHistory } from "react-router";
import {SELECT_OTHER_IMAGE, SELECT_OTHER_TEMPLATE, COMPLETE_CUSTOMIZE, WARNING_EMPTY_TEXT} from "../constants/texts";

class CustomizeButtons extends React.Component{
	constructor(props) {
		super(props);
		this.handleBackClick = this.handleBackClick.bind(this);
		this.handleConfirmClick = this.handleConfirmClick.bind(this);
	}

	render(){
		const {customizeType} = this.props;
		return (
			<div className="customize-buttons-container">
				<button className="customize-button customize-button-back" onClick={this.handleBackClick}>{(customizeType == "image")? SELECT_OTHER_IMAGE : SELECT_OTHER_TEMPLATE}</button>
				<button className="customize-button customize-button-complete" onClick={this.handleConfirmClick}>{COMPLETE_CUSTOMIZE}</button>
			</div>
			)
	}

	handleBackClick(){
		const {customizeType} = this.props;
		if(!window.history.back()){
			if(customizeType == "text")
				location.href = "/index?stamp=" + (new Date()).getTime();
			else if(customizeType == "image")
				location.href = "gallery/index?stamp=" + (new Date()).getTime();
		}
	}

	handleConfirmClick(){
		const {imageId, settings, customizeType, textType, switchTab} = this.props;
		const {clothType, clothColor, clothSize, imageSize, imagePosition, textContent, textFont, textColor} = settings;
		var path;
		if(customizeType == "image")
			path = `/order/image/${imageId}?clothType=${clothType}&clothColor=${clothColor}&clothSize=${clothSize}&imageSize=${imageSize}&imagePosition=${imagePosition}`;
		else if(customizeType == "text"){
			if(!textContent){
				switchTab("text_content");
				alert(WARNING_EMPTY_TEXT);
				return;
			}
			path = `/order/text/${textType}?textContent=${textContent}&clothType=${clothType}&clothColor=${clothColor}&clothSize=${clothSize}&textFontId=${textFont.id}&textFontValue=${textFont.text}&textColor=${textColor}`;
		}
    	browserHistory.push(path);
	}
}

export default CustomizeButtons;