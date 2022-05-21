import {createAsyncThunk} from "@reduxjs/toolkit";

import {
	postLoginAsync,
	postRegisterAsync,
	getLogoutAsync,
	postLoadAsync,
} from "../../api/auth";

export const login = createAsyncThunk("auth/login", async (dataParams) => {
	try {
		const {data} = await postLoginAsync(dataParams);
		return data.user;
	} catch (err) {
		const errorData = err.response.data
			? err.response.data.message
			: "Something went wrong";

		throw Error(errorData);
	}
});

export const register = createAsyncThunk(
	"auth/register",
	async (dataParams) => {
		try {
			const {data} = await postRegisterAsync(dataParams);
			return data.user;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);
export const logout = createAsyncThunk("auth/logout", async () => {
	try {
		const {data} = await getLogoutAsync();
		return data;
	} catch (err) {
		const errorData = err.response.data
			? err.response.data.message
			: "Something went wrong";

		throw Error(errorData);
	}
});
export const loadUser = createAsyncThunk("user/loadUser", async () => {
	try {
		const {data} = await postLoadAsync();

		return data.data;
	} catch (err) {
		const errorData = err.response.data
			? err.response.data.message
			: "Something went wrong";

		throw Error(errorData);
	}
});
