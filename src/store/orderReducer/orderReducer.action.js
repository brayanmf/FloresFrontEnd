import {createAsyncThunk} from "@reduxjs/toolkit";
import {
	postCreateAsync,
	getOrderAsync,
	getOrderDetailAsync,
} from "../../api/order";

export const createOrder = createAsyncThunk(
	"order/createOrder",
	async (dataParams) => {
		try {
			const {data} = await postCreateAsync(dataParams);

			return data.data;
		} catch (err) {
			throw Error(err.response.data.message);
		}
	}
);

export const meOrder = createAsyncThunk("order/meOrder", async () => {
	try {
		const {data} = await getOrderAsync();

		return data.data;
	} catch (err) {
		throw Error(err.response.data.message);
	}
});

export const orderDetail = createAsyncThunk(
	"order/detailOrder",
	async (dataParams) => {
		try {
			const {data} = await getOrderDetailAsync(dataParams);
			return data.data;
		} catch (err) {
			throw Error(err.response.data.message);
		}
	}
);
