import {createAsyncThunk} from "@reduxjs/toolkit";

import {getProductAsync} from "../../api/product";

export const getProducts = createAsyncThunk(
	"product/getProducts",
	async (dataParams) => {
		try {
			const {data} = await getProductAsync(dataParams);
			return data;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);
