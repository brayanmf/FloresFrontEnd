import {createAsyncThunk} from "@reduxjs/toolkit";
import {putUpdateAsync} from "../../api/profile";

export const putUpdate = createAsyncThunk(
	"profile/update",
	async (dataParams) => {
		try {
			const {data} = await putUpdateAsync(dataParams);
			return data;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);
