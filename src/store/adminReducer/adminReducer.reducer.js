import {createSlice} from "@reduxjs/toolkit";
import {
	getProducts,
	addProduct,
	deleteProduct,
} from "./adminReducer.action";

const initialState = {
	error: null,
	products: [],
	product: {},
	success: false,
};

export const adminReducer = createSlice({
	name: "adminReducer",
	initialState,
	reducers: {
		clearErrorAction: (state) => {
			state.error = null;
			state.success = false;
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
		builder
			.addCase(addProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(addProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.product = action.payload;
			})
			.addCase(addProduct.rejected, (state, action) => {
				state.loading = false;
				state.success = false;
				state.error = action.error.message;
			});
		builder
			.addCase(deleteProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(deleteProduct.fulfilled, (state) => {
				state.loading = true;
			})
			.addCase(deleteProduct.rejected, (state, action) => {
				state.loading = false;
				state.success = false;
				state.error = action.error.message;
			});
	},
});
export const {clearErrorAction} = adminReducer.actions;
export default adminReducer.reducer;
