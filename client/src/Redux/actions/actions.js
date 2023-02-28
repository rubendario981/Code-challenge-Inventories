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

export function createUser(data) {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${URL}/user`, data);
			dispatch({
				type: "CREATE_USER",
				payload: response.data,
			});
			console.log(response);
			return response
		} catch (error) {
			console.error(error.response);
			return error.response
		}
	};
}