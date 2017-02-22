import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {MALE_NORMAL, MALE_FIT, FEMALE_LOOSE, FEMALE_NORMAL} from "../constants/texts";

class ClothTypes extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {clothType, swicthClothType} = this.props;
		return (
			<div className="setting-panel-container">
				<Nav bsStyle="pills" justified activeKey={clothType} onSelect={swicthClothType}>
					<NavItem eventKey="male_normal">
						<div className="customize-tab-wrapper">
							<span className="sprite-image male-normal" />
							{MALE_NORMAL}
						</div>
					</NavItem>
					<NavItem eventKey="male_fit">
						<div className="customize-tab-wrapper">
							<span className="sprite-image male-fit" />
							{MALE_FIT}
						</div>
					</NavItem>
					<NavItem eventKey="female_loose">
						<div className="customize-tab-wrapper">
							<span className="sprite-image male-loose" />
							{FEMALE_LOOSE}
						</div>
					</NavItem>
					<NavItem eventKey="female_normal">
						<div className="customize-tab-wrapper">
							<span className="sprite-image female-normal" />
							{FEMALE_NORMAL}
						</div>
					</NavItem>
				</Nav>
			</div>
			)
	}
}

export default ClothTypes;