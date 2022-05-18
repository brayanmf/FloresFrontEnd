import {createSlice} from "@reduxjs/toolkit";
import {createOrder} from "./orderReducer.action";

const initialState = {
	// product: {},
	order: {},
	error: null,
};

export const orderReducer = createSlice({
	name: "orderPayment",
	initialState,
	reducers: {
		clearErrorAction: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createOrder.pending, (state) => {
				state.loading = true;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.loading = false;
				state.order = action.payload.data;
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const {clearErrorAction} = orderReducer.actions;

export default orderReducer.reducer;
