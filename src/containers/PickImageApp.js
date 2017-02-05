import React from "react";
import {Provider} from "react-redux";
import PickImagePage from "../components/PickImagePage";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/index";

const store = createStore(reducers, {activeType: "image"},
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
		    		<Route path="/" component={PickImagePage}>
					</Route>
		    	</Router>
			</Provider>
			)
	}
}

export default RootApp;