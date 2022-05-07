import React from "react";
import "./Loader.css";

const Loader = ({styleLoader}) => {
	return <div className={`lds-dual-ring ${styleLoader}`} />;
};

export default Loader;
