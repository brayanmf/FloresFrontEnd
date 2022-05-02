import {Outlet} from "react-router-dom";
import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Main = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Main;
