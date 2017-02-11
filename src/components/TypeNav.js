import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {IMAGE_AND_TSHIRT, TEXT_AND_TSHIRT} from "../constants/texts";

class TypeNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		const {activeType, swicthType} = this.props;
		return (
			<Nav bsStyle="pills" justified activeKey={activeType} onSelect={swicthType}>
				<NavItem eventKey="image">{IMAGE_AND_TSHIRT}</NavItem>
				<NavItem eventKey="text">{TEXT_AND_TSHIRT}</NavItem>
			</Nav>
			)
	}
}

export default TypeNav;