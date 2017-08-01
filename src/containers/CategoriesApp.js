import React from "react";
import {Provider} from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import "babel-polyfill";
import {wechatAuthorize} from "../constants/methods";
import reducers from "../reducers/categories";
import CategoryPage from "../components/CategoryPage";


const store = createStore(reducers, {
		categories: [],
		activeType: "text"
	},
    applyMiddleware(thunkMiddleware)
    );

class CategoriesApp extends React.Component{
	constructor(props) {
		super(props);
		//Every page entry should do the authorization with Wechat
		wechatAuthorize();
	}

	render(){
		return(
			<Provider store={store} key="provider">
		    	<Router history={browserHistory}>
		    		<Route path="/">
		    			<IndexRedirect to="/index" />
		    		</Route>
		    		<Route path="/index" component={CategoryPage}></Route>
		    	</Router>
			</Provider>
			)
	}
}

export default CategoriesApp;