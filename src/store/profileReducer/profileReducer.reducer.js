import {createSlice} from "@reduxjs/toolkit";
import {putUpdate} from "./profileReducer.action";

const initialState = {
	error: null,
	isUpdate: false,
};

export const profileReducer = createSlice({
	name: "profile",
	initialState,
	reducers: {
		clearErrorAction: (state) => {
			state.error = null;
		},
		profileReset: (state) => {
			state.isUpdate = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(putUpdate.pending, (state) => {
				state.loading = true;
			})
			.addCase(putUpdate.fulfilled, (state, action) => {
				state.loading = false;
				state.isUpdate = action.payload;
			})
			.addCase(putUpdate.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export const {clearErrorAction, profileReset} = profileReducer.actions;
export default profileReducer.reducer;
