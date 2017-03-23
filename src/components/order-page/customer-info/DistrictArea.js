import React from "react";
import $ from "jquery";
import "distpicker";
import {MAIL_AREA, SELECT_PROVINCE_PLACEHOLDER, SELECT_CITY_PLACEHOLDER, SELECT_DISTRICT_PLACEHOLDER} from "../../../constants/texts";
class DistrictArea extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$(".district-info-wrapper").distpicker({
			province: SELECT_PROVINCE_PLACEHOLDER,
			city: SELECT_CITY_PLACEHOLDER,
			district: SELECT_DISTRICT_PLACEHOLDER
		});
	}

	render(){
		return (
			<div className="district-info-area order-info-area">
				<div className="order-label">{MAIL_AREA}</div>
				<div className="district-info-wrapper">
					<select className="province-select" name="province"></select>
					<select className="city-select" name="city"></select>
					<select className="district-select" name="district"></select>
				</div>
			</div>
		)
	}
}

export default DistrictArea;