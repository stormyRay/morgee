import React from "react";

class Theme extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {src, title} = this.props;
		return (
			<div className="theme-container">
				<div className="image-wrapper theme-image-wrapper">
					<img className="theme-image"  src={src} />
				</div>
				<h3 className="theme-title">{title}</h3>
			</div>
		)
	}
}

export default Theme;