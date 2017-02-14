import React from "react";
import {Provider} from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/index";
import PickImagePage from "../components/PickImagePage";
import ImageListContainer from "../containers/pick-image-containers/ImageListContainer";

const store = createStore(reducers, {
	activeType: "image",
	themes:{
		themeList: [],
		page: 0,
		hasMore: true
	}
},
    applyMiddleware(thunkMiddleware)
    );

class RootApp extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<Provider store={store} key="provider">
		    	<Router history={browserHistory}>
		    		<Route path="/" component={PickImagePage}></Route>
		    		<Route path="/theme/:theme" conponent={ImageListContainer} />
		    		<Route path="/hot" component={ImageListContainer} theme="hot"/>
		    	</Router>
			</Provider>
			)
	}
}

export default RootApp;