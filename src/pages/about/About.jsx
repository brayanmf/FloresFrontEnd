import React from "react";
import MultiRangeSlider from "react-js-multi-range-sliders";

const About = () => {
	return (
		<MultiRangeSlider
			min={0}
			max={100}
			onChange={({min, max}) => console.log(`min = ${min}, max = ${max}`)}
		/>
	);
};

export default About;
