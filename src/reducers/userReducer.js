import { createStore, combineReducers, applyMiddleware } from "redux";

console.log("userReducer");
export default function userReducer (state={
	user: {
		id: null,
		name: null,
		age: null
	},
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch(action.type){
		case "FETCH_USER" :{
			return {...state, fetching: true};
			break;
		}
		case "FETCH_USERS_REJECTED" :{
			return {...state, fetching: false, error: action.payload};
			break;
		}
		case "FETCH_USER_FULFILLED" :{
			return {...state, fetching: false, fetched:true, user: action.payload};
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
		case "SET_USER_NAME" :{
			return {
				...state,
				user: {	
					...state.user, name:action.payload
				}
			};
			break;
		}
		case "CHANGE_NAME" :{
			return {...state, name: action.payload};
			break;
		}
		case "CHANGE_AGE" :{
			return {...state, age: action.payload};
			break;
		}
	}
	return state;
};