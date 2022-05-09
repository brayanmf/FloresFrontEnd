import {createSlice} from "@reduxjs/toolkit";
import {getProducts} from "./product.actions";

const initialState = {
	products: [],
	error: null,
};

export const productReducer = createSlice({
	name: "product",
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
				state.products = [];
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload.products;
				state.productsCount = action.payload.productsCount;
				state.resultPerPage = action.payload.resultPerPage;
				state.filteredProductsCount = action.payload.filteredProductsCount;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export const {clearErrorAction} = productReducer.actions;
export default productReducer.reducer;
