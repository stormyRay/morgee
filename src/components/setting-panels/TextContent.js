import React from "react";
import {TEXT_CONTENT} from "../../constants/texts";

class TextContent extends React.Component{
	constructor(props) {
		super(props);
		this.latestContent = this.props.textValue;
		this.updateSrc = this.updateSrc.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	componentWillUnmount() {
		const {textValue} = this.props;
		if(textValue != this.latestContent){
			this.updateSrc(textValue, null, null);
		}
	}

	render(){
		const {textValue, changeTextContent} = this.props;
		return (
			<div className="setting-panel-container input-container">
				<input className="text-content setting-input" value={textValue} placeholder={TEXT_CONTENT} onChange={(e) => changeTextContent(e.target.value)} onBlur={this.handleBlur} onKeyDown={this.handleKeyDown}/>
			</div>
			)
	}

	handleKeyDown(e){
		if (e.keyCode === 13) {//ENTER
			this.updateSrc(e.target.value, null, null);
		}
	}

	handleBlur(e){
		if(e.target.value != this.latestContent){
			this.updateSrc(e.target.value, null, null);
		}
	}

	updateSrc(content, font, color){
		this.props.updateThumbnail(content, font, color);
		this.latestContent = content;
	}
}

export default TextContent;