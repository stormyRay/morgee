import React from "react";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";
import {fontList} from "../../constants/fonts";

class TextFont extends React.Component{
	constructor(props) {
		super(props);
		this.updateSrc = this.updateSrc.bind(this);
		this.fontList = fontList;
		this.selectedFontSrc = "";
	}

	render(){
		const {selectedFont, switchTextFont} = this.props;
		var menuList = [];
		var fontPreview, selectedFontPreview;
		for(var i = 0; i < this.fontList.length; i++){
			var item = this.fontList[i];
			fontPreview = <div className="font-list-preview" style={{backgroundImage: "url(" + item.src + ")"}} />;
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

	updateSrc(content, font, color){
		this.props.updateThumbnail(content, font, color);
	}
}

export default TextFont;