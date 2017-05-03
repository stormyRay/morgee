import React from "react";
//import ClothTypeSetting from "../containers/customize-containers/ClothTypeSetting";
import ClothTypeAndSizeSetting from "../containers/customize-containers/ClothTypeAndSizeSetting";
import ClothColorSetting from "../containers/customize-containers/ClothColorSetting";
import ImageSizeSetting from "../containers/customize-containers/ImageSizeSetting";
import ImagePositionSetting from "../containers/customize-containers/ImagePositionSetting";
import TextContentSetting from "../containers/customize-containers/TextContentSetting";
import TextColorSetting from "../containers/customize-containers/TextColorSetting";
import TextFontSetting from "../containers/customize-containers/TextFontSetting";


class SettingPanel extends React.Component{
	constructor(props) {
		super(props);
		this.updateTextSrc = this.updateTextSrc.bind(this);
	}

	render(){
		const {activeCustomizeTab} = this.props;
		let setting = null;
		switch(activeCustomizeTab) {
			case "type" : setting = (<ClothTypeAndSizeSetting />); break;
			case "color" : setting = (<ClothColorSetting />); break;
			case "size" : setting = (<ImageSizeSetting />); break;
			case "position" : setting = (<ImagePositionSetting />); break;
			case "text_content": setting = (<TextContentSetting updateThumbnail={this.updateTextSrc}/>); break;
			case "text_font": setting = (<TextFontSetting updateThumbnail={this.updateTextSrc}/>); break;
			case "text_color": setting = (<TextColorSetting updateThumbnail={this.updateTextSrc}/>); break;
			default: setting = null;
		}
		return (
			<div className="setting-panel-container">
				{setting}
			</div>
			)
	}

	updateTextSrc(content, font, color){
		const {settings, updateThumbnail} = this.props
		const {textContent, textFont, textColor} = settings;
		updateThumbnail({
			textContent: content || textContent,
			textFont: font || textFont.id,
			textColor: color || textColor,
			textType: this.props.textType
		});
	}
}

export default SettingPanel;