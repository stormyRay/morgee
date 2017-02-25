import React from "react";
import ClothTypeSetting from "../containers/customize-containers/ClothTypeSetting";
import ClothColorSetting from "../containers/customize-containers/ClothColorSetting";
import ImageSize from "./setting-panels/ImageSize";
import ImagePosition from "./setting-panels/ImagePosition";


class SettingPanel extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {activeCustomizeTab} = this.props;
		let setting = null;
		switch(activeCustomizeTab) {
			case "type" : setting = (<ClothTypeSetting />); break;
			case "color" : setting = (<ClothColorSetting />); break;
			case "size" : setting = (<ImageSize />); break;
			case "position" : setting = (<ImagePosition />); break;
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