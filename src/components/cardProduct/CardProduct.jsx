import React from "react";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

const optionsStart = {
	color: "rgba(20,20,20,0.1)",
	edit: false,
	activeColor: "tomato",
	size: window.innerWidth > 768 ? 20 : 15,
	value: 2.5,
	isHalf: true,
};
const CardProduct = ({product}) => {
	return (
		<div className="card h-full  bg-base-100 shadow-xl">
			<figure className="h-3/5">
				<img
					className="object-cover  h-full w-full"
					src={product.images[0].url}
					alt={product.name}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{product.name}
					<div className="badge badge-secondary">Destacado</div>
				</h2>
				<p>s/{product.price}</p>
				<div>
					<ReactStars {...optionsStart} />
					<span>{product.numOfReviews} Reseñas</span>
				</div>
				<div className="card-actions justify-end">
					<Link
						to={`product/${product._id}`}
						className="btn btn-primary btn-sm"
					>
						Buy Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
