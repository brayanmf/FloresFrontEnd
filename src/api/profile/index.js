import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;
export const updateAsync = (data) => {
	const config = {headers: {"Content-Type": "multipart/form-data"}};

	return api.put(`${url}/api/v1/user/me/update`, data, config);
};

export const updatePasswordAsync = (data) => {
	return api.put(`${url}/api/v1/password/update`, data);
};
