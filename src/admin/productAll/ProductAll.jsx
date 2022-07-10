/* eslint-disable no-unused-expressions */
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getProducts} from "../../store/adminReducer/adminReducer.action";
import {clearErrorAction} from "../../store/adminReducer/adminReducer.reducer";
import Table from "../../components/table/Table";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";

const columns = [
	{
		Header: "Producto ID",
		accessor: "id",
	},
	{Header: "Nombre", accessor: "nombre"},
	{
		Header: "Stock",
		accessor: "stock",
	},
	{
		Header: "Precio",
		accessor: "precio",
		Cell: (row) => {
			const {value} = row;
			return <span>S/.{value}</span>;
		},
	},
	{
		Header: "Acciones",
		accessor: "acciones",
		Cell: (row) => {
			const {value} = row;
			return (
				<div className="flex justify-evenly">
					<Link
						to={`/admin/product/${value}`}
						className="link link-primary text-xl font-bold"
					>
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 59.985 59.985"
							className="w-5 h-5"
							xmlSpace="preserve"
						>
							<g>
								<path d="M5.243,44.844L42.378,7.708l9.899,9.899L15.141,54.742L5.243,44.844z" />
								<path
									d="M56.521,13.364l1.414-1.414c1.322-1.322,2.05-3.079,2.05-4.949s-0.728-3.627-2.05-4.949S54.855,0,52.985,0
		s-3.627,0.729-4.95,2.051l-1.414,1.414L56.521,13.364z"
								/>
								<path
									d="M4.099,46.527L0.051,58.669c-0.12,0.359-0.026,0.756,0.242,1.023c0.19,0.19,0.446,0.293,0.707,0.293
		c0.106,0,0.212-0.017,0.316-0.052l12.141-4.047L4.099,46.527z"
								/>
								<path d="M43.793,6.294l1.415-1.415l9.899,9.899l-1.415,1.415L43.793,6.294z" />
							</g>
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
						</svg>
					</Link>
					<button type="button">
						<svg
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 475.628 475.628"
							className="w-5 h-5 "
							xmlSpace="preserve"
						>
							<g>
								<path
									d="M301.681,74.436l12.997-35.708L208.275,0l-12.996,35.708L116.923,7.189L96.402,63.57l263.114,95.766l20.521-56.381
		L301.681,74.436z M226.205,38.451l50.022,18.207l-2.736,7.517l-50.022-18.207L226.205,38.451z"
								/>
								<rect x="185.592" y="170.628" width="60" height="305" />
								<rect x="275.592" y="170.628" width="60" height="305" />
								<rect x="95.592" y="170.628" width="60" height="305" />
							</g>
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
							<g />
						</svg>
					</button>
				</div>
			);
		},
	},
];
const ProductAll = () => {
	const {error, loading, products} = useSelector((state) => state.admin);
	const dispatch = useDispatch();
	const [bolError, setBolError] = useState(false);

	useEffect(() => {
		if (error) {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				dispatch(clearErrorAction());
			}, 2500);
		}
		dispatch(getProducts());
	}, [dispatch, clearErrorAction]);
	const data = [];

	products &&
		products.forEach((element) => {
			data.push({
				id: element._id,
				nombre: element.name,
				precio: element.price,
				stock: element.Stock,
				acciones: element._id,
			});
		});
	return (
		<div className="mt-20">
			{bolError && (
				<Alert
					type="alert-error"
					styleAlert="absolute  w-1/4 mt-20 top-0 right-0 "
					message={error}
				/>
			)}

			<h2>Todos los Productos</h2>
			{loading ? (
				<Loader styleLoader="absolute  inset-2/4" />
			) : (
				<Table columns={columns} data={data} />
			)}
		</div>
	);
};

export default ProductAll;
