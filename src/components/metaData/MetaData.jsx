import React from "react";
import Helmert from "react-helmet";
import flower from "./flower.ico";

const MetaData = ({title}) => {
	return (
		<Helmert>
			<title>{title}</title>
			<link rel="apple-touch-icon" href={flower} />
			<link rel="icon" href={flower} />
			<meta
				name="Flores"
				content="tienda online donde encontraras muchos productos"
			/>
		</Helmert>
	);
};

export default MetaData;
