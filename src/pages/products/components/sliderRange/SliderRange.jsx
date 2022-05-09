import React, {useState} from "react";

import MultiRangeSlider from "react-js-multi-range-sliders";

import "./SliderRange.css";

const SliderRange = ({setMaxVal, setMinVal}) => {
	const handleRange = (range) => {
		setMaxVal(range.max);
		setMinVal(range.min);
	};

	return (
		<MultiRangeSlider
			min={0}
			max={2500}
			onChange={handleRange}
			className="slider-range"
			title="Rango de precios"
		/>
	);
};

export default SliderRange;
