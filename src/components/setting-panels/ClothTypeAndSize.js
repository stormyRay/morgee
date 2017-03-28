import React from "react";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";

import {MAN_SIZE_S_TEXT,  MAN_SIZE_M_TEXT, MAN_SIZE_L_TEXT, MAN_SIZE_XL_TEXT, MAN_SIZE_XXL_TEXT, WOMAN_SIZE_S_TEXT, WOMAN_SIZE_M_TEXT, WOMAN_SIZE_L_TEXT, WOMAN_SIZE_XL_TEXT} from "../../constants/texts";
import {clothNameMapping} from "../../constants/methods";

class ClothTypeAndSize extends React.Component{
	constructor(props) {
		super(props);
		this.sizeGroup = {
			"man": ["S", "M", "L", "XL", "XXL"],
			"woman": ["S", "M", "L", "XL"]
		};
		this.sizeMapping = {
			"man": {"S": MAN_SIZE_S_TEXT, "M": MAN_SIZE_M_TEXT, "L": MAN_SIZE_L_TEXT, "XL": MAN_SIZE_XL_TEXT, "XXL": MAN_SIZE_XXL_TEXT, defaultSize: "L"},
			"woman": {"S": WOMAN_SIZE_S_TEXT, "M": WOMAN_SIZE_M_TEXT, "L": WOMAN_SIZE_L_TEXT, "XL": WOMAN_SIZE_XL_TEXT, defaultSize: "M"}
		};
		this.generateSizeList = this.generateSizeList.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const currentType = this.props.selectedType;
		const newType = nextProps.selectedType;
		const currentSex = currentType.substring(0, currentType.indexOf("_"));
		const newSex = newType.substring(0, newType.indexOf("_"));
		if(currentSex != newSex){
			const {switchClothSize} = this.props;
			switchClothSize(this.sizeMapping[newSex].defaultSize);
		}
	}

	render(){
		const {selectedType, selectedSize, switchClothType, switchClothSize} = this.props;
		const typeInSex = selectedType.substring(0, selectedType.indexOf("_"));
		return (
			<div className="setting-panel-container type-size-container">
				<ButtonToolbar bsClass="selector-wrapper btn-toolbar">
					<DropdownButton id="cloth_type_dropdown" bsClass="setting-panel-dropdup dropdown" title={clothNameMapping(selectedType)} dropup onSelect={(eventKey, e) =>switchClothType(eventKey)}>
						<MenuItem eventKey="man_normal">{clothNameMapping("man_normal")}</MenuItem>
						<MenuItem eventKey="man_loose">{clothNameMapping("man_loose")}</MenuItem>
						<MenuItem eventKey="woman_normal">{clothNameMapping("woman_normal")}</MenuItem>
						<MenuItem eventKey="woman_loose">{clothNameMapping("woman_loose")}</MenuItem>
					</DropdownButton>
				</ButtonToolbar>
				<ButtonToolbar bsClass="selector-wrapper btn-toolbar">
					<DropdownButton id="cloth_size_dropdown" bsClass="setting-panel-dropdup dropdown" title={this.sizeMapping[typeInSex][selectedSize] || ""} dropup onSelect={(eventKey, e) =>switchClothSize(eventKey)}>
						{this.generateSizeList(typeInSex)}
					</DropdownButton>
				</ButtonToolbar>
			</div>
			)
	}

	generateSizeList(sex){
		const {switchClothSize} = this.props;
		var sizeList = [];
		this.sizeGroup[sex].map(function(key){
			sizeList.push(<MenuItem eventKey={key} key={key}>{this.sizeMapping[sex][key]}</MenuItem>);
		}.bind(this));

		return sizeList;
	}
}

export default ClothTypeAndSize;