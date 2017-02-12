import React from "react";
import TypeNavContainer from "../containers/pick-image-containers/TypeNavContainer";

import HotImages from "./HotImages";
import ThemeListContainer from "../containers/pick-image-containers/ThemeListContainer";

class PickImagePage extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<TypeNavContainer />
				<HotImages />
				<ThemeListContainer />
				{this.props.children}
			</div>
		)
	}
}

export default PickImagePage;