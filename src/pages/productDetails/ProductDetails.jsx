import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CardDetail from "./components/cardDetail/CardDetail";
import {getProductDetail} from "../../store/productDetailReducer/productDetail.action";
import {newReview} from "../../store/reviewReducer/reviewReducer.action";
import {
	newReviewReset,
	clearReviewErr,
} from "../../store/reviewReducer/reviewReducer.reducer";
import {clearErrorAction} from "../../store/productDetailReducer/productDetail.reducer";
import ProductSlide from "./components/productSlide/ProductSlide";
import ReviewsCard from "./components/reviewsCard/ReviewsCard";
import Loader from "../../components/loader/Loader";
import ReviewsBtn from "./components/reviewsBtn/ReviewsBtn";

import Alert from "../../components/alert/Alert";

const ProductDetais = () => {
	const {product, loading, error} = useSelector(
		(state) => state.productDetail
	);
	const {success, error: errReview} = useSelector((state) => state.review);
	const {reviews} = product;

	const dispatch = useDispatch();
	const params = useParams();
	const [bolError, setBolError] = useState(false);
	const [bolErrorReview, setBolErrorReview] = useState(false);

	const handleReview = (rating, comment) => {
		const obj = {
			rating,
			comment,
			productId: params.id,
		};
		dispatch(newReview(obj));
	};

	useEffect(() => {
		if (error) {
			setBolError(true);
			setTimeout(() => {
				setBolError(false);
				dispatch(clearErrorAction());
			}, 2500);
		}
		if (errReview) {
			setBolErrorReview(true);
			setTimeout(() => {
				setBolErrorReview(false);
				dispatch(clearReviewErr());
			}, 2500);
		}
		if (success) {
			dispatch(newReviewReset());
		}

		dispatch(getProductDetail(params.id));
	}, [dispatch, params.id, error, errReview, success]);
	//
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
					<Link
						to="/products"
						className="text-6xl  leading-9 absolute  left-0 top-0 ml-5 mt-10"
					>
						&#8592;
					</Link>
					<ProductSlide product={product} />
				</div>
				<div className="divider lg:divider-horizontal" />
				<div className="grid flex-grow mx-14 my-16  card bg-base-300 rounded-box place-items-center p-6 shadow-xl ">
					{bolErrorReview && (
						<Alert
							type="alert-error"
							styleAlert="absolute w-2/6 top-0 right-0 mt-5"
							message={errReview}
						/>
					)}
					<CardDetail product={product} />
				</div>
			</div>
			<div className="divider" />
			<div className="grid card bg-base-300 rounded-box place-items-center overflow-x-auto">
				<ReviewsBtn handleReview={handleReview} />

				<ReviewsCard reviews={reviews} />
			</div>
		</>
	);
};

export default ProductDetais;
