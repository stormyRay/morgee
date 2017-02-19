import React from "react";
import ClothTypes from "./setting-panel/ClothTypes";
import Colors from "./setting-panel/Colors";
import Size from "./setting-panel/Size";
import Position from "./setting-panel/Position";


class SettingPanel extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {activeCustomizeTab} = this.props;
		let setting = null;
		switch(activeCustomizeTab) {
			case "type" : setting = (<ClothTypes />); break;
			case "color" : setting = (<Colors />); break;
			case "size" : setting = (<Size />); break;
			case "position" : setting = (<Position />); break;
			default: setting = null;
		}
		return (
			<div className="setting-panel-container">
				{setting}
			</div>
			)
	}
}

export default SettingPanel;