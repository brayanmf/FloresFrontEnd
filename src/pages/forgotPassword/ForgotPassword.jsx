import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {forgotPassword} from "../../store/forgotReducer/forgotReducer.action";
import {
	clearErrorAction,
	clearMessage,
} from "../../store/forgotReducer/forgotReducer.reducer";
import Alert from "../../components/alert/Alert";
import Loader from "../../components/loader/Loader";

const ForgotPassword = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {error, loading, message} = useSelector((state) => state.forgot);
	const [data, setData] = useState({
		email: "",
	});
	const [bolError, setBolError] = useState(false);
	const [bolMessage, setBolMessage] = useState(false);

	const forgotSubmit = (e) => {
		e.preventDefault();

		dispatch(forgotPassword(data));
	};
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	useEffect(() => {
		if (error) {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				dispatch(clearErrorAction());
			}, 2500);
		}
		if (message) {
			setBolMessage(true);
			setTimeout(() => {
				setBolMessage(false);
				dispatch(clearMessage());
				navigate("/");
			}, 2500);
		}
	}, [error, dispatch, message]);
	return (
		<div className="h-screen ">
			{bolError && (
				<Alert
					type="alert-error"
					styleAlert="absolute  w-1/4 mt-20 top-0 right-0  "
					message={error}
				/>
			)}
			{bolMessage && (
				<Alert
					type="alert-success"
					styleAlert="absolute  w-1/4 mt-20 top-0 right-0  "
					message={message}
				/>
			)}
			<div className="card-body w-96 mt-32   mx-auto shadow-2xl  ">
				<h2 className="font-bold text-center p-5">
					Has olvidado tu contraseña
				</h2>
				{loading ? (
					<Loader />
				) : (
					<form encType="multipart/form-data" onSubmit={forgotSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text font-bold">
									Ingrese su Correo
								</span>
							</label>

							<input
								type="email"
								className="input input-bordered"
								name="email"
								required
								onChange={handleChange}
							/>
						</div>

						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">
								Enviar
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default ForgotPassword;
