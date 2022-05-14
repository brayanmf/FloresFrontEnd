import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;
export const putUpdateAsync = (data) => {
	const config = {headers: {"Content-Type": "multipart/form-data"}};

	return api.put(`${url}/user/me/update`, data, config);
};
