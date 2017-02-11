import React from "react";
import TypeNavContainer from "../containers/pick-image-containers/TypeNavContainer";

import HotImages from "./HotImages";
import ThemeList from "./ThemeList";

class PickImagePage extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<TypeNavContainer />
				<HotImages />
				<ThemeList />
				{this.props.children}
			</div>
		)
	}
}

export default PickImagePage;