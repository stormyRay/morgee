import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {WHITE_COLOR, BLACK_COLOR, GREY_COLOR} from "../../constants/texts";

class ClothColor extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {selectedColor, switchClothColor} = this.props;
		return (
			<div className="setting-panel-container">
				<Nav bsStyle="pills" justified activeKey={selectedColor} onSelect={switchClothColor}>
					<NavItem eventKey="white">
						<div className="customize-tab-wrapper">
							<span className="sprite white-color" />
							{WHITE_COLOR}
						</div>
					</NavItem>
					<NavItem eventKey="black">
						<div className="customize-tab-wrapper">
							<span className="sprite black-color" />
							{BLACK_COLOR}
						</div>
					</NavItem>
					<NavItem eventKey="grey">
						<div className="customize-tab-wrapper">
							<span className="sprite grey-color" />
							{GREY_COLOR}
						</div>
					</NavItem>
				</Nav>
			</div>
			)
	}
}

export default ClothColor;