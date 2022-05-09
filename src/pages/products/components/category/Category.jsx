/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
// "Todos",
const categories = [
	"Todos",
	"Polos",
	"Camisas",
	"Jeans",
	"Calzados",
	"Sudaderas",
	"suéteres",
	"Sombreros",
	"Accesorios",
];

const Category = ({setCategory}) => {
	return (
		<div className="mr-36">
			<h2 className="text-center  font-bold text-2xl m-2">Categorias</h2>
			<ul className="flex flex-col  transition-all ">
				{categories.map((el) => (
					<li
						className="cursor-pointer hover:bg-violet-700"
						key={el}
						onClick={() => setCategory(el)}
					>
						{el}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Category;
