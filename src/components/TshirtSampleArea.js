import React from "react";
import $ from "jquery";

class TshirtSampleArea extends React.Component{
	constructor(props) {
		super(props);

		this.shirtUrl = "";
		this.wrapperStyle = {};
		this.mounted = false;

		this.buildImageSrc = this.buildImageSrc.bind(this);
		this.buildTshirtSrc = this.buildTshirtSrc.bind(this);
		this.computeSize = this.computeSize.bind(this);
		this.computePositionY = this.computePositionY.bind(this);
		this.computeWrapperSize = this.computeWrapperSize.bind(this);
	}

	componentDidMount() {
		this.mounted = true;
		//forceUpdate is the method from React to update the component
		this.forceUpdate();
		window.onresize = function(event) {
			if(this.mounted)
				this.forceUpdate();
		}.bind(this);
		const {changeThumbnail, customizeType} = this.props;
		const {thumbnailSrc} = this.props.settings;
		var opts = {};
		if(!thumbnailSrc){
			if(customizeType == "text"){
				opts = {
					textContent: this.props.settings.textContent,
					textFont: this.props.settings.textFont.id,
					textColor: this.props.settings.textColor,
					textType: this.props.textType
				};
			} else if(customizeType == "image"){
				opts = {
					imageId: this.props.imageId
				}
			}
			changeThumbnail(customizeType, opts);
		}
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	render(){
		const {customizeType, clothType, clothColor, imageSize, imagePosition, thumbnailSrc} = this.props.settings;
		const {imageId, selectedSetting} = this.props;

		const shirtStyle = {
			backgroundImage: "url(" + this.buildTshirtSrc(clothType, clothColor) +")"
		};
		let imageStyle = {};
		if(customizeType == "image"){
			imageStyle = {
				backgroundSize: this.computeSize(imageSize), 
				//backgroundImage: "url(" + this.buildImageSrc(imageId) +")", 
				backgroundImage: "url(" + thumbnailSrc || "/images/001.jpg" + ")",
				backgroundPositionY: this.computePositionY(imagePosition)
			};
		} else {
			imageStyle = {
				backgroundSize: this.computeTextSize(this.computeTextChars(this.props.settings.thumbnailContent)), 
				//backgroundImage: "url(" + this.buildImageSrc(imageId) +")", 
				backgroundImage: "url(" + thumbnailSrc || "/images/001.jpg" + ")",
				backgroundPositionY: this.computeTextPositionY(this.computeTextChars(this.props.settings.thumbnailContent))
			};
		}
		const wrapperStyle = this.computeWrapperSize();
		const wrapperClass = ((selectedSetting == "size" || selectedSetting == "position")? (clothColor == "black" ? "image-wrapper bordered grey-bordered" : "image-wrapper bordered") : "image-wrapper");

		return (
			<div className="shirt-showing-area">
				<div className="shirt-container">
					<div className="shirt-background" style={shirtStyle} >
						<div className="shirt-area" style={wrapperStyle}>
							<div className={wrapperClass}>
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
		src += "/" + color + ".jpg";
		this.shirtUrl = src;

		return src;
	}

	computeSize(size){
		const minRatio = 70;
		const maxRatio = 100;
		return (minRatio + (maxRatio-minRatio) * size / 100) + "%" + " auto";
	}

	computePositionY(position){
		return (100 - position) + "%";
	}

	buildImageSrc(id){
		return "/images/" + id + "_medium.png";

		//TEST ONLY
		//return "/images/" + id + ".jpg";
		//END: TEST ONLY
	}

	computeTextChars(string){
		const isCH = (this.props.textType == "single_cn" || this.props.textType == "multiple_cn");
		var charNum = 0;
		string = string || "";
		if(isCH){
			for(let ch of string){
				charNum ++;
			}
			return charNum;
		} else {
			for(let ch of string){
				if(ch == " ")
					charNum ++;
			}
			return ++charNum;
		}
	}

	computeTextSize(chNum){
		const {textType} = this.props;
		switch(textType){
			case "single_cn":
			case "multiple_cn":
				switch(chNum){
					case 1: return "80%";
					case 2: return "60%";
					case 3: return "40%";
					case 4: return "30%";
					case 5: return "25%";
					case 6: return "22%";
					case 7: return "20%";
					default: return "contain";
				};
			case "single_en": return "80%";
			case "multiple_en":
				switch(chNum){
					case 1: return "80%";
					case 2: return "60%";
					case 3: return "50%";
					case 4: return "40%";
					default: return "35%";
				}
			default: return "contain";
		};
	}

	computeTextPositionY(chNum){
		const {textType} = this.props;
		switch(textType){
			case "single_cn":
			case "multiple_cn":
				switch(chNum){
					case 1: return "15%";
					case 2: return "20%";
					case 3: return "25%";
					case 4: return "35%";
					case 5: return "50%";
					default: return "22%";
				};
			case "single_en": return "22%";
			case "multiple_en":
				switch(chNum){
					case 1: 
					case 2: return "20%";
					case 3: return "25%";
					case 4: return "30%";
					default: return "35%";
				}
			default: return "25%";
		};
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