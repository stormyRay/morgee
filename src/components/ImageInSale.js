import React from "react";

class ImageInSale extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const {header} = this.props;
		return (
			<div className="image-in-sale-container">
				<div className="image-in-sale-header">
					<h3>header</h3>
				</div>
				<div className="image-in-sale-content"></div>
			</div>
		)
	}
}

export default ImageInSale;