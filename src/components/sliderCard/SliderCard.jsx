import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import "./SliderCard.css";
import {Autoplay, EffectCoverflow, Pagination} from "swiper";
import {getProducts} from "../../store/productReducer/product.actions";
import CardProduct from "../cardProduct/CardProduct";
import Alert from "../alert/Alert";
import Loader from "../loader/Loader";

// import product from "../../mock/product";

const SliderCard = () => {
	const dispatch = useDispatch();
	const {products, error, loading} = useSelector((state) => state.product);
	const [bolErr, setBolErr] = useState(false);
	//  productsCount

	useEffect(() => {
		if (error) {
			setBolErr(true);
			setTimeout(() => {
				setBolErr(false);
			}, 1500);
		}
		dispatch(getProducts({}));
	}, [dispatch, error, setBolErr]);

	return loading ? (
		<Loader />
	) : (
		<>
			{bolErr && <Alert type="alert-error" message={error} />}
			<Swiper
				effect="coverflow"
				grabCursor={true}
				centeredSlides={true}
				slidesPerView="auto"
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				initialSlide={1}
				pagination={true}
				modules={[Autoplay, EffectCoverflow, Pagination]}
				className="mySwiper2"
			>
				{products.map((el) => (
					<SwiperSlide className="mySwiper2-card" key={el._id}>
						<CardProduct product={el} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default SliderCard;
