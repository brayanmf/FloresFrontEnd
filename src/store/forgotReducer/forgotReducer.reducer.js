import {createSlice} from "@reduxjs/toolkit";
import {forgotPassword, resetPassword} from "./forgotReducer.action";

const initialState = {
	error: null,
};

export const forgotReducer = createSlice({
	name: "forgot",
	initialState,
	reducers: {
		clearErrorAction: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(forgotPassword.pending, (state) => {
				state.loading = true;
			})
			.addCase(forgotPassword.fulfilled, (state, action) => {
				state.loading = false;
				state.message = action.payload.message;
			})
			.addCase(forgotPassword.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
		builder
			.addCase(resetPassword.pending, (state) => {
				state.loading = true;
			})
			.addCase(resetPassword.fulfilled, (state, action) => {
				state.loading = false;
				state.messageReset = action.payload.message;
			})
			.addCase(resetPassword.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export const {clearErrorAction} = forgotReducer.actions;
export default forgotReducer.reducer;
