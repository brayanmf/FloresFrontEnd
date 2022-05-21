/* eslint-disable no-console */
/* eslint-disable camelcase */
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {createOrder} from "../store/orderReducer/orderReducer.action";
import useScript from "./useScript";
import formConfig from "../utils/configForm";

export default function useMercadoPago() {
	const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
	const {MercadoPago} = useScript(
		"https://sdk.mercadopago.com/js/v2",
		"MercadoPago"
	);
	const {shippingInfo, cartItems} = useSelector((state) => state.cart);
	const [resultPayment, setResultPayment] = useState(undefined);
	const dispatch = useDispatch();

	const {totalPrice, subTotal, igv, shippingCharges} = orderInfo;

	const order = {
		shippingInfo,
		orderItems: cartItems,
		itemsPrice: subTotal,
		taxPrice: igv,
		shippingPrice: shippingCharges,
		totalPrice,
	};

	useEffect(() => {
		if (MercadoPago) {
			const mp = new MercadoPago(process.env.REACT_APP_PUBLIC_KEY, {
				locale: "es-PE",
			});
			const cardForm = mp.cardForm({
				amount: totalPrice.toString(),
				autoMount: true,
				form: formConfig,
				callbacks: {
					onFormMounted: (error) => {
						if (error)
							return console.warn("Form Mounted handling error: ", error);
						return console.log("OK");
					},

					onSubmit: async (event) => {
						event.preventDefault();

						const {
							paymentMethodId: payment_method_id,
							issuerId: issuer_id,
							cardholderEmail: email,
							amount,
							token,
							installments,
							identificationNumber,
							identificationType,
						} = cardForm.getCardFormData();
						try {
							const {data: response} = await axios.post(
								`${process.env.REACT_APP_BACKEND_ENPOINT}/api/v1/payment/pay`,
								{
									token,
									issuer_id,
									payment_method_id,
									transaction_amount: Number(amount),
									installments: Number(installments),
									description: "Ecommerce",
									payer: {
										email,
										identification: {
											type: identificationType,
											number: identificationNumber,
										},
									},
								},
								{
									headers: {
										"Content-Type": "application/json",
									},
									withCredentials: true,
								}
							);
							const {data} = response;

							if (data.status === "approved") {
								order.paymentInfo = {
									id: data.id,
									status: data.status,
								};
								dispatch(createOrder(order));
							}

							return setResultPayment(data);
						} catch (error) {
							return setResultPayment(error);
						}
					},
				},
			});
		}
	}, [MercadoPago]);

	return resultPayment;
}
