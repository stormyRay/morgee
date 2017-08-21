import React from "react";
import { browserHistory } from "react-router";
import {mapCategoryPath} from "../constants/methods";

class Category extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		const {src, title, buyInfo, price} = this.props;

		return (
			<div className="category-container" onClick={this.handleClick}>
				<div className="image-wrapper category-image-wrapper">
					<div className="category-thumbnail"  style={{backgroundImage: "url('" + src + "')"}} />
				</div>
				<div className="category-information">
					<div className="top-info">
						<h3 className="category-title">{title}</h3>
						{/*<div className="category-buy-info">{"("+ buyInfo +")"}</div>*/}
					<div className="category-price">{"￥" + price}</div>
					</div>
				</div>
			</div>
		)
	}

	handleClick() {
		const {id} = this.props;
    	location.href = mapCategoryPath(id) + "?stamp=" + (new Date()).getTime();
	}

}

export default Category;
