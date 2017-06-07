import { createStore, combineReducers, applyMiddleware } from "redux";

console.log("tweetsReducer");

export default function Reducer (
	state={
		tweets:[],
		fetching: false,
		fetched: false,
		error: null
	}, action ){
		switch(action.type){
			case "FETCH_TWEETS" :{
				return {...state, fetching:true };
				break;
			}
			case "FETCH_TWEETS_REJECTED" :{
				return {...state, fetching: true, error: action.payload};
				break;
			}
			case "FETCH_USERS_ERROR" :{
				return {...state, fetching: false, error: action.payload};
				break;
			}
			case "FETCH_TWEETS_FULFILLED" :{
				return {
					...state,
					fetching: false,
					fetched: true,
					tweets: action.payload
				};
				break;
			}
			case "ADD_TWEETS" :{
				return {
					...state,
					tweets:[ 
							...state.tweets,
							action.payload
						]
				};
				break;
			}
			case "UPDATE_TWEETS" :{
				const { id, text } = action.payload;
				const newTweets = [ ...state.tweets];
				const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id )
				newTweets[tweetToUpdate] = action.payload;
				return {
					...state,
					tweets: newTweets
				};
				break;
			}
			case "DELETE_TWEET" :{
				return {
					...state,
					tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
				};
				break;
			}
		}
		return state;
	};
