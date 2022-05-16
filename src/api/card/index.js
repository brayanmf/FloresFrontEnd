import axios from "axios";

const api = axios.create({
	withCredentials: true,
});
const url = process.env.REACT_APP_BACKEND_ENPOINT;
export const getProductIdAsync = (id) => {
	return api.get(`${url}/api/v1/product/${id}`);
};
