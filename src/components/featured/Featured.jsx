import React from "react";
import SliderCard from "../sliderCard/SliderCard";

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
