import {createAsyncThunk} from "@reduxjs/toolkit";

import {getProductAsync} from "../../api/product";

export const getProducts = createAsyncThunk(
	"product/getProducts",
	async () => {
		try {
			const {data} = await getProductAsync();

			return data;
		} catch (err) {
			throw Error(err.response.data.message);
		}
	}
);
