import React, {useEffect} from "react";
import {
	CategoryScale,
	LinearScale,
	LineElement,
	Chart,
	PointElement,
	ArcElement,
} from "chart.js";
import {Doughnut, Line} from "react-chartjs-2";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../store/adminReducer/adminReducer.action";

Chart.register(
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	ArcElement
);

const Graphics = () => {
	const {products} = useSelector((state) => state.admin);
	const dispatch = useDispatch();
	let constStock = 0;

	products.forEach((items) => {
		if (items.Stock === 0) {
			constStock += 1;
		}
	});
	const lineState = {
		labels: ["Monto Inicial ", "Monto ganado"],
		datasets: [
			{
				label: "MONTO TOTAL",
				data: [2500, 4000],

				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				hoverBackgroundColor: "rgb(255,255,255)",
			},
		],
	};
	const doughState = {
		labels: ["Fuera de Stock ", "En stock"],
		datasets: [
			{
				backgroundColor: ["rgb(255,50,10)", "rgba(255, 99, 132, 0.5)"],
				hoverBackgroundColor: ["rgb(255,25,180)", "rgb(255,255,255)"],
				data: [constStock, products.length - constStock],
			},
		],
	};
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return (
		<div className="text-center text-gray-300">
			<h3 className="font-extrabold text-2xl p-5">Dashboard</h3>

			<div className="">
				<div className="bg-secondary-focus p-5 m-20">
					<p className="text-xl font-extrabold">
						Total Amount <br /> S./2000
					</p>
				</div>
				<div className="flex justify-evenly ">
					<Link
						to="/admin/products"
						className="rounded-full  bg-red-500  h-40 w-40 flex flex-col justify-center items-center"
					>
						<p className="text-xl font-bold">Product</p>
						<p className="text-xl ">{products?.length}</p>
					</Link>
					<Link
						to="/admin/orders"
						className="rounded-full bg-blue-500   h-40 w-40 flex flex-col justify-center items-center"
					>
						<p className="text-xl font-bold">Orders</p>
						<p className="text-xl">20</p>
					</Link>
					<Link
						to="/admin/users"
						className="rounded-full bg-gray-900   h-40 w-40 flex flex-col justify-center items-center"
					>
						<p className="text-xl font-bold">Users</p>
						<p className="text-xl">60</p>
					</Link>
				</div>
				<div className="w-4/5 mx-auto mt-8">
					<Line data={lineState} />
				</div>
				<div className="w-3/5 mx-auto mt-8">
					<Doughnut data={doughState} />
				</div>
			</div>
		</div>
	);
};

export default Graphics;
