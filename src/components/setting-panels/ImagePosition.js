import React from "react";
import Slider from "rc-slider/lib/Slider";
import {HIGH_POSITION, LOW_POSITION} from "../../constants/texts";

class ImagePosition extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			max: 100,
			min: 0,
			step: 1
		};
		this.marks = {
			0: LOW_POSITION,
			100: HIGH_POSITION
		};
	}

	render(){
		const {currentPosition, changePosition} = this.props;
		return (
			<div className="setting-panel-container">
				<Slider
				    value={currentPosition}
				    onChange={changePosition}
				    step={this.state.step}
				    max={this.state.max}
				    min={this.state.min}
				    marks={this.marks} />
			</div>
			)
	}
}

export default ImagePosition;