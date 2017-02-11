import React from "react";

class ImageInSale extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
<<<<<<< HEAD
		const {src, title, theme, price} = this.props;
		return (
			<div className="image-in-sale-container" onClick={()=>{alert("I want to buy " + title)}}>
				<div className="image-in-sale-wrapper">
					<img className="image-in-sale"  src={src} />
				</div>
				<div className="image-information">
					<div className="top-info">
						<h3 className="image-title">{title}</h3>
						<div className="image-theme">{theme}</div>
					</div>
					<div className="image-price">{"￥" + price}</div>
				</div>
=======
		const {header} = this.props;
		return (
			<div className="image-in-sale-container">
				<div className="image-in-sale-header">
					<h3>header</h3>
				</div>
				<div className="image-in-sale-content"></div>
>>>>>>> 763900616e762553d4952b93dda522fe9d4647e7
			</div>
		)
	}
}

export default ImageInSale;
