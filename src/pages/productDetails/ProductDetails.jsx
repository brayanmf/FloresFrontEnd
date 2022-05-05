import React from "react";
import ReactStars from "react-rating-stars-component";
import ProductSlide from "./productSlide/ProductSlide";

const optionsStart = {
	color: "rgba(20,20,20,0.1)",
	edit: false,
	activeColor: "tomato",
	size: window.innerWidth > 768 ? 20 : 15,
	value: 2.5,
	isHalf: true,
};

const ProductDetais = () => {
	return (
		<div className="flex flex-col w-full lg:flex-row min-h-screen">
			<div className="grid flex-grow mx-14 my-16 card bg-base-300 rounded-box place-items-center">
				<ProductSlide />
			</div>
			<div className="divider lg:divider-horizontal" />
			<div className="grid flex-grow mx-14 my-16  card bg-base-300 rounded-box place-items-center">
				<div>
					<div>
						<h2>product name</h2>
						<p>product # id</p>
					</div>
					<div>
						<ReactStars {...optionsStart} />
						<span>Reviews</span>
					</div>
					<div>
						<h1>price</h1>
						<div>
							<div>
								<button type="button">-</button>
								<input type="number" value={1} />
								<button type="button">+</button>
							</div>
							<button type="button">Agregar al Carrito</button>
						</div>
						<p>
							Estado<b>stock</b>
						</p>
					</div>
					<div>Descripción</div>
					<button type="button">Submit Review</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetais;
