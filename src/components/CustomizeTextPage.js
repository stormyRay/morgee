import React from "react";
import TshirtSampleContainer from "../containers/customize-containers/TshirtSampleContainer";
import CustomizeTextTabNavContainer from "../containers/customize-containers/CustomizeTextTabNavContainer"
import SettingPanelContainer from "../containers/customize-containers/SettingPanelContainer"
import CustomizeButtonsContainer from "../containers/customize-containers/CustomizeButtonsContainer";

class CustomizeTextPage extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		document.addEventListener('touchstart', this.props.route.touchHandlers.touchstartHandler);
		document.addEventListener('touchmove', this.props.route.touchHandlers.touchmoveHandler);
	}	

	render() {
		return (
			<div className="customize-root">
				<CustomizeButtonsContainer textContent={this.props.params.textContent} customizeType="text"/>
				<TshirtSampleContainer customizeType="text"/>
				<SettingPanelContainer />
				<CustomizeTextTabNavContainer />
			</div>
		)
	}
}

export default CustomizeTextPage;