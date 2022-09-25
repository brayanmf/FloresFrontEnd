import {createAsyncThunk} from "@reduxjs/toolkit";
import {
	getProductsAsync,
	addProductAsync,
	deleteProductAsync,
} from "../../api/admin";

export const getProducts = createAsyncThunk(
	"admin/getProducts",
	async () => {
		try {
			const {data} = await getProductsAsync();

			return data.data;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);

export const addProduct = createAsyncThunk(
	"admin/addProduct",
	async (dataParams) => {
		try {
			const {data} = await addProductAsync(dataParams);
			return data.data;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";
			throw Error(errorData);
		}
	}
);

export const deleteProduct = createAsyncThunk(
	"admin/deleteProduct",
	async (dataParams) => {
		try {
			const {data} = await deleteProductAsync(dataParams);
			return data.data;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";
			throw Error(errorData);
		}
	}
);
