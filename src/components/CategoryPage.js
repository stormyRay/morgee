import React from "react";
import Category from "./Category";

class CategoryPage extends React.Component{
	constructor(props) {
		super(props);
		this.categoryList = [{
			title: "T恤+图片",
			src: "/images/",
			buyInfo: "200人购买",
			price: "40 + 图片价格"
		},{
			title: "单字中文",
			src: "/images/",
			buyInfo: "200人购买",
			price: "70"
		},{
			title: "多字中文",
			src: "/images/",
			buyInfo: "200人购买",
			price: "70"
		},{
			title: "多词英文",
			src: "/images/",
			buyInfo: "200人购买",
			price: "70"
		},{
			title: "单词英文",
			src: "/images/",
			buyInfo: "200人购买",
			price: "70"
		}];
	}

	render(){
		return(
			<div></div>
		)
	}
}

export default CategoryPage;
