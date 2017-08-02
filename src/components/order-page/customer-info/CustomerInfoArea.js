import React from "react";
import $ from "jquery";
import "jquery-validation";
import TshirtNumberContainer from "../../../containers/customize-containers/TshirtNumberContainer";
import MailInfo from "./MailInfo";
import ExtraInfo from "./ExtraInfo";
import {CONFIRM_ORDER} from "../../../constants/paths";
class CustomerInfoArea extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$("#customer_info_form").validate({
			rules: {
				customerName: "required",
				telNumber: "required",
				province: "required",
				city: "required",
				district: "required",
				addressDetail: "required"
			}
		})
	}

	render(){
		const {contentPrice, clothPrice, printPrice, imageId, orderNumber, clothType, clothColor, clothSize} = this.props;
		var parameters = {
			imageId: imageId,
			clothType: clothType,
			clothColor: clothColor,
			clothSize: clothSize,
			orderNumber: orderNumber,
			totalPrice: parseFloat((contentPrice + clothPrice + printPrice) * orderNumber)
		}
		var url = CONFIRM_ORDER + "?" + $.param(parameters)
		return (
			<form id="customer_info_form" className="customer-info-wrapper">
				<TshirtNumberContainer />
				<MailInfo />
				<ExtraInfo />
			</form>
		)
	}
}

export default CustomerInfoArea;