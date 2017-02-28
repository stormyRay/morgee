import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {SELECT_CLOTH_TYPE, SELECT_COLOR, IMAGE_SIZE, IMAGE_POSITION} from "../constants/texts";

class CustomizeTabNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		const {activeCustomizeTab, swicthTab} = this.props;
		return (
			<div className="customize-tab-nav-container">
				<Nav bsStyle="pills" justified activeKey={activeCustomizeTab} onSelect={swicthTab}>
					<NavItem eventKey="type">
						<div className="customize-tab-wrapper">
							<span className="sprite cloth-type-icon" />
							{SELECT_CLOTH_TYPE}
						</div>
					</NavItem>
					<NavItem eventKey="color">
						<div className="customize-tab-wrapper">
							<span className="sprite cloth-color-icon" />
							{SELECT_COLOR}
						</div>
					</NavItem>
					<NavItem eventKey="size">
						<div className="customize-tab-wrapper">
							<span className="sprite image-size-icon" />
							{IMAGE_SIZE}
						</div>
					</NavItem>
					<NavItem eventKey="position">
						<div className="customize-tab-wrapper">
							<span className="sprite image-position-icon" />
							{IMAGE_POSITION}
						</div>
					</NavItem>
				</Nav>
			</div>
			)
	}
}

export default CustomizeTabNav;