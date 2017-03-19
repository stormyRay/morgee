import React from "react";
import {Provider} from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/CustomizeShirtIndex";
import CustomizePage from "../components/CustomizePage";
import OrderPage from "../components/order-page/OrderPage";

const store = createStore(reducers, {
	activeCustomizeTab: "type",
	customizeSettings: {
		clothType: "man_normal",
		clothColor: "black",
		imageSize: 50,
		imagePosition: 50
	},
	order: {
		imageTitle: "占位",//Need to change!!!
		clothDescription: "尺码XXL, 颜色炭黑色，材料：纯棉26支纱",
		imagePrice: 20,
		clothPrice: 60,
		printPrice: 10
	}
}, applyMiddleware(thunkMiddleware));

class CustimuzeShirtApp extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<Provider store={store} key="provider">
		    	<Router history={browserHistory}>
		    		<Route path="/customize/image/:imageId" component={CustomizePage}></Route>
		    		<Route path="/order/image/:imageId" component={OrderPage}></Route>
		    	</Router>
			</Provider>
			)
	}
}

export default CustimuzeShirtApp;