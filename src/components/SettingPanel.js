import React from "react";
//import ClothTypeSetting from "../containers/customize-containers/ClothTypeSetting";
import ClothTypeAndSizeSetting from "../containers/customize-containers/ClothTypeAndSizeSetting";
import ClothColorSetting from "../containers/customize-containers/ClothColorSetting";
import ImageSizeSetting from "../containers/customize-containers/ImageSizeSetting";
import ImagePositionSetting from "../containers/customize-containers/ImagePositionSetting";


class SettingPanel extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {activeCustomizeTab} = this.props;
		let setting = null;
		switch(activeCustomizeTab) {
			case "type" : setting = (<ClothTypeAndSizeSetting />); break;
			case "color" : setting = (<ClothColorSetting />); break;
			case "size" : setting = (<ImageSizeSetting />); break;
			case "position" : setting = (<ImagePositionSetting />); break;
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