import React, {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {orderDetail} from "../../store/orderReducer/orderReducer.action";
import {clearErrorAction} from "../../store/orderReducer/orderReducer.reducer";
import Alert from "../../components/alert/Alert";
import Loader from "../../components/loader/Loader";

const OrderDetail = () => {
	const dispatch = useDispatch();
	const {order, error, loading} = useSelector((state) => state.order);

	const params = useParams();

	const [bolError, setBolError] = useState(false);
	useEffect(() => {
		if (error) {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				dispatch(clearErrorAction());
			}, 2500);
		}
		dispatch(orderDetail(params.id));
	}, [dispatch, error]);

	return (
		<div className="mt-20 min-h-screen">
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
				<>
					<div className="ml-20">
						<h2 className="text-7xl font-extrabold">Order #{order?._id}</h2>
						<h3 className="my-5 text-4xl font-bold">Datos de envio</h3>
						<p className="ml-5">
							Nombre :{" "}
							<span className="font-bold"> {order?.user?.name}</span>
						</p>
						<p className="ml-5">
							Celular :
							<span className="font-bold">
								{order?.shippingInfo?.phoneNo}
							</span>
						</p>
						<p className="ml-5">
							Dirección :{" "}
							<span className="font-bold">
								{" "}
								{order?.shippingInfo?.address}, {order?.shippingInfo?.city},
								{order?.shippingInfo?.state}, {order?.shippingInfo?.pinCode}
								,{order?.shippingInfo?.country}
							</span>
						</p>
					</div>
					<div className="ml-20 ">
						<h3 className="my-5 text-4xl font-bold">Pago</h3>
						<p
							className={
								order?.paymentInfo?.status === "approved"
									? "text-green-400"
									: "text-red-500"
							}
						>
							{" "}
							{order?.paymentInfo?.status === "approved"
								? "Pagado"
								: "no Pagado"}{" "}
						</p>
						<p>
							Monto :{" "}
							<span className="font-bold"> S/.{order?.totalPrice}</span>
						</p>
					</div>
					<div className="ml-20">
						<h3 className="my-5 text-4xl font-bold">Estado del pedido</h3>
						<p
							className={`font-bold ${
								order?.orderStatus === "Processing"
									? "text-red-500"
									: "text-green-400"
							}`}
						>
							{order.orderStatus}
						</p>
					</div>
					<div className="divider" />
					<h2 className=" ml-20 m-5 text-4xl font-bold">Artículos</h2>
					{order?.orderItems &&
						order?.orderItems.map((item) => (
							<div
								className="w-5/6 mx-auto lg:flex justify-between items-center my-3"
								key={item._id}
							>
								<div className="avatar  flex items-center">
									<div className="w-24 rounded-xl ">
										<img src={item.image} alt="product" />
									</div>
									<Link to="/" className="ml-3 link link-secondary">
										{item.name}
									</Link>
								</div>

								<div className="m-3">
									S/.{item.quantity} X S/.{item.price} ={" "}
									<b>S/.{item.price * item.quantity}</b>
								</div>
							</div>
						))}
				</>
			)}
		</div>
	);
};

export default OrderDetail;
