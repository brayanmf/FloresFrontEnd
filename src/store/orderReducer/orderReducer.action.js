import {createAsyncThunk} from "@reduxjs/toolkit";
import {postCreateAsync} from "../../api/order";

export const createOrder = createAsyncThunk(
	"order/createOrder",
	async (dataParams) => {
		try {
			const {data} = await postCreateAsync(dataParams);

			return data;
		} catch (err) {
			throw Error(err.response.data.message);
		}
	}
);
