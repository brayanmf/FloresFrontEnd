import React from "react";
import {Link} from "react-router-dom";

const OrderSuccess = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="flex flex-col items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="flex-shrink-0 h-32 w-32"
					fill="none"
					viewBox="0 0 24 24"
					stroke="green"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span className="my-5">Su pedido ha sido realizado con éxito</span>
				<Link to="/orders" className="btn btn-primary ">
					Ver Ordenes
				</Link>
			</div>
		</div>
	);
};

export default OrderSuccess;
