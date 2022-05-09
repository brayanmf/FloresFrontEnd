import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {clearErrorAction} from "../../store/productReducer/product.reducer";
import {getProducts} from "../../store/productReducer/product.actions";
import CardProduct from "../../components/cardProduct/CardProduct";
import Loader from "../../components/loader/Loader";
import Pagination from "./components/pagination/Pagination";
import "./Products.css";
import SliderRange from "./components/sliderRange/SliderRange";
import Category from "./components/category/Category";
import InputRange from "./components/inputRange/InputRange";
import Alert from "../../components/alert/Alert";

const Products = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const [maxVal, setMaxVal] = useState();
	const [minVal, setMinVal] = useState();
	const [category, setCategory] = useState();
	const [rating, setRating] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [bolError, setBolError] = useState(false);

	const {
		products,
		loading,
		productsCount,
		resultPerPage,
		filteredProductsCount,
		error,
	} = useSelector((state) => state.product);
	const {keyword} = params;

	const setCurrentPageNo = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		if (error) {
			setBolError(true);
			setInterval(() => {
				setBolError(false);
				dispatch(clearErrorAction);
			}, 100500);
		}

		dispatch(
			getProducts({
				keyword,
				currentPage,
				min: minVal,
				max: maxVal,
				category,
				rating,
			})
		);
	}, [dispatch, keyword, currentPage, minVal, maxVal, category, rating]);

	return (
		<div className=" card  mx-14 my-16 p-6 bg-base-300 rounded-box   min-h-screen content_body">
			<h2 className="text-center  font-bold text-2xl  underline decoration-indigo-500 content_title">
				Productos
			</h2>
			<div className="menu  content_menu">
				<SliderRange setMaxVal={setMaxVal} setMinVal={setMinVal} />
				<Category setCategory={setCategory} />
				<InputRange setRating={setRating} rating={rating} />
			</div>
			{loading ? (
				<Loader />
			) : (
				<div className="content_product">
					{bolError && (
						<Alert
							type="alert-error"
							styleAlert="absolute  w-3/4 mt-32 "
							message={error}
						/>
					)}
					{products &&
						products.map((el) => <CardProduct key={el._id} product={el} />)}
				</div>
			)}

			{resultPerPage < filteredProductsCount && (
				<Pagination
					productsCount={productsCount}
					resultPerPage={resultPerPage}
					currentPage={currentPage}
					setCurrentPageNo={setCurrentPageNo}
				/>
			)}
		</div>
	);
};

export default Products;
