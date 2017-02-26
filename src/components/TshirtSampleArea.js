import React from "react";
import $ from "jquery";

class TshirtSampleArea extends React.Component{
	constructor(props) {
		super(props);

		this.shirtUrl = "";
		this.wrapperStyle = {};

		this.buildImageSrc = this.buildImageSrc.bind(this);
		this.buildTshirtSrc = this.buildTshirtSrc.bind(this);
		this.computeSize = this.computeSize.bind(this);
		this.computePositionY = this.computePositionY.bind(this);
		this.computeWrapperSize = this.computeWrapperSize.bind(this);
	}

	componentDidMount() {
		this.forceUpdate();
		window.onresize = function(event) {
			this.forceUpdate();
		}.bind(this);
	}

	render(){
		const {clothType, clothColor, imageSize, imagePosition} = this.props.settings;
		const {imageId} = this.props;
		const shirtStyle = {
			backgroundImage: "url(" + this.buildTshirtSrc(clothType, clothColor) +")"
		};
		const imageStyle = {
			backgroundSize: this.computeSize(imageSize) + " auto", 
			backgroundImage: "url(" + this.buildImageSrc(imageId) +")", 
			backgroundPositionY: this.computePositionY(imagePosition)
		};
		
		const wrapperStyle = this.computeWrapperSize();
		
		return (
			<div className="shirt-showing-area">
				<div className="shirt-container">
					<div className="shirt-background" style={shirtStyle} >
						<div className="shirt-area"style={wrapperStyle}>
							<div className="image-wrapper">
								<div className="printed-image" style={imageStyle}>
								</div>
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
		this.shirtUrl = src;

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

	computeWrapperSize(){
		var rawImage = new Image();
		rawImage.src = this.shirtUrl;
		var imageWidth = 600;
		var imageHeight = 740;
		var imageRatio = imageWidth / imageHeight;

		if($(".shirt-background").width()){
		var containerWidth = $(".shirt-background").width();
		var containerHeight = $(".shirt-background").height();
		var containerRatio = containerWidth / containerHeight;
	} else {
		var containerRatio = 1;
	}

		if(imageRatio >= containerRatio){
			return {
					width: "100%",
					height: 100 / imageRatio * containerRatio + "%"
			};
		} else {
			return {
					width: 100 * imageRatio /containerRatio + "%",
					height: "100%"
			};
		}

		// rawImage.onload = function(){
		// 	var imageWidth = rawImage.width;
		// 	var imageHeight = rawImage.height;
		// 	var imageRatio = imageWidth / imageHeight;

		// 	var containerWidth = $(".shirt-background").width();
		// 	var containerHeight = $(".shirt-background").height();
		// 	var containerRatio = containerWidth / containerHeight;

		// 	if(imageRatio >= containerRatio){
		// 		this.setState({
		// 			wrapperStyle:{
		// 				width: "100%",
		// 				height: 100 / imageRatio * containerRatio+ "%"
		// 			}
		// 		});
		// 	} else {
		// 		this.setState({
		// 			wrapperStyle:{
		// 				width: 100 * imageRatio /containerRatio + "%",
		// 				height: "100%"
		// 			}
		// 		});
		// 	}
		// }.bind(this);
	}
}

export default TshirtSampleArea;