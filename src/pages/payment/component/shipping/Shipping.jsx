import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Country, State} from "country-state-city";
import Alert from "../../../../components/alert/Alert";
import {saveShipingInfo} from "../../../../store/cartReducer/cartReducer.action";

const Shipping = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {shippingInfo} = useSelector((state) => state.cart);
	const [bolPhone, setBolPhone] = useState(false);
	const [address, setAddress] = useState(shippingInfo.address);
	const [city, setCity] = useState(shippingInfo.city);
	const [state, setState] = useState(shippingInfo.state);
	const [country, setCountry] = useState(shippingInfo.country);
	const [codePost, setCodePost] = useState(shippingInfo.codePost);
	const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

	const shippingSubmit = (e) => {
		e.preventDefault();
		if (phoneNo.length >= 20 || phoneNo[0] !== "+") {
			setBolPhone(true);
			setTimeout(() => {
				setBolPhone(false);
			}, 2500);
			return;
		}
		dispatch(
			saveShipingInfo({address, city, state, country, codePost, phoneNo})
		);
		navigate("/payment/orderConfirm");
	};
	return (
		<div className="w-full  bg-base-300 p-20 shadow-2xl ">
			{bolPhone && (
				<Alert
					type="alert-error"
					styleAlert="absolute  w-1/4 mt-32 top-0 left-0  "
					message="El número de telefono es invalido"
				/>
			)}
			<h2 className="font-bold text-center p-5">Detalles de Envío</h2>

			<form onSubmit={shippingSubmit}>
				<div className=" justify-around  md:flex ">
					<div className="form-control w-10/12 mx-auto md:m-0  md:w-5/12">
						<label className="label">
							<span className="label-text font-bold">Dirección</span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							required
						/>
						<label className="label">
							<span className="label-text font-bold">Ciudad</span>
						</label>
						<input
							type="text"
							className="input input-bordered"
							value={city}
							onChange={(e) => setCity(e.target.value)}
							required
						/>
						<label className="label">
							<span className="label-text font-bold">Código postal</span>
						</label>
						<input
							type="number"
							className="input input-bordered"
							value={codePost}
							onChange={(e) => setCodePost(e.target.value)}
							required
						/>
					</div>

					<div className="form-control  w-10/12 mx-auto md:m-0  md:w-5/12">
						<label className="label">
							<span className="label-text font-bold">
								Número de Celular
								<p className="text-gray-600 font-normal">
									ejemplo: +999 999 999
								</p>
							</span>
						</label>
						<input
							type="tel"
							className="input input-bordered"
							value={phoneNo}
							onChange={(e) => setPhoneNo(e.target.value)}
							required
						/>
						<div className="mt-5">
							<label className="label">
								<span className="label-text font-bold">País</span>
							</label>
							<select
								className="select select-primary w-full max-w-xs"
								required
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							>
								<option value="" disabled>
									País
								</option>
								{Country?.getAllCountries().map((item) => (
									<option key={item.isoCode} value={item.isoCode}>
										{item.name}
									</option>
								))}
							</select>
						</div>
						{country && (
							<div className="mt-5">
								<label className="label">
									<span className="label-text font-bold">Región</span>
								</label>
								<select
									className="select select-primary w-full max-w-xs"
									required
									value={state}
									onChange={(e) => setState(e.target.value)}
								>
									<option value="">Región</option>
									{State &&
										State.getStatesOfCountry(country).map((item) => (
											<option key={item.isoCode} value={item.isoCode}>
												{item.name}
											</option>
										))}
								</select>
							</div>
						)}
					</div>
				</div>
				<div className="form-control mt-20 flex  md:flex-row-reverse">
					<button
						type="submit"
						className="btn btn-primary md:w-1/4"
						disabled={state ? false : true}
					>
						Continuar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Shipping;
