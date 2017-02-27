import React from "react";
import ImageInSale from "./ImageInSale";

class ImageList extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		var ShowingImages = []
		for(var i =0; i < images.length; i++){
			ShowingImages.push(
				<ImageInSale key={images[i].id} {...images[i]} />
				);
		}
		return (
			<div className="container hot-images-container">
			<!--
				<div className="header hot-image-header">
					<h3>{HOT_PICTURE}<span className="right-arrow-icon" /></h3>
				</div>
			-->
				<div className="hot-image-content">
					{ShowingImages}
					<div className="see-more-panel">
						<div className="see-more-wrapper">
							<span className="see-more-icon" />
							<p>{SEE_MORE}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default ImageList;
