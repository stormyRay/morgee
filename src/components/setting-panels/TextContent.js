import React from "react";
import {TEXT_CONTENT} from "../../constants/texts";

class TextContent extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {textValue} = this.props;
		return (
			<div className="setting-panel-container">
				<input className="text-content" value={textValue} placeholder={TEXT_CONTENT}/>
			</div>
			)
	}
}

export default TextContent;