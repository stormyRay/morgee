import React from "react";
import TshirtSampleContainer from "../containers/customize-containers/TshirtSampleContainer";
import CustomizeTabNavContainer from "../containers/customize-containers/CustomizeTabNavContainer"
import SettingPanelContainer from "../containers/customize-containers/SettingPanelContainer"
import CustomizeButtonsContainer from "../containers/customize-containers/CustomizeButtonsContainer";

class CustomizePage extends React.Component{
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
				<CustomizeButtonsContainer imageId={this.props.params.imageId} />
				<TshirtSampleContainer imageId={this.props.params.imageId} />
				<SettingPanelContainer />
				<CustomizeTabNavContainer />
			</div>
		)
	}
}

export default CustomizePage;