import React from "react";
import ReactStars from "react-rating-stars-component";

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
		<div className="card h-96  bg-base-100 shadow-xl">
			<figure style={{width: "100%"}}>
				<img
					className="object-cover"
					src={product.image.url[0]}
					alt={product.name}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{product.name}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>s/{product.price}</p>
				<div>
					<ReactStars {...optionsStart} />
				</div>
				<div className="card-actions justify-end">
					<button type="button" className="btn btn-primary btn-sm">
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardProduct;
