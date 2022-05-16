import {configureStore} from "@reduxjs/toolkit";
import productDetailReducer from "./productDetailReducer/productDetail.reducer";
import productReducer from "./productReducer/product.reducer";
import authReducer from "./authReducer/authReducer.reducer";
import profileReducer from "./profileReducer/profileReducer.reducer";
import forgotReducer from "./forgotReducer/forgotReducer.reducer";
import cartReducer from "./cartReducer/cartReducer.reducer";

export const store = configureStore({
	reducer: {
		product: productReducer,
		productDetail: productDetailReducer,
		auth: authReducer,
		profile: profileReducer,
		forgot: forgotReducer,
		cart: cartReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
