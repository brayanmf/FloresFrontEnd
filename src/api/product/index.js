import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;
export const getProductAsync = () => api.get(url.concat("/product/all"));
export const getProductIdAsync = (id) =>
	api.get(url.concat(`/product/${id}`));
