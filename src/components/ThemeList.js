import React from "react";
import {SEARCH_BY_THEME} from "../constants/texts";
import Theme from "./Theme";

class ThemeList extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const showingThemes = [];
		for(var i = 0; i < themes.length; i++){
			showingThemes.push(<Theme key={themes[i].id} {...themes[i]} />)
		}
		return (
			<div className="container theme-list-container">
				<div className="header theme-list-header">
					<h3>{SEARCH_BY_THEME}</h3>
				</div>
				<div className="theme-list-content">
					{showingThemes}
				</div>
			</div>
		)
	}
}

const themes = [{
	id: 1,
	src: "images/128.jpg",
	title: "一般"
}, {
	id: 2,
	src: "images/114.jpg",
	title: "草"
}, {
	id: 3,
	src: "images/077.jpg",
	title: "火"
}, {
	id: 4,
	src: "images/101.jpg",
	title: "电"
}, {
	id: 5,
	src: "images/055.jpg",
	title: "水"
}, {
	id: 6,
	src: "images/087.jpg",
	title: "冰"
}, {
	id: 7,
	src: "images/080.jpg",
	title: "超能"
}, {
	id: 8,
	src: "images/112.jpg",
	title: "地面"
}, {
	id: 9,
	src: "images/092.jpg",
	title: "幽灵"
}, {
	id: 10,
	src: "images/095.jpg",
	title: "岩石"
}, {
	id: 11,
	src: "images/067.jpg",
	title: "格斗"
}, {
	id: 12,
	src: "images/018.jpg",
	title: "飞行"
}, {
	id: 13,
	src: "images/030.jpg",
	title: "毒"
}, {
	id: 14,
	src: "images/012.jpg",
	title: "虫"
}, {
	id: 15,
	src: "images/148.jpg",
	title: "龙"
}, {
	id: 16,
	src: "images/082.jpg",
	title: "钢"
}, {
	id: 17,
	src: "images/132.jpg",
	title: "恶"
}, {
	id: 18,
	src: "images/035.jpg",
	title: "妖精"
}, {
}]

export default ThemeList;
