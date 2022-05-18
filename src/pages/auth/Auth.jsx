import React, {useEffect, useState} from "react";
import {Link, Outlet, useNavigate, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Login = () => {
	const [activeLogin, setActiveLogin] = useState(true);
	const [activeRegister, setActiveRegister] = useState(false);
	const handleClick = (e) => {
		setActiveLogin(!activeLogin);
		setActiveRegister(!activeRegister);
	};
	const {isAuthenticated} = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const redirect = searchParams.get("redirect");
	let url = "/profile";
	if (redirect) {
		url = `/${redirect}/shipping`;
	}

	useEffect(() => {
		if (isAuthenticated) {
			navigate(url);
		}
	}, [isAuthenticated, url]);
	return (
		<div className="h-screen  bg-base-200">
			<div className="tabs items-center ">
				<Link
					to="/auth/login"
					className={`tab tab-bordered font-bold  ml-20${
						activeLogin ? " tab-active" : ""
					}`}
					onClick={handleClick}
				>
					Iniciar
				</Link>
				<Link
					to="/auth/register"
					className={`tab tab-bordered font-bold  ${
						activeRegister ? " tab-active" : ""
					}`}
					onClick={handleClick}
				>
					Registrate
				</Link>
			</div>

			<div className="hero h-5/6">
				<Link
					to="/"
					className="ml-2 text-6xl  leading-9 absolute top-8 left-1 "
				>
					&#8592;
				</Link>
				<div className="hero-content ">
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
