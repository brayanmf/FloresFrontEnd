import {createSlice} from "@reduxjs/toolkit";
import {newReview} from "./reviewReducer.action";

const initialState = {
	error: null,
	success: false,
};

export const reviewReducer = createSlice({
	name: "reviewReducer",
	initialState,
	reducers: {
		clearReviewErr: (state) => {
			state.error = null;
		},
		newReviewReset: (state) => {
			state.success = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(newReview.pending, (state) => {
				state.loading = true;
			})
			.addCase(newReview.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload;
			})
			.addCase(newReview.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export const {clearReviewErr, newReviewReset} = reviewReducer.actions;
export default reviewReducer.reducer;
