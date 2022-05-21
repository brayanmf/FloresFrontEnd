import {createSlice} from "@reduxjs/toolkit";
import {createOrder, meOrder, orderDetail} from "./orderReducer.action";

const initialState = {
	// product: {},
	order: {},
	orders: [],
	error: null,
};

export const orderReducer = createSlice({
	name: "orderReducer",
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
				state.create = action.payload;
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
		builder
			.addCase(meOrder.pending, (state) => {
				state.loading = true;
			})
			.addCase(meOrder.fulfilled, (state, action) => {
				state.loading = false;
				state.orders = action.payload;
			})
			.addCase(meOrder.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
		builder
			.addCase(orderDetail.pending, (state) => {
				state.loading = true;
			})
			.addCase(orderDetail.fulfilled, (state, action) => {
				state.loading = false;
				state.order = action.payload;
			})
			.addCase(orderDetail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const {clearErrorAction} = orderReducer.actions;

export default orderReducer.reducer;
