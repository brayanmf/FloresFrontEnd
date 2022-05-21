import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const ProtectRoute = ({component: Component}) => {
	const {isAuthenticated} = useSelector((state) => state.auth);

	return isAuthenticated === false ? (
		<Navigate to="/auth/login" />
	) : (
		<Component />
	);
};

export default ProtectRoute;
