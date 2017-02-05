import React from "react";
import TypeNavContainer from "../containers/pick-image-containers/TypeNavContainer";

class PickImagePage extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<TypeNavContainer />
				{this.props.children}
			</div>
		)
	}
}

export default PickImagePage;