import {createAsyncThunk} from "@reduxjs/toolkit";

import {getProductAsync} from "../../api/product";

export const getProducts = createAsyncThunk(
	"product/getProducts",
	async (dataParams) => {
		try {
			const {data} = await getProductAsync(dataParams);
			return data;
		} catch (err) {
			throw Error(err.response.data.message);
		}
	}
);
