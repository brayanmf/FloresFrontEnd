import React from "react";
import Menu from "./menu/Menu";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";
import Search from "./search/Search";

const Header = () => {
	return (
		<div className="navbar absolute top-0">
			<div className="navbar-start">
				<Menu />
				<a href="/" className="btn btn-ghost normal-case text-xl">
					Flores
				</a>
			</div>

			<div className="navbar-end">
				<Search />
				<Cart />
				<button type="button" className="btn btn-sm">
					Login
				</button>
				{/*		<Profile /> */}
			</div>
		</div>
	);
};
export default Header;
