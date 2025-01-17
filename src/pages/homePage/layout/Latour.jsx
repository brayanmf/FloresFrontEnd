import {Outlet} from "react-router-dom";
import React from "react";
import Footer from "./footer/Footer";
import Header from "../../../components/header/Header";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
