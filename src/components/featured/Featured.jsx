import React from "react";
import SliderCard from "../sliderCard/SliderCard";

/* 	<div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://api.lorem.space/image/shoes?w=400&h=225"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							Shoes!
							<div className="badge badge-secondary">NEW</div>
						</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<div className="badge badge-outline">Fashion</div>
							<div className="badge badge-outline">Products</div>
						</div>
					</div>
				</div> */

const Featured = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col ">
				<div>
					<h1 className="text-4xl font-bold text-center">
						Productos Destacados
					</h1>
				</div>
				<SliderCard />
			</div>
		</div>
	);
};

export default Featured;
