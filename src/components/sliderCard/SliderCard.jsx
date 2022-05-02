/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-boolean-value */
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "./SliderCard.css";
import {Autoplay, EffectCoverflow, Pagination} from "swiper";
import CardProduct from "../cardProduct/CardProduct";
import product from "../../mock/product";

const SliderCard = () => {
	return (
		<Swiper
			effect={"coverflow"}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={"auto"}
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
			className="mySwiper"
		>
			<SwiperSlide>
				<CardProduct product={product} />
			</SwiperSlide>
			<SwiperSlide>
				<CardProduct product={product} />
			</SwiperSlide>
			<SwiperSlide>
				<CardProduct product={product} />
			</SwiperSlide>
			<SwiperSlide>
				<CardProduct product={product} />
			</SwiperSlide>
			<SwiperSlide>
				<CardProduct product={product} />
			</SwiperSlide>
		</Swiper>
	);
};

export default SliderCard;
