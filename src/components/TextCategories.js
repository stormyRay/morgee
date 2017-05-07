import React from "react";
import Category from "./Category";

class TextCategories extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {getCategories} = this.props;
		getCategories(); 
	}

	render(){
		const {categories} = this.props;
		var list = [];
		for (var i = 0; i < categories.length; i ++){
			list.push(<Category key={categories[i].id} {...categories[i]} />)
		}
		return(
			<div className="text-categories-container">
				{list}
			</div>
		)
	}
}

export default TextCategories;
