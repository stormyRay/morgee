import React from "react";
import {IMAGE_LABEL, CLOTH_LABEL, PRINT_LABEL, TOTAL_LABEL} from "../../../constants/texts";
import {clothNameMapping} from "../../../constants/methods";
class TshirtSummary extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {imageTitle, clothType, clothDescription, imagePrice, clothPrice, printPrice} = this.props;
		const totalPrice = imagePrice + clothPrice + printPrice;
		return (
			<div className="shirt-summary">
				<div className="image-summary summary-wrapper summary-content light-bottom-border">
					<div className="summary-label summary-label-image">{IMAGE_LABEL}</div>
					<div className="summary-value">{imageTitle}</div>
					<div className="summary-price">{"￥" + imagePrice.toFixed(2)}</div>
				</div>
				<div className="cloth-summary summary-wrapper  light-bottom-border">
					<div className="summary-content">
						<div className="summary-label summary-label-cloth">{CLOTH_LABEL}</div>
						<div className="summary-value">{clothNameMapping(clothType)}</div>
						<div className="summary-price">{"￥" + clothPrice.toFixed(2)}</div>
					</div>
					<div className="summary-description">{clothDescription}</div>
				</div>
				<div className="print-summary summary-wrapper summary-content  dark-bottom-border">
					<div className="summary-label summary-label-print">{PRINT_LABEL}</div>
					<div className="summary-price">{"￥" + printPrice.toFixed(2)}</div>
				</div>
				<div className="total-summary summary-wrapper summary-content">
					<div className="summary-label summary-label_total">{TOTAL_LABEL}</div>
					<div className="summary-price">{"￥" + totalPrice.toFixed(2)}</div>
				</div>
			</div>
		)
	}
}

export default TshirtSummary;