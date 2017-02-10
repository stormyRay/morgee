import React from "react";
import {HOT_PICTURE} from "../constants/text";

class HotImages extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="hot-images-container">
				<div className="hot-image-header">
					<h3>{HOT_PICTURE}</h3>
					<span className="right-arrow-icon" />
				</div>
				<div className="hot-image-content"></div>
			</div>
		)
	}
}

export default HotImages;