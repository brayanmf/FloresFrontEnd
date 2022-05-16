import {createAsyncThunk} from "@reduxjs/toolkit";
import {getProductIdAsync} from "../../api/card";

export const addCart = createAsyncThunk(
	"cart/addCart",
	async (dataParams, state) => {
		try {
			const {id, quantity} = dataParams;
			const {data} = await getProductIdAsync(id);
			const item = {...data.data, quantity};
			const {cart} = state.getState();
			const itemExist = cart.cartItems.find((el) => el._id === item._id);
			if (itemExist) {
				const arr = cart.cartItems.map((el) =>
					el._id === item._id ? item : el
				);

				return arr;
			}
			const arr = [...cart.cartItems, item];

			return arr;
		} catch (err) {
			const errorData = err.response.data
				? err.response.data.message
				: "Something went wrong";

			throw Error(errorData);
		}
	}
);
export const removeCart = createAsyncThunk(
	"cart/removeCart",
	async (id, state) => {
		try {
			const {cart} = state.getState();
			const newArry = cart.cartItems.filter((el) => el._id !== id);
			return newArry;
		} catch (err) {
			throw Error(`item no encontrado ${id}`);
		}
	}
);

export const saveShipingInfo = createAsyncThunk(
	"cart/saveShipingInfo",
	async (data, getState) => {
		try {
			localStorage.setItem("shippingInfo", JSON.stringify(data));
			return data;
		} catch (err) {
			throw Error(`error al guardar la informacion ${err}`);
		}
	}
);
