import React from "react";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
import "./CardProduct.css";

const CardProduct = ({product, classCard}) => {
	const optionsStart = {
		color: "rgba(8, 8, 8, 0.83)",
		edit: false,

		size: window.innerWidth > 768 ? 20 : 15,
		value: product.rating,
		isHalf: true,
	};
	return (
		<div
			className={`card card-normal h-full  bg-base-100 shadow-xl ${classCard}`}
		>
			<figure className="h-3/5 ">
				<img
					className="object-fill h-full w-full"
					src={product?.images[0]?.url}
					alt={product?.name}
				/>
			</figure>
			<div className="card-body ">
				<h2 className="card-title">
					{product?.name}
					<div className="badge badge-secondary">Destacado</div>
				</h2>
				<p>s/{product?.price}</p>
				<div>
					<ReactStars {...optionsStart} />
					<span>{product?.numOfReviews} Reseñas</span>
				</div>
				<div className="card-actions justify-end ">
					<Link
						to={`/product/${product?._id}`}
						className="btn btn-primary btn-sm"
					>
						Comprar
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
