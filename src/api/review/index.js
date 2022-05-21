import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;
export const getReviewAsync = (data) => {
	return api.put(`${url}/api/v1/product/review`, data);
};
