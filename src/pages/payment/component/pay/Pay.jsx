/* eslint-disable react/self-closing-comp */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import useMercadoPago from "../../../../hook/useMercadoPago";
import Alert from "../../../../components/alert/Alert";

const Pay = () => {
	const {user} = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const [name, setName] = useState(user.name);
	const [email1, setEmail1] = useState(user.email);
	const [bolError, setBolError] = useState(false);
	const total = 20000;
	const resultPayment = useMercadoPago(total);

	useEffect(() => {
		if (resultPayment?.status === "approved") {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				navigate("/success");
			}, 2500);
		}
		if (resultPayment?.status === "rejected") {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				navigate("/");
			}, 2500);
		}
	}, [resultPayment]);
	return (
		<div className="w-full  bg-base-300 p-20 shadow-2xl   ">
			<h2 className="font-bold text-center text-2xl p-5">
				Formulario de Pago
			</h2>
			{bolError && (
				<Alert
					type="alert-success"
					styleAlert="absolute  w-1/4 mt-32 top-0 right-0  "
					message={
						resultPayment?.status === "approved"
							? "Pago Realizado"
							: "Pago Rechazado volver a intentar"
					}
				/>
			)}
			<form id="form-checkout">
				<div className=" justify-around  md:flex ">
					<div className="form-control w-10/12 mx-auto md:m-0  md:w-5/12">
						<label className="label">
							<span className="label-text font-bold">
								Tipo de Identificación
							</span>
						</label>
						<select
							className="select select-primary w-full max-w-xs"
							required
							name="identificationType"
							id="form-checkout__identificationType"
						/>

						<label className="label">
							<span className="label-text font-bold">
								Nro Identificación
							</span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							name="identificationNumber"
							id="form-checkout__identificationNumber"
							required
						/>
						<label className="label">
							<span className="label-text font-bold">
								Nro Tarjeta
								<p className="text-gray-600 font-normal">0000 0000 0000</p>
							</span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							name="cardNumber"
							id="form-checkout__cardNumber"
							required
						/>
						<label className="label">
							<span className="label-text font-bold">Nombre</span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							value={name}
							onChange={(e) => setName(e.target.value)}
							id="form-checkout__cardholderName"
							required
						/>
					</div>
					<select
						name="issuer"
						id="form-checkout__issuer"
						className="hidden"
					/>
					<div className="form-control  w-10/12 mx-auto md:m-0  md:w-5/12">
						<label className="label">
							<span className="label-text font-bold">
								Fecha de vencimiento de la tarjeta
								<p className="text-gray-600 font-normal">MM/YY</p>
							</span>
						</label>
						<input
							type="text"
							name="expiry"
							id="form-checkout__cardExpirationDate"
							className="input input-bordered"
							required
						/>
						<label className="label">
							<span className="label-text font-bold">CVV</span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							name="cvv"
							id="form-checkout__securityCode"
							required
						/>
						<label className="label">
							<span className="label-text font-bold">Cuotas</span>
						</label>
						<select
							className="select select-primary w-full max-w-xs"
							required
							name="installments"
							id="form-checkout__installments"
							type="hidden"
						/>

						<label className="label">
							<span className="label-text font-bold">Correo</span>
						</label>
						<input
							type="email"
							className="input input-bordered"
							value={email1}
							onChange={(e) => setEmail1(e.target.value)}
							id="form-checkout__cardholderEmail"
							required
						/>
					</div>
				</div>
				<div className="form-control mt-20 flex  md:flex-row-reverse">
					<button
						type="submit"
						className="btn btn-primary md:w-1/4"
						id="form-checkout__submit"
					>
						Continuar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Pay;
