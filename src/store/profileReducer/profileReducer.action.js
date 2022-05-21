import {createAsyncThunk} from "@reduxjs/toolkit";
import {updateAsync, updatePasswordAsync} from "../../api/profile";

export const updateProfile = createAsyncThunk(
	"profile/update",
	async (dataParams) => {
		try {
			const {data} = await updateAsync(dataParams);
			return data.success;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);
export const updatePassword = createAsyncThunk(
	"profile/updatePassword",
	async (dataParams) => {
		try {
			const {data} = await updatePasswordAsync(dataParams);

			return data.success;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);
