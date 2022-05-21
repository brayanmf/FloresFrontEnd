import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../../../../store/authReducer/authReducer.action";

const Profile = ({user}) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(logout());
		navigate("/");
	};

	return (
		<div className="dropdown dropdown-end ">
			<label tabIndex="0" className="btn btn-ghost btn-circle avatar">
				<div className="w-10 rounded-full">
					<img src={user.avatar.url} alt="avatar" />
				</div>
			</label>
			<ul
				tabIndex="0"
				className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<Link to="/profile" className="justify-between">
						Perfil
					</Link>
				</li>
				<li>
					<Link to="/cart">Carrito</Link>
				</li>
				{user.role === "admin" && (
					<li>
						<Link to="/">Panel</Link>
					</li>
				)}
				<li>
					<Link to="/orders">Ordenes</Link>
				</li>

				<li>
					<button type="button" onClick={handleClick}>
						Salir
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Profile;
