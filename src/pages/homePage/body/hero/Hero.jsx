import React from "react";
import {Link} from "react-router-dom";

const Hero = () => {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: `url(./heroImage/pickawood-gf8e6XvG_3E-unsplash.webp)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="hero-overlay bg-opacity-60" />
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">
						Bienvenido a la tienda online Flores
					</h1>
					<p className="mb-5">Encuentra productos increíbles</p>
					<Link to="/products" className="btn btn-primary">
						Empezar
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
