import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {IMAGE_AND_TSHIRT, TEXT_AND_TSHIRT} from "../constants/texts";

class TypeNav extends React.Component {
	constructor(props) {
		super(props);
		this.jumpPage = this.jumpPage.bind(this);
	}

	componentDidMount() {
		const {selected, swicthType} = this.props;
		if(selected){
			swicthType(selected);
		}
	}

	render(){
		const {activeType} = this.props;
		return (
			<Nav bsStyle="pills" justified activeKey={activeType} onSelect={this.jumpPage}>
				<NavItem eventKey="text">{TEXT_AND_TSHIRT}</NavItem>
				<NavItem eventKey="image">{IMAGE_AND_TSHIRT}</NavItem>
			</Nav>
			)
	}

	jumpPage(value){
		const {activeType} = this.props;
		if(activeType != value){
			if(value == "image")
				location.href = `/gallery/index`;
			else if(value == "text")
				location.href = `/index`;
		}
	}
}

export default TypeNav;