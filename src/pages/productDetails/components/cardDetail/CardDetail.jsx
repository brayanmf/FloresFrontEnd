import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";
import "./CardDetail.css";

const CardDetail = ({product}) => {
	const [quantity, setQuantity] = useState(1);
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

	const optionsStart = {
		color: "rgba(8, 8, 8, 0.83)",
		edit: false,
		activeColor: "tomato",
		size: window.innerWidth > 768 ? 20 : 15,
		value: product.ratings,
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
				<div className="flex  content-center p-4">
					<div>
						<button
							type="button"
							className="btn btn-secondary "
							onClick={decreaseQuantity}
						>
							-
						</button>
						<input
							readOnly
							type="number"
							className="  text-center h-11 rounded-md w-10 text-black outline-none"
							value={quantity}
						/>
						<button
							type="button"
							className="btn btn-secondary"
							onClick={increaseQuantity}
						>
							+
						</button>
					</div>
					<button type="button" className="btn btn-primary ml-4">
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
			<button type="button" className="btn btn-active">
				Enviar Reseña
			</button>
		</div>
	);
};

export default CardDetail;
