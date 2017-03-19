import React from "react";
import { connect } from "react-redux";
import $ from "jquery";
import InfiniteScroll from "react-infinite-scroller";
import ImageInSale from "../../components/ImageInSale";
import LoadingBar from "../../components/LoadingBar";
import {imagesAndThemes} from "../../actions/pickImageIndex";
import {changeTitle} from "../../constants/methods";

class ImageList extends React.Component{
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const {clearImageList} = imagesAndThemes;
		if(this.props.gallery.imageList.length > 0)
			this.props.dispatch(clearImageList());
	}

	componentWillUpdate(nextProps, nextState) {
		changeTitle(nextProps.gallery.theme);
	}

	render() {
		const {gallery, dispatch} = this.props;
		const {imageList, hasMore, page, theme} = gallery;
		const {getImages} = imagesAndThemes;
		const themeId = this.props.params.theme || this.props.route.theme;
		var ShowingImages = [];
		for(var i =0; i < imageList.length; i++){
			ShowingImages.push(
				<ImageInSale key={imageList[i].id} inList={true} {...imageList[i]} />
				);
		}
		return (
			<div className="container images-list-container">
				<div className="image-list-content">
					<InfiniteScroll hasMore={hasMore} loadMore={() => {dispatch(getImages(page, themeId))}} loader={<LoadingBar />}>
						{ShowingImages}
					</InfiniteScroll>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    gallery: state.gallery
  }
}

const ImageListContainer = connect(
  mapStateToProps
)(ImageList)



export default ImageListContainer;
