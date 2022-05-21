import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Menu from "./menu/Menu";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";
import Search from "./search/Search";

const Header = () => {
	const {isAuthenticated, user} = useSelector((state) => state.auth);
	return (
		<div className="navbar absolute top-0 ">
			<div className="navbar-start">
				<Menu />
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Flores
				</Link>
			</div>

			<div className="navbar-end">
				<Search />
				<Cart />

				{isAuthenticated ? (
					<Profile user={user} />
				) : (
					<Link to="/auth/login" className="ml-3 btn btn-sm btn-outline">
						Iniciar Sesión
					</Link>
				)}
			</div>
		</div>
	);
};
export default Header;
