export function fetchUser() {
	return{
		type: "FETCH_USER_FULFILLED",
		payload: {
			name: "Rizwan",
			age: 24
		}
	}
}
export function setUserName(name) {
	return{
		type: "SET_USER_NAME",
		payload: name
	}
}
export function setUserAge() {
	return{
		type: "SET_USER_AGE",
		payload: age
	}
}