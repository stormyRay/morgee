import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {WHITE_COLOR, BLACK_COLOR, GREY_COLOR} from "../../constants/texts";

class TextColor extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {selectedTextColor, switchTextColor} = this.props;
		return (
			<div className="setting-panel-container">
				<Nav bsStyle="pills" justified activeKey={selectedTextColor} onSelect={switchTextColor}>
					<NavItem eventKey="black">
						<div className="customize-tab-wrapper">
							<span className="sprite black-color" />
							<div>{BLACK_COLOR}</div>
						</div>
					</NavItem>
					<NavItem eventKey="white">
						<div className="customize-tab-wrapper">
							<span className="sprite white-color" />
							<div>{WHITE_COLOR}</div>
						</div>
					</NavItem>
					<NavItem eventKey="grey">
						<div className="customize-tab-wrapper">
							<span className="sprite grey-color" />
							<div>{GREY_COLOR}</div>
						</div>
					</NavItem>
				</Nav>
			</div>
			)
	}
}

export default TextColor;