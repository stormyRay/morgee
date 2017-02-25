import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

import {MAN_NORMAL, MAN_FIT, WOMAN_LOOSE, WOMAN_NORMAL} from "../../constants/texts";

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
							<span className="sprite-image man-normal" />
							{MAN_NORMAL}
						</div>
					</NavItem>
					<NavItem eventKey="man_fit">
						<div className="customize-tab-wrapper">
							<span className="sprite-image man-fit" />
							{MAN_FIT}
						</div>
					</NavItem>
					<NavItem eventKey="woman_loose">
						<div className="customize-tab-wrapper">
							<span className="sprite-image woman-loose" />
							{WOMAN_LOOSE}
						</div>
					</NavItem>
					<NavItem eventKey="woman_normal">
						<div className="customize-tab-wrapper">
							<span className="sprite-image woman-normal" />
							{WOMAN_NORMAL}
						</div>
					</NavItem>
				</Nav>
			</div>
			)
	}
}

export default ClothType;