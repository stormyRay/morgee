import React from "react";
import { browserHistory } from "react-router";
import {HOT_PICTURE, SEE_MORE} from "../constants/texts";
import ImageInSale from "./ImageInSale";
import {ImagesAndThemes} from "../actions/pickImageIndex";

class HotImages extends React.Component{
	constructor(props) {
		super(props);
		this.handleClickSeeMore = this.handleClickSeeMore.bind(this);
	}

	componentDidMount() {
		const {getHotImages} = this.props;
		getHotImages();
	}

	render() {
		var ShowingImages = []
		const {hotImages} = this.props;
		for(var i =0; i < hotImages.length; i++){
			ShowingImages.push(
				<ImageInSale key={hotImages[i].id} {...hotImages[i]} />
				);
		}
		return (
			<div className="container hot-images-container">
				<div className="header hot-image-header">
					<h3 className="hot-image-title" onClick={this.handleClickSeeMore}>
						{HOT_PICTURE}
					</h3>
					<span className="sprite sprite-left-arrow-black" onClick={this.handleClickSeeMore} />
				</div>
				<div className="hot-image-content">
					{ShowingImages}
					<div className="see-more-panel">
						<div className="see-more-wrapper" onClick={this.handleClickSeeMore}>
							<span className="sprite sprite-next-black" />
							<p>{SEE_MORE}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}

	handleClickSeeMore() {
		const path = "/hot"
    	browserHistory.push(path);
	}
}

const images = [{
	id: "094",
	src: "images/094.jpg",
	title: "耿鬼",
	theme: "幽灵",
	price: 0.3
}, {
	id: "006",
	src: "images/006.jpg",
	title: "喷火龙",
	theme: "火",
	price: 0.3
}, {
	id: "149",
	src: "images/149.jpg",
	title: "快龙",
	theme: "龙",
	price: 0.3
}, {
	id: "025",
	src: "images/025.jpg",
	title: "皮卡丘",
	theme: "电",
	price: 0.2
}, {
	id: "142",
	src: "images/142.jpg",
	title: "化石翼龙",
	theme: "岩石",
	price: 0.1
}, {
	id: "130",
	src: "images/130.jpg",
	title: "暴鲤龙",
	theme: "水",
	price: 0.2
}, {
	id: "065",
	src: "images/065.jpg",
	title: "胡地",
	theme: "超能",
	price: 0.3
}]

export default HotImages;
