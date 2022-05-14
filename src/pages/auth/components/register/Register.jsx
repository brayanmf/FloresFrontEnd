import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../../../components/loader/Loader";
import {clearErrorAction} from "../../../../store/authReducer/authReducer.reducer";
import {register} from "../../../../store/authReducer/authReducer.action";
import Alert from "../../../../components/alert/Alert";

const Register = () => {
	const dispatch = useDispatch();
	const [bolErr, setBolErr] = useState(false);
	const {error, loading} = useSelector((state) => state.auth);

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	const {name, email, password} = user;
	const [avatar, setAvatar] = useState();
	const [avatarPreview, setAvatarPreview] = useState("/userProfile.png");

	const registerForm = (e) => {
		e.preventDefault();
		const myForm = new FormData();

		myForm.set("name", name);
		myForm.set("email", email);
		myForm.set("password", password);
		myForm.set("avatar", avatar);

		dispatch(register(myForm));
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

	const registerDataChange = (e) => {
		if (e.target.name === "avatar") {
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatarPreview(reader.result); // for preview html
					setAvatar(e.target.files[0]);
				}
			};
			reader.readAsDataURL(e.target.files[0]); // for preview html
		} else {
			setUser({...user, [e.target.name]: e.target.value});
		}
	};
	//		disabled={loading ? true : false}
	return (
		<div className="card-body w-96 drop-shadow-lg">
			<h2 className="font-bold text-center p-5">Registrate</h2>
			{bolErr && (
				<Alert
					type="alert-error"
					styleAlert="absolute  w-3/4 mt-5 "
					message={error}
				/>
			)}
			{loading ? (
				<Loader />
			) : (
				<form encType="multipart/form-data" onSubmit={registerForm}>
					<div className="form-control">
						<label className="label">
							<span className="label-text font-bold">Nombre</span>
						</label>
						<input
							type="text"
							placeholder="ingrese su Nombre"
							className="input input-bordered"
							name="name"
							value={name}
							onChange={registerDataChange}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text font-bold">Email</span>
						</label>
						<input
							type="email"
							placeholder="ingrese su Correo"
							className="input input-bordered"
							name="email"
							value={email}
							onChange={registerDataChange}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text font-bold">Contraseña</span>
						</label>
						<input
							type="password"
							placeholder="ingrese su Contraseña"
							className="input input-bordered"
							name="password"
							value={password}
							onChange={registerDataChange}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text font-bold">Perfil</span>
						</label>
						<div className="avatar">
							<div className="w-24 mask mask-hexagon mx-auto ">
								<img src={avatarPreview} alt="avatar profile" />
							</div>
						</div>
						<input
							type="file"
							name="avatar"
							accept="image/*"
							className="input input-bordered"
							onChange={registerDataChange}
						/>
					</div>
					<div className="form-control mt-6">
						<button type="submit" className="btn btn-primary">
							Registrar
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default Register;
