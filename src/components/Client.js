import React,{ Component } from "react";
/*import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";
*/
import { fetchUser }from "../actions/userActions"

import { connect } from "react-redux"
/*@connect((store) =>{
	return {
		user: store.user.user
	}
})
*/

//import reducers from "../reducers/Index.js";

/*const reducer = (state=0, action) => {
	if (action.type === "INC") {
		console.log(`if INC state ${state}`);
		state += action.payload;
	}
	if (action.type === "DEC") {
		console.log(`if DEC state ${state}`);
		state -= action.payload;
	}
	if (action.type === "E") {
		throw new Error("E vich Error!!!");
	}
	console.log(`before return state ${state}`);
	return state;
}*/
/*
const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}*/

/*this is a file*/
/*const userReducer = (state=initialState, action) => {
	switch(action.type){
		case "INC" :{
			setTimeout(()=>{
				console.log(state);
				state = {...state, payload: action.payload+1};
			},3000);
			break;
		}
		case "FETCH_USERS_STARTS" :{
			return {...state, fetching: true};
			break;
		}
		case "FETCH_USERS_ERROR" :{
			return {...state, fetching: false, error: action.payload};
			break;
		}
		case "RECEIVES_USERS" :{
			return {...state, fetching: false, fetched: true, users: action.payload};
			break;
		}
		case "DEC" :{
			state = {...state, payload: action.payload-1};
			break;
		}
		case "CHANGE_NAME" :{
			state = {...state, name: action.payload};
			break;
		}
		case "CHANGE_AGE" :{
			state = {...state, age: action.payload};
			break;
		}
	}
	console.log(state);
	return state;
};*/
/*this is a file*/
/*const tweetsReducer = (state=[], action ) => {
	return state;
};*/

/*this is a bootstrap file of tweet & user*/
/*const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
});*/


/* Middleware loggers */
/*const logger = (store) => (next) => (action) => {
	console.log(`action fired!!!`, action);
	next(action);
}*/
/*const error = (store) => (next) => (action) => {
	try{
		next(action);
	} catch (e){
		console.log(e);
	}
	console.log(`action fired!!!`, action);
}*/

/*const middleware = applyMiddleware(promise(), thunk, logger)

const store = createStore(reducers, middleware)*/

/*store.subscribe(() => {
	console.log(`store changed!!!`,store.getState());
});

store.dispatch({
	type:"FETCH_USERS",
	payload: axios.get("http://rest.learncode.academy/api/wstren/users")
})*/

/*
	without apply middleware
store.dispatch((dispatch) => {
	// async operations
	dispatch({type: "FETCH_USERS_STARTS"})
	axios.get("http://rest.learncode.academy/api/wstren/users")
		.then((response) => {
			console.log(response.status ,response.statusText);
			dispatch({type: "RECEIVES_USERS", payload: response.data})
		})
		.catch((err) => {
			dispatch({type: "FETCH_USERS_ERROR", payload: err})
		});
});
*/
//store.dispatch({type: "INC", payload: 1});
/*store.dispatch({type: "CHANGE_NAME", fname: "Attique"});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "E", payload: 1});
store.dispatch({type: "CHANGE_AGE", age: 19});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "DEC", payload: 1});*/



export default class Client extends Component {
	componentWillMount(){
	
	
		this.setState({
			name:"Rizwan"
		});
	
		/*this.props.dispatch(fetchUser())*/
	}
	render(){
		console.log(this.props.location.pathname);
		console.log(this.props);
		console.log("state ",this.state);
		return(
			<div>
				<h1>Client Js</h1>
			</div>
		)
	}

}