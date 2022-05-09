import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "swiper/css/bundle";
import Body from "./pages/homePage/body/Body";
import Layout from "./pages/homePage/layout/Latour";
import "./App.css";
import MetaData from "./components/metaData/MetaData";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ProductDetais from "./pages/productDetails/ProductDetails";

const App = () => {
	return (
		<BrowserRouter>
			<MetaData title="Flores" />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Body />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:keyword" element={<Products />} />

					<Route path="/contact*" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/product/:id" element={<ProductDetais />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
