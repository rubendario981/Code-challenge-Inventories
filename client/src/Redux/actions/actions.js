import axios from "axios";
const URL = "http://localhost:3000";

export function getUser(id) {
	return async (dispatch) => {
		const response = await axios.get(`${URL}/user/${id}`);
		return dispatch({
			type: "GET_USER",
			payload: response.data,
		});
	};
}

export function createUser() {
	return async (dispatch) => {
		// const response = await axios.get(`${URL}/user`);
		return dispatch({
			type: "CREATE_USER",
			payload: response.data,
		});
	};
}