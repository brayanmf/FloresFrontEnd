import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {meOrder} from "../../store/orderReducer/orderReducer.action";
import {clearErrorAction} from "../../store/orderReducer/orderReducer.reducer";
import Table from "../../components/table/Table";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";

const columns = [
	{
		Header: "Estado",
		accessor: "estado",
		Cell: (row) => {
			const {value} = row;
			return (
				<span
					className={`font-bold ${
						value === "Processing" ? "text-red-500" : "text-green-400"
					}`}
				>
					{value}
				</span>
			);
		},
	},
	{Header: "id de Orden", accessor: "id"},
	{
		Header: "Cantidad de productos",
		accessor: "cantidadProd",
	},
	{
		Header: "Monto",
		accessor: "monto",
		Cell: (row) => {
			const {value} = row;
			return <span>S/.{value}</span>;
		},
	},
	{
		Header: "Detalles",
		accessor: "detalles",
		Cell: (row) => {
			const {value} = row;
			return (
				<Link
					to={`/order/detail/${value}`}
					className="link link-primary text-xl font-bold"
				>
					&#9741;
				</Link>
			);
		},
	},
];

const MyOrders = () => {
	const dispatch = useDispatch();
	const {loading, error, orders} = useSelector((state) => state.order);
	const {user} = useSelector((state) => state.auth);
	const [bolError, setBolError] = useState(false);
	const data = [];
	orders.forEach((element) => {
		data.push({
			estado: element.orderStatus,
			id: element._id,
			cantidadProd: element.orderItems.length,
			monto: element.totalPrice,
			detalles: element._id,
		});
	});
	useEffect(() => {
		dispatch(meOrder());
		if (error) {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				dispatch(clearErrorAction());
			}, 2500);
		}
	}, [dispatch, error]);

	return (
		<div className="mt-20 min-h-screen">
			<span className="m-5 text-2xl font-bold block">
				{user.name} Ordenes
			</span>
			{bolError && (
				<Alert
					type="alert-error"
					styleAlert="absolute  w-1/4 mt-20 top-0 right-0  "
					message={error}
				/>
			)}
			{loading ? (
				<Loader styleLoader="absolute  inset-2/4" />
			) : (
				<Table columns={columns} data={data} />
			)}
		</div>
	);
};

export default MyOrders;
