import React from "react";
import {IMAGE_LABEL, TEXT_LABEL, CLOTH_LABEL, PRINT_LABEL, SINGLE_TOTAL_LABEL} from "../../../constants/texts";
import {clothNameMapping} from "../../../constants/methods";
class TshirtSummary extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {customizeType, imageTitle, textContent, textFont, clothType, clothDescription, contentPrice, clothPrice, printPrice} = this.props;
		const contentText = (customizeType == "image") ? imageTitle : (textContent + " (" + textFont.text + ")");
		const totalPrice = contentPrice + clothPrice + printPrice;
		return (
			<div className="shirt-summary">
				<div className="image-summary summary-wrapper summary-content light-bottom-border">
					<div className="summary-label summary-label-image">{customizeType == "image" ? IMAGE_LABEL : TEXT_LABEL}</div>
					<div className="summary-value">{contentText}</div>
					<div className="summary-price">{"￥" + contentPrice.toFixed(2)}</div>
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
					<div className="summary-label summary-label_total">{SINGLE_TOTAL_LABEL}</div>
					<div className="summary-price">{"￥" + totalPrice.toFixed(2)}</div>
				</div>
			</div>
		)
	}
}

export default TshirtSummary;