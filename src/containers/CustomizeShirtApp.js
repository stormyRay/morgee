import React from "react";
import {Provider} from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import "babel-polyfill";
import {wechatAuthorize} from "../constants/methods";
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
		textFont: {
			id: getParameterByName("textFontId") || "1",
			text: getParameterByName("textFontValue") || "字体1"
		},
		textColor: getParameterByName("textColor") || "white",
		thumbnailSrc: "",
		thumbnailContent: ""
	},
	orderInfo: {
		imageTitle: "占位",//Need to change!!!
		clothDescription: "尺码XXL, 颜色炭黑色，材料：纯棉26支纱",
		contentPrice: 20,
		clothPrice: 60,
		printPrice: 10,
		number: 1
	}
}, applyMiddleware(thunkMiddleware));

class CustimuzeShirtApp extends React.Component{
	constructor(props) {
		super(props);
		//Every page entry should do the authorization with Wechat
		wechatAuthorize();
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
		    		<Route path="/customize/text/:textType" component={CustomizeTextPage} touchHandlers={this.touchHandlers}></Route>
		    		<Route path="/order/image/:imageId" component={OrderPageContainer} touchHandlers={this.touchHandlers} customizeType="image"></Route>
		    		<Route path="/order/text/:textType" component={OrderPageContainer} touchHandlers={this.touchHandlers} customizeType="text"></Route>
		    		<Route path="/order/success" component={SuccessPay} touchHandlers={this.touchHandlers}></Route>
		    	</Router>
			</Provider>
			)
	}
}

export default CustimuzeShirtApp;