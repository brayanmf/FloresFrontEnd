import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import {useDispatch} from "react-redux";
import {useParams, Link} from "react-router-dom";
import {addCart} from "../../../../store/cartReducer/cartReducer.action";

const CardDetail = ({product}) => {
	const params = useParams();
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	const increaseQuantity = () => {
		if (product.Stock <= quantity) return;
		const aux = quantity + 1;
		setQuantity(aux);
	};
	const decreaseQuantity = () => {
		if (quantity <= 1) return;
		const aux = quantity - 1;
		setQuantity(aux);
	};

	const handleAdddCart = () => {
		const {id} = params;
		dispatch(addCart({id, quantity}));
	};
	const optionsStart = {
		color: "rgba(8, 8, 8, 0.83)",
		edit: false,
		size: window.innerWidth > 768 ? 20 : 15,
		value: product.rating,
		isHalf: true,
	};

	return (
		<div className="cardDetail h-5/6 w-5/6 divide-y rounded-md  p-4">
			<div className="cardDetail-product p-4">
				<h2 className="font-bold text-2xl ">{product.name}</h2>
				<p className="text-xs text-inherit">producto # {product._id} </p>
			</div>
			<div className="cardDetail-star p-4 flex  content-center leading-4  ">
				<ReactStars {...optionsStart} />
				<span className="ml-4  text-sm">Reseña {product.numOfReviews}</span>
			</div>
			<div className="cardDetail-cart p-4">
				<h2 className="text-2xl p-4">S/{product.price}</h2>
				<div className="flex items-center p-4">
					<div>
						<button
							type="button"
							className="btn btn-primary  sm:btn-sm "
							onClick={decreaseQuantity}
						>
							-
						</button>
						<input
							readOnly
							type="text"
							className="  text-center h-7 rounded-md w-10 text-black outline-none"
							value={quantity}
						/>
						<button
							type="button"
							className="btn btn-primary sm:btn-sm  "
							onClick={increaseQuantity}
						>
							+
						</button>
					</div>
					<button
						type="button"
						className="btn btn-secondary ml-4"
						onClick={handleAdddCart}
						disabled={product.Stock < 1 ? true : false}
					>
						Agregar al Carrito
					</button>
				</div>
				<p>
					Estado
					<b
						className={`${
							product.Stock < 1 ? "text-red-600" : "text-sky-600"
						} ml-2`}
					>
						{product.Stock < 1 ? "Agotado" : "en stock"}
					</b>
				</p>
			</div>
			<div className="cardDetail-description p-4  ">
				<p className=" w-80 break-words ">{product.description}</p>
			</div>
			<Link to="/cart" className="btn btn-active my-20">
				Ir a carrito
			</Link>
		</div>
	);
};

export default CardDetail;
