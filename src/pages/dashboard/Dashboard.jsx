import React from "react";
import {Link, Outlet} from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="dashboar-navbar ">
				<Header isAdmin={true} />
			</div>
			<div className="dashboard-menu">
				<Sidebar />
			</div>
			<div className="dashboard-content">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
