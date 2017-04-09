import React from "react";
import TshirtThumbnail from "./TshirtThumbnail";
import TshirtSummaryContainer from "../../../containers/customize-containers/TshirtSummaryContainer";

class TshirtSummaryArea extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="shirt-info-summary-container">
				<TshirtThumbnail imageId={this.props.imageId} customizeType={this.props.customizeType}/>
				<TshirtSummaryContainer />
			</div>
		)
	}
}

export default TshirtSummaryArea;