import React from "react";
import Menu from "./menu/Menu";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";

const Header = () => {
	return (
		<div className="navbar absolute">
			<div className="navbar-start">
				<Menu />
				<a href="/" className="btn btn-ghost normal-case text-xl">
					Flores
				</a>
			</div>

			<div className="navbar-end">
				<Cart />
				<Profile />
			</div>
		</div>
	);
};
export default Header;
