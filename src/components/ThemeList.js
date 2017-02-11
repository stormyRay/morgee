import React from "react";
<<<<<<< HEAD
import {SEARCH_BY_THEME} from "../constants/texts";
=======
import {SEARCH_BY_THEME} from "../contsants/text";
>>>>>>> 763900616e762553d4952b93dda522fe9d4647e7

class ThemeList extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
<<<<<<< HEAD
			<div className="container theme-list-container">
				<div className="header theme-list-header">
=======
			<div className="theme-list-container">
				<div className="theme-list-header">
>>>>>>> 763900616e762553d4952b93dda522fe9d4647e7
					<h3>{SEARCH_BY_THEME}</h3>
				</div>
				<div className="theme-list-content"></div>
			</div>
		)
	}
}

export default ThemeList;
