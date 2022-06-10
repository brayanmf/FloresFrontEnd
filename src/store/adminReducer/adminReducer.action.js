import {createAsyncThunk} from "@reduxjs/toolkit";
import {getProductsAsync} from "../../api/admin";

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
