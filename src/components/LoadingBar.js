import React from "react";
import {LOADING} from "../constants/texts";

class Theme extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="loading-bar" >
				<span className="sprite sprite-loading" />
				<div>{LOADING}</div>
			</div>
		)
	}
}

export default Theme;