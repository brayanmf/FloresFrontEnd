import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../../store/forgotReducer/forgotReducer.action";
import {clearErrorAction} from "../../store/forgotReducer/forgotReducer.reducer";
import Alert from "../../components/alert/Alert";
import Loader from "../../components/loader/Loader";

const ResetPassword = () => {
	const {error, loading, messageReset} = useSelector(
		(state) => state.forgot
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [bolMessage, setBolMessage] = useState(false);
	const [bolError, setBolError] = useState(false);
	const [dataReset, setDataReset] = useState({
		password: "",
		confirmPassword: "",
	});
	const {id} = useParams();

	const resetPasswordSubmit = (e) => {
		e.preventDefault();
		dispatch(resetPassword({id, dataReset}));
	};

	const handleChange = (e) => {
		setDataReset({...dataReset, [e.target.name]: e.target.value});
	};
	useEffect(() => {
		if (error) {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				dispatch(clearErrorAction);
			}, 2500);
		}
		if (messageReset) {
			setBolMessage(true);
			setTimeout(() => {
				setBolMessage(false);
				navigate("/auth/login");
			}, 2500);
		}
	}, [error, messageReset]);

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
					message={messageReset}
				/>
			)}
			<div className="card-body w-96 mt-32   mx-auto shadow-2xl  ">
				<h2 className="font-bold text-center p-5">
					Restablecer la contraseña
				</h2>
				{loading ? (
					<Loader />
				) : (
					<form
						encType="multipart/form-data"
						onSubmit={resetPasswordSubmit}
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text font-bold">Contraseña</span>
							</label>
							<input
								type="password"
								className="input input-bordered"
								name="password"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="divider p-5" />
						<div className="form-control ">
							<label className="label">
								<span className="label-text font-bold">
									Confirmar contraseña
								</span>
							</label>
							<input
								type="password"
								className="input input-bordered"
								name="confirmPassword"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button type="submit" className="btn btn-primary">
								Cambiar
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default ResetPassword;
