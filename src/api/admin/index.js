import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;
export const getProductsAsync = () => {
	return api.get(`${url}/api/v1/admin/products`);
};

export const addProductAsync = (data) => {
	const config = {headers: {"Content-Type": "multipart/form-data"}};

	return api.post(`${url}/api/v1/admin/product/new`, data, config);
};

export const deleteProductAsync = (data) => {
	const id = data.value;
	return api.delete(`${url}/api/v1/admin/product/${id}`);
};

export const ProductDetailsAsync = ({id}) => {
	return api.get(`${url}/api/v1/product/${id}`); // error in rute name
};
