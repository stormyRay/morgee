import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {SELECT_CLOTH_TYPE, SELECT_COLOR, TEXT_CONTENT, TEXT_FONT, TEXT_COLOR} from "../constants/texts";

class CustomizeTextTabNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		const {activeCustomizeTab, swicthTab} = this.props;
		return (
			<div className="customize-tab-nav-container text">
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
					<NavItem eventKey="text_content">
						<div className="customize-tab-wrapper">
							<span className="sprite text-content-icon" />
							<div>{TEXT_CONTENT}</div>
						</div>
					</NavItem>
					<NavItem eventKey="text_font">
						<div className="customize-tab-wrapper">
							<span className="sprite text-font-icon" />
							<div>{TEXT_FONT}</div>
						</div>
					</NavItem>
					{/*<NavItem eventKey="text_color">
						<div className="customize-tab-wrapper">
							<span className="sprite text-color-icon" />
							<div>{TEXT_COLOR}</div>
						</div>
					</NavItem>*/}
				</Nav>
			</div>
			)
	}
}

export default CustomizeTextTabNav;