import axios from "axios";
const URL = import.meta.env.VITE_URL_HOST || "http://localhost:3000";

export function login(data) {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${URL}/user/login`, data);			
			const token = JSON.stringify(response.data)
			localStorage.setItem("token", token)
			dispatch({
				type: "LOGIN",
				payload: JSON.parse(window.atob(token?.split('.')[1]))
			});
			return response
		} catch (error) {
			console.log(error.response);
			return error.response
		}
	};
}

export function createUser(data) {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${URL}/user/signup`, data);
			const token = JSON.stringify(response.data)
			localStorage.setItem("token", token)
			dispatch({
				type: "CREATE_USER",
				payload: JSON.parse(window.atob(token?.split('.')[1]))
			});
			return response
		} catch (error) {
			console.error(error.response);
			return error.response
		}
	};
}

export function createUserAdmin(data, user) {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${URL}/user/create-admin`, {data, user});			
			dispatch({
				type: "CREATE_USER_ADMIN"
			});
			return response
		} catch (error) {
			console.error(error.response);
			return error.response
		}
	};
}

export function identifyUser() {
	return async (dispatch) => {
		try {			
			const token = localStorage.getItem("token")
			dispatch({
				type: "IDENTIFY_USER",
				payload: JSON.parse(window.atob(token?.split('.')[1]))
			});
		} catch (error) {
			console.error(error);
			return error.response
		}
	};
}

export function logout() {
	return async (dispatch) => {
		try {			
			localStorage.setItem("token", "")
			dispatch({
				type: "LOGOUT"
			});
		} catch (error) {
			console.error(error);
		}
	};
}

export function createActive(data) {
	return async (dispatch) => {
		try {
			const response = await axios.post(`${URL}/product/new`, data);
			dispatch({
				type: "CREATE_ACTIVE"
			});
			return response
		} catch (error) {
			console.error("error ",error.response);
			return error.response
		}
	};
}

export function getRecordsById(id) {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${URL}/product/user-record/${id}`);
			dispatch({
				type: "GET_LIST_ACTIVES_BY_USER",
				payload: response.data
			});
			return response
			
		} catch (error) {
			console.error("error ",error.response);
			return error.response

		}
	}
}
