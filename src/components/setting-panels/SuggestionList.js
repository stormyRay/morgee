import React from "react";
import Clearfix from "react-bootstrap/lib/Clearfix";
import MenuItem from "react-bootstrap/lib/MenuItem";
import {fontList} from "../../constants/fonts";

class TextFont extends React.Component{
	constructor(props) {
		super(props);
		this.suggestions = [];
	}

	render(){
		const {selectedFont, switchTextFont} = this.props;
		var menuList = [];
		var fontPreview, selectedFontPreview;
		for(var i = 0; i < this.fontList.length; i++){
			var item = this.fontList[i];
			var fontClass = "sprite-font sprite-font-" + item.id;
			fontPreview = <div className={fontClass} />;
			if(selectedFont.id == item.id)
				selectedFontPreview = fontPreview;
			menuList.push(
				<MenuItem eventKey={item} key={item.id}>
					{fontPreview || item.text}
					<span className={"check-mark" + ((selectedFont.id == item.id) ? " checked" : "")} />
				</MenuItem>);
		}
		return (
			<div className="setting-panel-container dropup-container text-font-container">
				<ButtonToolbar bsClass="selector-wrapper btn-toolbar">
					<DropdownButton id="text_font_dropdown" bsClass="setting-panel-dropdup dropdown" title={selectedFontPreview || selectedFont.text} dropup onSelect={(eventKey, e) => {switchTextFont(eventKey); this.updateSrc(null, eventKey.id, null);}}>
						{menuList}
					</DropdownButton>
				</ButtonToolbar>
			</div>
			)
	}

	updateSuggestion(keyword){
		var oldS = this.suggestions;
		var newS = [];
		for(var i = 0; i < oldS.length; i ++){
			if(oldS[i].indexOf(keyword) > -1)
				newS.push(oldS[i]);
		}
		
		this.setState({
			suggestions: newS
		});
	}
}

export default TextFont;