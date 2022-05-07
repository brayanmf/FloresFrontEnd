import React from "react";

const pathIcon = {
	alertError: {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "2",
		d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
	},
	alerSuccess: {
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "2",
		d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
	},
};
const svgContent = {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	className: "stroke-current flex-shrink-0 w-6 h-6",
};
const Alert = ({type, message, styleAlert}) => {
	return (
		<div className={`alert ${type} shadow-lg ${styleAlert}`}>
			<div>
				{type === "alert-success" ? (
					<svg {...svgContent}>
						<path {...pathIcon.alerSuccess} />
					</svg>
				) : (
					<svg {...svgContent}>
						<path {...pathIcon.alertError} />
					</svg>
				)}

				<span>{message}</span>
			</div>
		</div>
	);
};

export default Alert;
