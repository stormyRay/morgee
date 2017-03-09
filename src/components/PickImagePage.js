import React from "react";
import $ from "jquery";
import TypeNavContainer from "../containers/pick-image-containers/TypeNavContainer";
import HotImagesContainer from "../containers/pick-image-containers/HotImagesContainer";
import ThemeListContainer from "../containers/pick-image-containers/ThemeListContainer";

class PickImagePage extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		document.title = "选择图片";
		//hack for Wechat browser to change the title
		var $body = $('body');
		var $iframe = $('<iframe src="/favicon.ico" style="display:none;"></iframe>');
		$iframe.on('load',function() {
  			setTimeout(function() {
    			$iframe.off('load').remove();
			}, 0);
		}).appendTo($body);
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