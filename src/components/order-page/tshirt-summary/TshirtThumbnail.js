import React from "react";
import TshirtSampleContainer from "../../../containers/customize-containers/TshirtSampleContainer";
class TshirtThumbnail extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="shirt-thumbnail">
				<TshirtSampleContainer imageId={this.props.imageId} customizeType={this.props.customizeType}/>
			</div>
		)
	}
}

export default TshirtThumbnail;