import React from "react";
import TshirtSampleContainer from "../containers/customize-containers/TshirtSampleContainer";
import CustomizeTabNavContainer from "../containers/customize-containers/CustomizeTabNavContainer"
import SettingPanelContainer from "../containers/customize-containers/SettingPanelContainer"
import CustomizeButtons from "./CustomizeButtons";

class CustomizePage extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//Disable vertical dragging in the browser
		var xStart, yStart = 0;
 
		document.addEventListener('touchstart',function(e) {
		    xStart = e.touches[0].screenX;
		    yStart = e.touches[0].screenY;
		});
		 
		document.addEventListener('touchmove',function(e) {
		    var xMovement = Math.abs(e.touches[0].screenX - xStart);
		    var yMovement = Math.abs(e.touches[0].screenY - yStart);
		    if((yMovement * 3) > xMovement) {
		        e.preventDefault();
		    }
		});
	}	

	render() {
		return (
			<div className="customize-root">
				<CustomizeButtons />
				<TshirtSampleContainer imageId={this.props.params.imageId} />
				<SettingPanelContainer />
				<CustomizeTabNavContainer />
			</div>
		)
	}
}

export default CustomizePage;