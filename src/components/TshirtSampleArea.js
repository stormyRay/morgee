import React from "react";
import $ from "jquery";

class TshirtSampleArea extends React.Component{
	constructor(props) {
		super(props);

		this.buildImageSrc = this.buildImageSrc.bind(this);
		this.buildTshirtSrc = this.buildTshirtSrc.bind(this);
		this.computeSize = this.computeSize.bind(this);
		this.computePositionY = this.computePositionY.bind(this);
	}

	render(){
		const {clothType, clothColor, imageSize, imagePosition} = this.props.settings;
		const {imageId} = this.props;
		const shirtStyle = {
			backgroundImage: "url(" + this.buildTshirtSrc(clothType, clothColor)+")"
		};
		const imageStyle = {
			backgroundSize: this.computeSize(imageSize) + " auto", 
			backgroundImage: "url(" + this.buildImageSrc(imageId) +")", 
			backgroundPositionY: this.computePositionY(imagePosition)
		};
		
		return (
			<div className="shirt-showing-area">
				<div className="shirt-container">
					<div className="shirt-background" style={shirtStyle} >
						<div className="image-wrapper">
							<div className="printed-image" style={imageStyle}>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			)
	}

	buildTshirtSrc(type, color){
		var src = "/images/T-shirts/";
		src += type.replace("_", "-");
		src += "/" + color + ".png";

		return src;
	}

	computeSize(size){
		return (50 + (100-50) * size / 100) + "%";
	}

	computePositionY(position){
		return (100 - position) + "%";
	}

	buildImageSrc(id){
		return "/images/" + id + ".jpg";
	}
}

export default TshirtSampleArea;