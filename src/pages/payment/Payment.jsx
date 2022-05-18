import React, {useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Payment = () => {
	const {isAuthenticated} = useSelector((state) => state.auth);
	const location = useLocation();
	const navigate = useNavigate();
	const {pathname} = location;
	if (!isAuthenticated) {
		navigate("/auth/login");
	}
	return (
		<div className="min-h-screen  bg-base-200 mt-20">
			<ul className="steps steps-horizontal  w-full  px-auto">
				<li
					className={`step  ${
						pathname === "/payment/shipping" ? "step-primary font-bold" : ""
					}`}
				>
					Envío
				</li>
				<li
					className={`step ${
						pathname === "/payment/orderConfirm"
							? "step-primary font-bold"
							: ""
					}`}
				>
					Confirmar Pedido
				</li>
				<li
					className={`step ${
						pathname === "/payment/pay" ? "step-primary font-bold" : ""
					}`}
				>
					Pagar
				</li>
			</ul>

			<div className="w-11/12 mx-auto mt-5">
				<Outlet />
			</div>
		</div>
	);
};

export default Payment;
