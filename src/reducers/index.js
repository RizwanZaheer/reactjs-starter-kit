import { combineReducers } from "redux";

import user from "./userReducer";
import tweets from "./tweetsReducer";

console.log("combineReducers");

export default combineReducers({
	user,
	tweets
});