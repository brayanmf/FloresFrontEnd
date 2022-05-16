import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ItemCard from "./itemCard/ItemCard";

const Cart = () => {
	const {cartItems} = useSelector((state) => state.cart);

	return (
		<div className="min-h-screen">
			{cartItems.length === 0 ? (
				<div className="flex h-screen items-center  justify-center flex-col">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-40 w-40"
						fill="none"
						viewBox="0 0 24 24"
						stroke="red"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
					<h2 className="font-bold text-xl m-5">
						No Hay productos en el Carrito
					</h2>
					<Link to="/products" className="btn btn-primary">
						Ver Productos
					</Link>
				</div>
			) : (
				<>
					<div className="overflow-x-auto mt-32 ">
						<table className="table w-full ">
							<thead>
								<tr>
									<th>Productos</th>
									<th>Cantidad</th>
									<th>SubTotal</th>
								</tr>
							</thead>

							{cartItems.map((item) => (
								<ItemCard item={item} />
							))}
						</table>
					</div>
					<div className="divider" />
					<div className="flex justify-end my-5">
						-
						<div className="text-center p-5">
							<h2 className="font-bold text-xl">Total </h2> <br />
							<p>{`S/.${cartItems.reduce(
								(acc, item) => acc + item.quantity * item.price,
								0
							)}`}</p>
							<button
								className="btn btn-active btn-secondary m-5"
								type="button"
							>
								Comprar
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
