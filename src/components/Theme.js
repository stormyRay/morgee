import React from "react";
import { browserHistory } from "react-router";

class Theme extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		const {src, title, background} = this.props;
		const wrapperClass = "image-wrapper theme-image-wrapper " + background;
		return (
			<div className="theme-container" onClick={this.handleClick}>
				<div className="image-wrapper theme-image-wrapper">
					<div className="theme-image" style={{backgroundImage: "url('" + src + "')"}} />
				</div>
				<h3 className="theme-title">{title}</h3>
			</div>
		)
	}

	handleClick() {
		const {id} = this.props;
		const path = `/gallery/theme/${id}`;
    	browserHistory.push(path);
	}
}

export default Theme;