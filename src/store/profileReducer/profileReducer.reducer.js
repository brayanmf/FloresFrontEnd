import {createSlice} from "@reduxjs/toolkit";
import {updateProfile, updatePassword} from "./profileReducer.action";

const initialState = {
	error: null,
	isUpdate: false,
	isUpdatePassword: false,
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
		passwordReset: (state) => {
			state.isUpdatePassword = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(updateProfile.pending, (state) => {
				state.loading = true;
			})
			.addCase(updateProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.isUpdate = action.payload;
			})
			.addCase(updateProfile.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
		builder
			.addCase(updatePassword.pending, (state) => {
				state.loading = true;
			})
			.addCase(updatePassword.fulfilled, (state, action) => {
				state.loading = false;
				state.isUpdatePassword = action.payload;
			})
			.addCase(updatePassword.rejected, (state, action) => {
				state.loading = false;

				state.error = action.error.message;
			});
	},
});
export const {clearErrorAction, profileReset, passwordReset} =
	profileReducer.actions;
export default profileReducer.reducer;
