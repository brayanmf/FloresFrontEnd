import {createAsyncThunk} from "@reduxjs/toolkit";
import {forgotAsync, resetAsync} from "../../api/forgot";

export const forgotPassword = createAsyncThunk(
	"forgot/update",
	async (dataParams) => {
		try {
			const {data} = await forgotAsync(dataParams);
			return data;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);

export const resetPassword = createAsyncThunk(
	"forgot/reset",
	async (dataParams) => {
		try {
			const {data} = await resetAsync(dataParams);
			return data;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);
