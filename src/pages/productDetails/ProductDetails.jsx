import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CardDetail from "./components/cardDetail/CardDetail";
import {getProductDetail} from "../../store/productDetailReducer/productDetail.action";
import ProductSlide from "./components/productSlide/ProductSlide";
import ReviewsCard from "./components/reviewsCard/ReviewsCard";
import Loader from "../../components/loader/Loader";
import {clearErrorAction} from "../../store/productDetailReducer/productDetail.reducer";
import Alert from "../../components/alert/Alert";

const ProductDetais = () => {
	const params = useParams();
	const [bolError, setBolError] = useState(false);
	const {product, loading, error} = useSelector(
		(state) => state.productDetail
	);

	const dispatch = useDispatch();
	useEffect(() => {
		if (error) {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				dispatch(clearErrorAction);
			}, 2500);
		}
		dispatch(getProductDetail(params.id));
	}, [dispatch, params.id, error]);
	return loading ? (
		<Loader styleLoader="absolute inset-1/2" />
	) : (
		<>
			{bolError && (
				<Alert
					type="alert-error"
					styleAlert="absolute inset-1/2"
					message={error}
				/>
			)}
			<div className="flex flex-col w-full lg:flex-row min-h-screen">
				<div className="grid flex-grow mx-14 my-16 card bg-base-300 rounded-box place-items-center p-6 shadow-xl ">
					<ProductSlide product={product} />
				</div>
				<div className="divider lg:divider-horizontal" />
				<div className="grid flex-grow mx-14 my-16  card bg-base-300 rounded-box place-items-center p-6 shadow-xl ">
					<CardDetail product={product} />
				</div>
			</div>
			<div className="divider" />
			<div className="grid card bg-base-300 rounded-box place-items-center overflow-x-auto">
				<ReviewsCard product={product} />
			</div>
		</>
	);
};

export default ProductDetais;
