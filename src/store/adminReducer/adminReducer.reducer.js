import {createSlice} from "@reduxjs/toolkit";
import {getProducts} from "./adminReducer.action";

const initialState = {
	error: null,
	products: [],
};

export const adminReducer = createSlice({
	name: "adminReducer",
	initialState,
	reducers: {
		clearErrorAction: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export const {clearErrorAction} = adminReducer.actions;
export default adminReducer.reducer;
