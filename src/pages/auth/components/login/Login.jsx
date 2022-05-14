import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../../../components/loader/Loader";
import {clearErrorAction} from "../../../../store/authReducer/authReducer.reducer";
import {login} from "../../../../store/authReducer/authReducer.action";
import Alert from "../../../../components/alert/Alert";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {error, loading} = useSelector((state) => state.auth);
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [bolErr, setBolErr] = useState(false);
	const loginDataChange = (e) => {
		setUser({...user, [e.target.name]: e.target.value});
	};

	const loginSubmit = (e) => {
		e.preventDefault();
		dispatch(login(user));
	};
	useEffect(() => {
		if (error) {
			setBolErr(true);
			setTimeout(() => {
				setBolErr(false);
				dispatch(clearErrorAction);
			}, 2500);
		}
	}, [dispatch, error, loading]);

	return (
		<div className="card-body w-96 drop-shadow-lg">
			{bolErr && (
				<Alert
					type="alert-error"
					styleAlert="absolute  w-3/4 mt-5 "
					message={error}
				/>
			)}
			<h2 className="font-bold text-center p-5">Iniciar Sección</h2>

			{loading ? (
				<Loader />
			) : (
				<form onSubmit={loginSubmit}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Correo</span>
						</label>
						<input
							type="email"
							placeholder="Ingrese su Correo"
							className="input input-bordered"
							name="email"
							onChange={loginDataChange}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Contraseña</span>
						</label>
						<input
							type="password"
							placeholder="Ingrese su Contraseña"
							className="input input-bordered"
							name="password"
							onChange={loginDataChange}
						/>
						<label className="label">
							<Link to="/" className="label-text-alt link link-hover">
								Se te olvidó tu contraseña?
							</Link>
						</label>
					</div>

					<div className="form-control mt-6">
						<button type="submit" className="btn btn-primary">
							Ingresar
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default Login;
