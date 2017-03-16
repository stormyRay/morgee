import React from "react";
import TshirtThumbnail from "./TshirtThumbnail";
import TshirtSummary from "./TshirtSummary";

class TshirtSummaryArea extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<TshirtThumbnail />
				<TshirtSummary />
			</div>
		)
	}
}

export default OrderPage;