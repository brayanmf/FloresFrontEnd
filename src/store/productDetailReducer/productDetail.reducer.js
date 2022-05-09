import {createSlice} from "@reduxjs/toolkit";
import {getProductDetail} from "./productDetail.action";

const initialState = {
	product: {},
	error: null,
};

export const productDetailReducer = createSlice({
	name: "productDetail",
	initialState,
	reducers: {
		clearErrorAction: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductDetail.pending, (state) => {
				state.loading = true;
				state.product = {};
			})
			.addCase(getProductDetail.fulfilled, (state, action) => {
				state.loading = false;
				state.product = action.payload.data;
			})
			.addCase(getProductDetail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const {clearErrorAction} = productDetailReducer.actions;

export default productDetailReducer.reducer;
