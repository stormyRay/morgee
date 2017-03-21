import React from "react";
import {COUNT_LABEL} from "../../../constants/texts";
class TshirtNumber extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: 1
		};
		this.handlePlus = this.handlePlus.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	render(){
		return (
			<div className="shirt-number-area order-info-area order-info-wrapper">
				<div className="order-label">{COUNT_LABEL}</div>
				<div className="order-number-input-area">
					<button className="minus-button" onClick={this.handleMinus}>-</button>
					<input className="order-number-input" type="text" pattern="[0-9]*" value={this.state.value} onChange={this.handleChange} onBlur={this.handleBlur}></input>
					<button className="plus-button" onClick={this.handlePlus}>+</button>
				</div>
			</div>
		)
	}

	handleChange(e){
		this.setState({
			value: e.target.value
		});
		
	}

	handleBlur(e){
		this.setState({
			value: Math.max(1, e.target.value)
		});
	}

	handleMinus(e){
		this.setState({
			value: Math.max(--this.state.value, 1)
		});
	}

	handlePlus(e){
		this.setState({
			value: ++this.state.value
		});
	}
}

export default TshirtNumber;