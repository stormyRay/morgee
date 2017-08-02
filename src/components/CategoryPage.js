import React from "react";
import Category from "./Category";
import TypeNavContainer from "../containers/TypeNavContainer";
import TextCategoriesContainer from "../containers/categories-containers/TextCategoriesContainer";
import $ from "jquery";

class CategoryPage extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.updateCategoriesSize();
		window.onresize = function(event) {
			this.updateCategoriesSize();
		}.bind(this);
	}

	render(){
		return(
			<div className="categories-container">
				{/*<TypeNavContainer selected="text"/>*/}
				<TextCategoriesContainer />
			</div>
		)
	}

	updateCategoriesSize(){
		var $wrappers = $(".category-container .image-wrapper");
		$wrappers.each(function(){
			var wrapper = $(this);
			wrapper.height(wrapper.width() * 20 / 17);
		});
	}
}

export default CategoryPage;
