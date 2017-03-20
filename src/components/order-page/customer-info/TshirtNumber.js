import React from "react";
import {COUNT_LABEL} from "../../../constants/texts";
class TshirtNumber extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: 1
		};
	}

	render(){
		return (
			<div className="shirt-number-area order-info-area order-info-wrapper">
				<div className="order-label">{COUNT_LABEL}</div>
				<div className="order-number-input-area">
					<button className="minus-button">-</button>
					<input className="order-number-input" value={this.state.value}></input>
					<button className="plus-button">+</button>
				</div>
			</div>
		)
	}
}

export default TshirtNumber;