import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;
export const forgotAsync = (data) => {
	return api.post(`${url}/api/v1/forgot`, data);
};

export const resetAsync = (data) => {
	const {id, dataReset} = data;

	return api.put(`${url}/api/v1/reset/${id}`, dataReset);
};
