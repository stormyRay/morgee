import React from "react";
<<<<<<< HEAD
import {HOT_PICTURE, SEE_MORE} from "../constants/texts";
import ImageInSale from "./ImageInSale";
=======
import {HOT_PICTURE} from "../constants/text";
>>>>>>> 763900616e762553d4952b93dda522fe9d4647e7

class HotImages extends React.Component{
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
<<<<<<< HEAD
			<div className="container hot-images-container">
				<div className="header hot-image-header">
					<h3>{HOT_PICTURE}<span className="right-arrow-icon" /></h3>
				</div>
				<div className="hot-image-content">
					{ShowingImages}
					<div className="see-more-panel">
						<span className="see-more-icon" />
						<p>{SEE_MORE}</p>
					</div>
				</div>
=======
			<div className="hot-images-container">
				<div className="hot-image-header">
					<h3>{HOT_PICTURE}</h3>
					<span className="right-arrow-icon" />
				</div>
				<div className="hot-image-content"></div>
>>>>>>> 763900616e762553d4952b93dda522fe9d4647e7
			</div>
		)
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
