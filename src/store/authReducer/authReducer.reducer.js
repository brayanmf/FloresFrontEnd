import {createSlice} from "@reduxjs/toolkit";
import {register, login, logout, loadUser} from "./authReducer.action";

const initialState = {
	user: {},
	error: null,
};

export const authReducer = createSlice({
	name: "auth",
	initialState,
	reducers: {
		clearErrorAction: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.isAuthenticated = true;
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = {};
				state.error = action.error.message;
			});
		builder
			.addCase(register.pending, (state) => {
				state.loading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.loading = false;
				state.isAuthenticated = true;
				state.user = action.payload.user;
			})
			.addCase(register.rejected, (state, action) => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = {};
				state.error = action.error.message;
			});
		builder
			.addCase(loadUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(loadUser.fulfilled, (state, action) => {
				state.loading = false;
				state.isAuthenticated = true;
				state.user = action.payload.data;
			})
			.addCase(loadUser.rejected, (state, action) => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = null;
			});

		builder
			.addCase(logout.fulfilled, (state, action) => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = null;
			})
			.addCase(logout.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export const {clearErrorAction} = authReducer.actions;
export default authReducer.reducer;
