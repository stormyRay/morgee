import React from "react";
import Category from "./Category";
import TypeNavContainer from "../containers/TypeNavContainer";
import TextCategoriesContainer from "../containers/categories-containers/TextCategoriesContainer";

class CategoryPage extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="categories-container">
				<TypeNavContainer selected="text"/>
				<TextCategoriesContainer />
			</div>
		)
	}
}

export default CategoryPage;
