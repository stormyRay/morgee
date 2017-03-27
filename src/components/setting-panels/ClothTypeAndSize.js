import React from "react";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import DropdownButton from "react-bootstrap/lib/DropdownButton";
import MenuItem from "react-bootstrap/lib/MenuItem";

import {clothNameMapping} from "../../constants/methods";

class ClothTypeAndSize extends React.Component{
	constructor(props) {
		super(props);
		this.sizeGroup = {
			"man": ["S", "M", "L", "XL", "XXL"],
			"woman": ["S", "M", "L", "XL"]
		};
		this.sizeMapping = {
			"man": {"S": "", "M": "", "L": ""},
			"woman": {"S": "", "M": "", "L": ""}
		};
		this.generateSizeList = this.generateSizeList.bind(this);
	}

	render(){
		const {selectedType, selectedSize, switchClothType} = this.props;
		const typeInSex = selectedType.substring(0, selectedType.indexOf("_"))
		return (
			<div className="setting-panel-container">
				<ButtonToolbar>
					<DropdownButton componentClass="setting-panel-dropdup" title={clothNameMapping(selectedType)} dropup>
						<MenuItem eventKey="man_normal">{clothNameMapping("man_normal")}</MenuItem>
						<MenuItem eventKey="man_loose">{clothNameMapping("man_loose")}</MenuItem>
						<MenuItem eventKey="woman_normal">{clothNameMapping("woman_normal")}</MenuItem>
						<MenuItem eventKey="woman_loose">{clothNameMapping("woman_loose")}</MenuItem>
					</DropdownButton>
				</ButtonToolbar>
				<ButtonToolbar>
					<DropdownButton componentClass="setting-panel-dropdup" title={this.sizeMapping[typeInSex][selectedSize]} dropup>
						{this.generateSizeList(typeInSex)}
					</DropdownButton>
				</ButtonToolbar>
			</div>
			)
	}

	generateSizeList(sex){
		var sizeList = [];
		this.sizeGroup[sex].map(function(key){
			sizeList.push(<MenuItem eventKey={key}>{this.sizeMapping[sex][key]}</MenuItem>);
		});

		return sizeList;
	}
}

export default ClothTypeAndSize;