import React from "react";
import $ from "jquery";
import TypeNavContainer from "../containers/pick-image-containers/TypeNavContainer";
import HotImagesContainer from "../containers/pick-image-containers/HotImagesContainer";
import ThemeListContainer from "../containers/pick-image-containers/ThemeListContainer";
import {changeTitle} from "../constants/methods"

class PickImagePage extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		changeTitle("选择图片");
	}

	render(){
		return (
			<div>
				<TypeNavContainer />
				<HotImagesContainer />
				<ThemeListContainer />
				{this.props.children}
			</div>
		)
	}
}

export default PickImagePage;