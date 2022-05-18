import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {
	addCart,
	removeCart,
} from "../../../store/cartReducer/cartReducer.action";

const ItemCard = ({item}) => {
	const dispatch = useDispatch();

	const increaseQuantity = (id, qty, stock) => {
		const quantity = qty + 1;
		if (stock <= qty) {
			return;
		}
		dispatch(addCart({id, quantity}));
	};
	const decreaseQuantity = (id, qty) => {
		const quantity = qty - 1;
		if (qty <= 1) {
			return;
		}
		dispatch(addCart({id, quantity}));
	};

	const deleteCartItems = (id) => {
		dispatch(removeCart(id));
	};

	return (
		<tbody>
			<tr>
				<td>
					<div className="flex items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img src={item.image} alt="Avatar Tailwind CSS Component" />
							</div>
						</div>
						<div>
							<div className="font-bold">{item.name} </div>
							<div className="text-sm opacity-50">{`Precio : S/.${item.price}`}</div>
							<button
								className="btn btn-xs btn-outline btn-error"
								type="button"
								onClick={() => deleteCartItems(item._id)}
							>
								Borrar
							</button>
						</div>
					</div>
				</td>
				<td>
					<div>
						<button
							type="button"
							className="btn btn-primary btn-xs sm:btn-sm "
							onClick={() => decreaseQuantity(item._id, item.quantity)}
						>
							-
						</button>
						<input
							readOnly
							type="text"
							className="  text-center h-7 rounded-md w-10 text-black outline-none"
							value={item.quantity}
						/>
						<button
							type="button"
							className="btn btn-primary btn-xs sm:btn-sm  "
							onClick={() =>
								increaseQuantity(item._id, item.quantity, item.Stock)
							}
						>
							+
						</button>
					</div>
				</td>
				<td>{`S/.${item.price * item.quantity}`}</td>
			</tr>
		</tbody>
	);
};

export default ItemCard;
