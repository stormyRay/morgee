import React from "react";

class Theme extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="loading-bar" >
				<span className="sprite sprite-loading" />
				Loading...
			</div>
		)
	}
}

export default Theme;