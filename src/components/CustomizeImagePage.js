import React from "react";
import TshirtSampleContainer from "../containers/customize-containers/TshirtSampleContainer";
import CustomizeImageTabNavContainer from "../containers/customize-containers/CustomizeImageTabNavContainer"
import SettingPanelContainer from "../containers/customize-containers/SettingPanelContainer"
import CustomizeButtonsContainer from "../containers/customize-containers/CustomizeButtonsContainer";

class CustomizeImagePage extends React.Component{
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
				<CustomizeImageTabNavContainer />
			</div>
		)
	}
}

export default CustomizeImagePage;