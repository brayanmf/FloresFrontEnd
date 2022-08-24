import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Alert from "../../components/alert/Alert";
import Loader from "../../components/loader/Loader";
import {
	clearErrorAction,
	passwordReset,
} from "../../store/profileReducer/profileReducer.reducer";
import {updatePassword} from "../../store/profileReducer/profileReducer.action";
import {loadUser} from "../../store/authReducer/authReducer.action";

const UpdatePassword = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {error, isUpdatePassword, loading} = useSelector(
		(state) => state.profile
	);
	const [bolError, setBolError] = useState(false);
	const [bolSucc, setBolSucc] = useState(false);
	const [dataPassword, setDataPassword] = useState({
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	});
	const updatePasswordSubmit = (e) => {
		e.preventDefault();
		dispatch(updatePassword(dataPassword));
	};
	const handleChange = (e) => {
		setDataPassword({
			...dataPassword,
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
		if (isUpdatePassword) {
			setBolSucc(true);
			setTimeout(() => {
				setBolError(false);

				dispatch(passwordReset());
				dispatch(loadUser());
				navigate("/profile");
			}, 2500);
		}
	}, [error, isUpdatePassword, dispatch]);

	return (
		<div className="min-h-screen">
			{bolError && (
				<Alert
					type="alert-error"
					styleAlert="absolute  w-1/4 mt-20 top-0 right-0  "
					message={error}
				/>
			)}
			{bolSucc && (
				<Alert
					type="alert-success"
					styleAlert="absolute  w-1/4 mt-20 top-0 right-0  "
					message="contraseña actualizada"
				/>
			)}
			<div className="card-body w-96 m-20  mx-auto shadow-2xl  ">
				<h2 className="font-bold text-center p-5">Actualizar Contraseña</h2>
				{loading ? (
					<Loader styleLoader="absolute  inset-2/4" />
				) : (
					<form
						encType="multipart/form-data"
						onSubmit={updatePasswordSubmit}
					>
						<div className="form-control">
							<label className="label">
								<span className="label-text font-bold">
									Contraseña Antigua
								</span>
							</label>
							<input
								type="password"
								className="input input-bordered"
								name="oldPassword"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="divider p-5" />
						<div className="form-control ">
							<label className="label">
								<span className="label-text font-bold">
									Contraseña Nueva
								</span>
							</label>
							<input
								type="password"
								className="input input-bordered"
								name="newPassword"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text font-bold">
									Confirmar Contraseña
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
								Actualizar
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default UpdatePassword;
