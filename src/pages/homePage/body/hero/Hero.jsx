import React from "react";

const Hero = () => {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: `url(https://source.unsplash.com/random)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="hero-overlay bg-opacity-60" />
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">
						Welcome to the online store Flowers
					</h1>
					<p className="mb-5">find amazing products below</p>
					<button type="button" className="btn btn-primary">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
