import {configureStore} from "@reduxjs/toolkit";
import productDetailReducer from "./productDetailReducer/productDetail.reducer";
import productReducer from "./productReducer/product.reducer";

export const store = configureStore({
	reducer: {
		product: productReducer,
		productDetail: productDetailReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
