import React from "react";
import {Provider} from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/CustomizeShirtIndex";
import CustomizePage from "../components/CustomizePage";

const store = createStore(reducers, {},
    applyMiddleware(thunkMiddleware)
    );

class CustimuzeShirtApp extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<Provider store={store} key="provider">
		    	<Router history={browserHistory}>
		    		<Route path="/customize" component={CustomizePage}></Route>
		    	</Router>
			</Provider>
			)
	}
}

export default CustimuzeShirtApp;