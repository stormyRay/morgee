import React from "react";
import Slider from "rc-slider/lib/Slider";
import {LARGE_SIZE, MEDIUM_SIZE, SMALL_SIZE} from "../../constants/texts";

class ImageSize extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			max: 100,
			min: 0,
			step: 1
		};
		this.marks = {
			0: SMALL_SIZE,
			50: MEDIUM_SIZE,
			100: LARGE_SIZE
		};
	}

	render(){
		const {currentSize, changeSize} = this.props;
		return (
			<div className="setting-panel-container">
				<Slider
				    value={currentSize}
				    onChange={changeSize}
				    step={this.state.step}
				    max={this.state.max}
				    min={this.state.min}
				    marks={this.marks} />
			</div>
			)
	}
}

export default ImageSize;