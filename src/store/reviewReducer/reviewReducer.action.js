import {createAsyncThunk} from "@reduxjs/toolkit";
import {getReviewAsync} from "../../api/review";

export const newReview = createAsyncThunk(
	"review/newReview",
	async (dataParams) => {
		try {
			const {data} = await getReviewAsync(dataParams);

			return data.success;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);
