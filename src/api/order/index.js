import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;

export const postCreateAsync = (data) => {
	return api.post(`${url}/api/v1/order/new`, data);
};

export const getOrderAsync = () => {
	return api.get(`${url}/api/v1/orders/me`);
};

export const getOrderDetailAsync = (data) => {
	return api.get(`${url}/api/v1/order/${data}`);
};
