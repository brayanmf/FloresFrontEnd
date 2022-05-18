import {createSlice} from "@reduxjs/toolkit";
import {addCart, removeCart, saveShipingInfo} from "./cartReducer.action";

const initialState = {
	cartItems: localStorage.getItem("cardItems")
		? JSON.parse(localStorage.getItem("cardItems"))
		: [],
	shippingInfo: localStorage.getItem("shippingInfo")
		? JSON.parse(localStorage.getItem("shippingInfo"))
		: {},
};

export const cardReducer = createSlice({
	name: "cardReducer",
	initialState,
	reducers: {
		clearErrorAction: (state) => {
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addCart.fulfilled, (state, action) => {
			state.cartItems = action.payload;
			localStorage.setItem("cardItems", JSON.stringify(action.payload));
		});
		builder.addCase(removeCart.fulfilled, (state, action) => {
			state.cartItems = action.payload;
			localStorage.setItem("cardItems", JSON.stringify(action.payload));
		});
		builder.addCase(saveShipingInfo.fulfilled, (state, action) => {
			state.shippingInfo = action.payload;
			localStorage.setItem("shippingInfo", JSON.stringify(action.payload));
		});
	},
});

export const {clearErrorAction} = cardReducer.actions;

export default cardReducer.reducer;
