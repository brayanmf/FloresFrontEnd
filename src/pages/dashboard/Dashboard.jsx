import React from "react";
import {Link, Outlet} from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="dashboar-navbar border-solid border-2 border-gray-700">
				<Header isAdmin={true} />
			</div>
			<div className="dashboard-menu border-solid border-r-4  border-gray-700 ">
				<Sidebar />
			</div>
			<div className="dashboard-content">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
