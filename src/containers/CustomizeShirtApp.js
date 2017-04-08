import React from "react";
import {Provider} from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/CustomizeShirtIndex";
import CustomizeImagePage from "../components/CustomizeImagePage";
import CustomizeTextPage from "../components/CustomizeTextPage";
import OrderPageContainer from "./customize-containers/OrderPageContainer";
import SuccessPay from "../components/order-page/SuccessPay";
import {getParameterByName} from "../constants/methods";

const store = createStore(reducers, {
	activeCustomizeTab: "type",
	customizeSettings: {
		clothType: getParameterByName("clothType") || "man_normal",
		clothColor: getParameterByName("clothColor") || "black",
		imageSize: getParameterByName("imageSize") || 50,
		imagePosition: getParameterByName("imagePosition") || 50,
		clothSize: getParameterByName("clothSize") || "XL",
		textContent: getParameterByName("textContent") || "",
		textFont: getParameterByName("textFont") || "1",
		textColor: getParameterByName("textColor") || "white",
		thumbnailSrc: ""
	},
	orderInfo: {
		imageTitle: "占位",//Need to change!!!
		clothDescription: "尺码XXL, 颜色炭黑色，材料：纯棉26支纱",
		imagePrice: 20,
		clothPrice: 60,
		printPrice: 10,
		number: 1
	}
}, applyMiddleware(thunkMiddleware));

class CustimuzeShirtApp extends React.Component{
	constructor(props) {
		super(props);
		this.touchHandlers = {
			xStart: 0,
			yStart: 0,
			//This is for add or remove listener for touchstart/touchmove event to allow/disable user scroll action in mobile device
			touchstartHandler: function(e){
				this.xStart = e.touches[0].screenX;
		    	this.yStart = e.touches[0].screenY;
			},
			touchmoveHandler: function(e){
				var xMovement = Math.abs(e.touches[0].screenX - this.xStart);
			    var yMovement = Math.abs(e.touches[0].screenY - this.yStart);
			    if((yMovement * 3) > xMovement) {
			        e.preventDefault();
			    }
			}
		}
	}

	render(){
		return(
			<Provider store={store} key="provider">
		    	<Router history={browserHistory}>
		    		<Route path="/customize/image/:imageId" component={CustomizeImagePage} touchHandlers={this.touchHandlers}></Route>
		    		<Route path="/customize/text" component={CustomizeTextPage} touchHandlers={this.touchHandlers}></Route>
		    		<Route path="/order/image/:imageId" component={OrderPageContainer} touchHandlers={this.touchHandlers} customizeType="image"></Route>
		    		<Route path="/order/image/:imageId" component={OrderPageContainer} touchHandlers={this.touchHandlers} customizeType="text"></Route>
		    		<Route path="/order/success" component={SuccessPay} touchHandlers={this.touchHandlers}></Route>
		    	</Router>
			</Provider>
			)
	}
}

export default CustimuzeShirtApp;