import axios from "axios";

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENPOINT;
export const getProductAsync = (data) => {
	const {
		keyword = "",
		currentPage = 1,
		min = 0,
		max = 5000,
		category = "Todos",
		rating = 0,
	} = data;
	let link;
	if (category === "Todos") {
		link = `${url}/api/v1/product/all?keyword=${keyword}&page=${currentPage}&price[gte]=${min}&price[lte]=${max}&rating[gte]=${rating}`;
	}

	if (category && category !== "Todos") {
		link = `${url}/api/v1/product/all?keyword=${keyword}&page=${currentPage}&price[gte]=${min}&price[lte]=${max}&category=${category}&rating[gte]=${rating}`;
	}
	return api.get(link);
};
export const getProductIdAsync = (id) =>
	api.get(`${url}/api/v1/product/${id}`);
