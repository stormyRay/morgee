import React from "react";
import TshirtSampleContainer from "../../../containers/customize-containers/TshirtSampleContainer";
class TshirtThumbnail extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div className="shirt-thumbnnail">
				<TshirtSampleContainer imageId={this.props.params.imageId} />
			</div>
		)
	}
}

export default TshirtThumbnail;