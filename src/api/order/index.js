import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;

export const postCreateAsync = (data) => {
	return api.post(`${url}/api/v1/order/new`, data);
};
