import {createAsyncThunk} from "@reduxjs/toolkit";

import {getProductIdAsync} from "../../api/product";

export const getProductDetail = createAsyncThunk(
	"product/getProductDetail",
	async (id) => {
		try {
			const {data} = await getProductIdAsync(id);
			return data;
		} catch (err) {
			throw Error(err.response.data.message);
		}
	}
);
