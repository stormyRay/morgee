import React from "react";
import {Provider} from "react-redux";
import { Router, Route, IndexRedirect, browserHistory } from "react-router";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers/pickImageIndex";
import PickImagePage from "../components/PickImagePage";
import ImageListContainer from "../containers/pick-image-containers/ImageListContainer";

const store = createStore(reducers, {
		categories: []
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
		    	</Router>
			</Provider>
			)
	}
}

export default PickImageApp;