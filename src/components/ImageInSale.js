import React from "react";

class ImageInSale extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {src, title, theme, price} = this.props;
		return (
			<div className="image-in-sale-container" onClick={()=>{alert("I want to buy " + title)}}>
				<div className="image-wrapper image-in-sale-wrapper">
					<img className="image-in-sale"  src={src} />
				</div>
				<div className="image-information">
					<div className="top-info">
						<h3 className="image-title">{title}</h3>
						<div className="image-theme">{theme}</div>
					</div>
					<div className="image-price">{"￥" + price}</div>
				</div>
			</div>
		)
	}
}

export default ImageInSale;
