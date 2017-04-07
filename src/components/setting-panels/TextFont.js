import React from "react";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";

class TextFont extends React.Component{
	constructor(props) {
		super(props);
		this.fontList = [{
			id: "1", text: "字体1"
		},{
			id: "2", text: "字体2"
		},{
			id: "3", text: "字体3"
		},{
			id: "4", text: "字体4"
		}];
	}

	render(){
		const {selectedFont, switchTextFont} = this.props;
		var menuList = [];
		for(var i = 0; i < this.fontList.length; i++){
			var item = this.List[i];
			menuList.push(
				<MenuItem eventKey={item} key={item.id}>
					{item.text}
					<span className={"check-mark" + ((selectedFont.id == item.id) ? " checked" : "")} />
				</MenuItem>);
		}
		return (
			<div className="setting-panel-container">
				<ButtonToolbar bsClass="selector-wrapper btn-toolbar">
					<DropdownButton id="text_font_dropdown" bsClass="setting-panel-dropdup dropdown" title={selectedFont.text} dropup onSelect={(eventKey, e) =>switchTextFont(eventKey)}>
						{menuList}
					</DropdownButton>
				</ButtonToolbar>
			</div>
			)
	}
}

export default TextFont;