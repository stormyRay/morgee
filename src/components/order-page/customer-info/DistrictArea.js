import React from "react";
import $ from "jquery";
import "distpicker";
import {MAIL_AREA} from "../../../constants/texts";
class DistrictArea extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$(".district-info-wrapper").distpicker({
			province: "选择省",
			city: "选择城市",
			district: "选择地区"
		});
	}

	render(){
		return (
			<div className="district-info-area order-info-area">
				<div className="order-label">{MAIL_AREA}</div>
				<div className="district-info-wrapper">
					<select className="province-select"></select>
					<select className="city-select"></select>
					<select className="district-select"></select>
				</div>
			</div>
		)
	}
}

export default DistrictArea;