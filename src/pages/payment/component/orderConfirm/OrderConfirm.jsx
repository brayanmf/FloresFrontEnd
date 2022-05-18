import React from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const OrderConfirm = () => {
	const {shippingInfo, cartItems} = useSelector((state) => state.cart);
	const {user} = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const subTotal = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);
	const igv = subTotal * 0.18;
	const shippingCharges = subTotal > 1000 ? 0 : 200;

	const totalPrice = subTotal + igv + shippingCharges;
	const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.codePost}, ${shippingInfo.country}`;
	const hanlePayment = () => {
		const data = {
			subTotal,
			shippingCharges,
			igv,
			totalPrice,
		};
		sessionStorage.setItem("orderInfo", JSON.stringify(data));

		navigate("/payment/pay");
	};

	return (
		<div className="bg-base-300 shadow-2xl my-20">
			<div className="justify-around items-center  md:flex ">
				<div className="p-5 md:p-20">
					<h2 className="text-4xl font-bold">Datos de envío</h2>
					<p className="py-3">
						<h2>Nombre :</h2> {user.name}
					</p>
					<p className="py-3">
						<h2>Celular :</h2>
						{shippingInfo.phoneNo}
					</p>
					<p className="py-3">
						<h2>Dirección :</h2> {address}
					</p>
					<div className="py-6">
						<h2>Artículos de su carrito:</h2>
						{cartItems &&
							cartItems.map((item) => (
								<div
									className="md:flex md:justify-around items-center mt-3"
									key={item._id}
								>
									<div className="avatar flex items-center">
										<div className="w-16 md:w-20 rounded">
											<img src={item.image} alt="Product" />
										</div>
										<Link
											to={`/product/${item._id}`}
											className="m-1 md:ml-5 link link-primary"
										>
											{item.name}
										</Link>
									</div>

									<span className="block p-5 md:ml-5">
										{item.quantity} X S/.{item.price} ={" "}
										<b>S/.{item.price * item.quantity}</b>
									</span>
								</div>
							))}
					</div>
				</div>
				<div className="divider divider-horizontal" />
				<div className="p-5 md:p-20">
					<h2 className="text-4xl font-bold">Resumen del pedido</h2>
					<div className="divider" />
					<div>
						<div className="flex items-center justify-between py-3 ">
							<h2>Subtotal:</h2>
							<p>S/.{subTotal}</p>
						</div>
						<div className="flex items-center justify-between py-3">
							<h2>Gastos de envío:</h2>
							<p>S/.{shippingCharges}</p>
						</div>
						<div className="flex items-center justify-between py-3">
							<h2>IGV:</h2>
							<p>S/.{igv}</p>
						</div>
					</div>
					<div className="divider" />
					<div className="flex items-center justify-between ">
						<h2>Total:</h2>
						<p>S/.{totalPrice}</p>
					</div>
					<div className="flex flex-row-reverse mt-6">
						<button
							type="button"
							className="btn btn-primary "
							onClick={hanlePayment}
						>
							Proceder al pago
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderConfirm;
