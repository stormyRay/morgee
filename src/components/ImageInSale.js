import React from "react";
import { browserHistory } from "react-router";

class ImageInSale extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		const {id, src, title, theme, price} = this.props;
		return (
			<div className="image-in-sale-container" onClick={this.handleClick}>
				<div className="image-wrapper image-in-sale-wrapper">
					<img className="image-in-sale"  style={{backgroundImage: "url('" + src + "')"}} />
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

	handleClick() {
		const {id} = this.props;
		const path = `/customize/image/${id}`;
    	location.href = path;
	}

}

export default ImageInSale;
