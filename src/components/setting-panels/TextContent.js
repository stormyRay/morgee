import React from "react";
import {TEXT_CONTENT, WARNING_MORE_THAN_ONE_CN, WARNING_HAS_CHAR_OTHER_THAN_CN} from "../../constants/texts";

class TextContent extends React.Component{
	constructor(props) {
		super(props);
		this.updateSrc = this.updateSrc.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillUnmount() {
		const {textValue, thumbnailTextValue} = this.props;
		if(textValue != thumbnailTextValue){
			this.updateSrc(textValue, null, null);
		}
	}

	render(){
		const {textValue, changeTextContent} = this.props;
		return (
			<div className="setting-panel-container input-container">
					<input className="text-content setting-input" value={textValue} placeholder={TEXT_CONTENT} onChange={(e) => changeTextContent(e.target.value)} onBlur={this.handleBlur} onKeyDown={this.handleKeyDown}/>
				<div className="confirm-content-button-wrapper">
					<div className="confirm-content-button" onClick={this.handleClick}/>
				</div>
			</div>
			)
	}

	handleKeyDown(e){
		if (e.keyCode === 13) {//ENTER
			this.updateSrc(e.target.value);
		}
	}

	handleBlur(e){
		if(e.target.value != this.props.thumbnailTextValue){
			this.updateSrc(e.target.value);
		}
	}

	handleClick(e){
		const {textValue, thumbnailTextValue, changeTextContent} = this.props;
		if(textValue != thumbnailTextValue)
			this.updateSrc(textValue);
	}

	updateSrc(content){
		if(this.validateText(content)){
			this.props.updateThumbnail(content, null, null);
			this.props.changeTumbnailText(content);
		}
	}

	validateText(content){
		const {textType, changeTextContent} = this.props;
		switch(textType){
			case "single_cn":
				var pureCH = this.getPureChinese(content);
				if(pureCH){
					if(pureCH.length > 1){
						changeTextContent(pureCH.at(0));
						alert(WARNING_MORE_THAN_ONE_CN);
					}
					return true
				} else {
					alert(WARNING_HAS_CHAR_OTHER_THAN_CN);
					return false;
				}
			case "multiple_cn":
			case "single_en":
			case "multiple_en":
			default: return  true;
		};
	}

	getPureChinese(str){
		const regex = /[\u4E00-\u9FFF\u3400-\u4DFF\uF900-\uFAFF]+/g;
		if(str.match(regex)){
			return str.match(regex).join("");
		}
	}
}

export default TextContent;