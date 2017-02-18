import React from "react";
import {Provider} from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/pickImageIndex";
import PickImagePage from "../components/PickImagePage";
import ImageListContainer from "../containers/pick-image-containers/ImageListContainer";

const store = createStore(reducers, {
	activeType: "image",
	themes:{
		themeList: [],
		page: 0,
		hasMore: true
	},
	gallery: {
		imageList: [],
		page: 0,
		theme: "选择图片",
		hasMore: true
	}
},
    applyMiddleware(thunkMiddleware)
    );

class PickImageApp extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<Provider store={store} key="provider">
		    	<Router history={browserHistory}>
		    		<Route path="/">
		    			<IndexRedirect to="/index" />
		    		</Route>
		    		<Route path="/index" component={PickImagePage}></Route>
		    		<Route path="/theme/:theme" component={ImageListContainer} />
		    		<Route path="/hot" component={ImageListContainer} theme="hot"/>
		    	</Router>
			</Provider>
			)
	}
}

export default PickImageApp;