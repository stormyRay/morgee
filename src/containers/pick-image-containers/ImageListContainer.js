import React from "react";
import { connect } from "react-redux";
import ImageInSale from "../../components/ImageInSale";

class ImageList extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {themes} = this.props;
		const {themeList} = themes;
		var themeId = parseInt(this.props.params.theme) || -1;
		var ShowingImages = [];
		for(var i =0; i < themeList.length; i++){
			if(themeList[i].id > themeId)
			ShowingImages.push(
				<ImageInSale key={themeList[i].id} {...themeList[i]} />
				);
		}
		return (
			<div className="container hot-images-container">
				<div className="hot-image-content">
					{ShowingImages}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    themes: state.themes
  }
}

const ImageListContainer = connect(
  mapStateToProps
)(ImageList)



export default ImageListContainer;
