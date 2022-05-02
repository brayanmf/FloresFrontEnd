import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "swiper/css/bundle";
import Body from "./pages/homePage/body/Body";
import Main from "./pages/homePage/main/Main";
import "./App.css";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}>
					<Route path="/" element={<Body />} />
					<Route path="/products" element={<Products />} />
					<Route path="/contact*" element={<Contact />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
