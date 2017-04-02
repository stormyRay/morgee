import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {SELECT_CLOTH_TYPE, SELECT_COLOR, IMAGE_SIZE, IMAGE_POSITION} from "../constants/texts";

class CustomizeImageTabNav extends React.Component {
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
							<div>{SELECT_CLOTH_TYPE}</div>
						</div>
					</NavItem>
					<NavItem eventKey="color">
						<div className="customize-tab-wrapper">
							<span className="sprite cloth-color-icon" />
							<div>{SELECT_COLOR}</div>
						</div>
					</NavItem>
					<NavItem eventKey="size">
						<div className="customize-tab-wrapper">
							<span className="sprite image-size-icon" />
							<div>{IMAGE_SIZE}</div>
						</div>
					</NavItem>
					<NavItem eventKey="position">
						<div className="customize-tab-wrapper">
							<span className="sprite image-position-icon" />
							<div>{IMAGE_POSITION}</div>
						</div>
					</NavItem>
				</Nav>
			</div>
			)
	}
}

export default CustomizeImageTabNav;