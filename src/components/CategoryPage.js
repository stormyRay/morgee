import React from "react";
import Category from "./Category";

class CategoryPage extends React.Component{
	constructor(props) {
		super(props);
		this.categoryList = [{
			id: "image",
			title: "T恤+图片",
			src: "/images/",
			buyInfo: "200人购买",
			price: "40 + 图片价格"
		},{
			id: "single_cn",
			title: "单字中文",
			src: "/images/",
			buyInfo: "200人购买",
			price: "70"
		},{
			id: "multiple_cn",
			title: "多字中文",
			src: "/images/",
			buyInfo: "200人购买",
			price: "70"
		},{
			id: "multiple_en",
			title: "多词英文",
			src: "/images/",
			buyInfo: "200人购买",
			price: "70"
		},{
			id: "single_en",
			title: "单词英文",
			src: "/images/",
			buyInfo: "200人购买",
			price: "70"
		}];
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
			<div className="categories_container">
				{list}
			</div>
		)
	}
}

export default CategoryPage;
