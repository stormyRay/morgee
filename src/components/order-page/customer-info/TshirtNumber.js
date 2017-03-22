import React from "react";
import {COUNT_LABEL} from "../../../constants/texts";
class TshirtNumber extends React.Component{
	constructor(props) {
		super(props);
		this.handlePlus = this.handlePlus.bind(this);
		this.handleMinus = this.handleMinus.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	render(){
		const {orderNumber} = this.props;
		return (
			<div className="shirt-number-area order-info-area order-info-wrapper">
				<div className="order-label">{COUNT_LABEL}</div>
				<div className="order-number-input-area">
					<button className="minus-button" type="button" onClick={this.handleMinus}>-</button>
					<input className="order-number-input" type="text" pattern="[0-9]*" value={orderNumber} onChange={this.handleChange} onBlur={this.handleBlur}></input>
					<button className="plus-button" type="button" onClick={this.handlePlus}>+</button>
				</div>
			</div>
		)
	}

	handleChange(e){
		const {updateOrderNumber} = this.props;
		updateOrderNumber(e.target.value);
		
	}

	handleBlur(e){
		const {updateOrderNumber} = this.props;
		updateOrderNumber(Math.max(1, e.target.value));
	}

	handleMinus(e){
		const {orderNumber, updateOrderNumber} = this.props;
		var number = orderNumber - 1;
		updateOrderNumber(Math.max(1, number));
	}

	handlePlus(e){
		const {orderNumber, updateOrderNumber} = this.props;
		var number = orderNumber + 1;
		updateOrderNumber(Math.max(1, number));
	}
}

export default TshirtNumber;