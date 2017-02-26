import React from "react";
import TshirtSampleContainer from "../containers/customize-containers/TshirtSampleContainer";
import CustomizeTabNavContainer from "../containers/customize-containers/CustomizeTabNavContainer"
import SettingPanelContainer from "../containers/customize-containers/SettingPanelContainer"
import CustomizeButtons from "./CustomizeButtons";

class CustomizePage extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<CustomizeButtons />
				<TshirtSampleContainer />
				<SettingPanelContainer />
				<CustomizeTabNavContainer />
			</div>
		)
	}
}

export default CustomizePage;