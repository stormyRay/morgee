import React from "react";
import {SEARCH_BY_THEME} from "../constants/texts";

class ThemeList extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container theme-list-container">
				<div className="header theme-list-header">
					<h3>{SEARCH_BY_THEME}</h3>
				</div>
				<div className="theme-list-content"></div>
			</div>
		)
	}
}

export default ThemeList;
