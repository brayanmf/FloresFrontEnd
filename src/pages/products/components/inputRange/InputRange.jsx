import React, {useState} from "react";

const InputRange = ({setRating, rating}) => {
	const handleChange = (e) => {
		setRating(e.target.value);
	};

	return (
		<div className="mr-36 mt-5">
			<h2 className="font-bold text-xl">Reseñas</h2>
			<input
				type="range"
				min={0}
				max={5}
				step={1}
				value={rating}
				className="range range-primary"
				onChange={handleChange}
			/>
			<div className="flex justify-between text-xs px-2 w-full">
				<span>0</span>
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
			</div>
		</div>
	);
};

export default InputRange;
