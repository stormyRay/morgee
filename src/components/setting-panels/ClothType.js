import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {clothNameMapping} from "../../constants/methods";

class ClothType extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {selectedType, switchClothType} = this.props;
		return (
			<div className="setting-panel-container">
				<Nav bsStyle="pills" justified activeKey={selectedType} onSelect={switchClothType}>
					<NavItem eventKey="man_normal">
						<div className="customize-tab-wrapper">
							<span className="sprite man-normal" />
							<div>{clothNameMapping("man_normal")}</div>
						</div>
					</NavItem>
					<NavItem eventKey="man_loose">
						<div className="customize-tab-wrapper">
							<span className="sprite man-loose" />
							<div>{clothNameMapping("man_loose")}</div>
						</div>
					</NavItem>
					<NavItem eventKey="woman_normal">
						<div className="customize-tab-wrapper">
							<span className="sprite woman-normal" />
							<div>{clothNameMapping("woman_normal")}</div>
						</div>
					</NavItem>
					<NavItem eventKey="woman_loose">
						<div className="customize-tab-wrapper">
							<span className="sprite woman-loose" />
							<div>{clothNameMapping("woman_loose")}</div>
						</div>
					</NavItem>
				</Nav>
			</div>
			)
	}
}

export default ClothType;