import React from "react";
import {Provider} from "react-redux";
import App from "../components/App";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/index";

const store = createStore(reducers, {dancers: []},
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
		    		<Route path="/" component={App}>
					</Route>
		    	</Router>
			</Provider>
			)
	}
}

export default RootApp;