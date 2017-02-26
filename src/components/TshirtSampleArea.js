import React from "react";

class TshirtSampleArea extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {clothType, clothColor, imageSize, imagePosition} = this.props.settings;
		return (
			<div className="tshirt-showing-area">
				<p>{"Cloth Type: " + clothType}</p>
				<p>{"Cloth Color: " + clothColor}</p>
				<p>{"Image Size: " + imageSize}</p>
				<p>{"Image Position: " + imagePosition}</p>
			</div>
			)
	}
}

export default TshirtSampleArea;