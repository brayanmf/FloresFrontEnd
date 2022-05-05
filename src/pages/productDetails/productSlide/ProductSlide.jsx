import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./ProductSlide.css";

import {EffectCube, Pagination, Autoplay} from "swiper";

const ProductSlide = () => {
	return (
		<Swiper
			effect="cube"
			grabCursor={true}
			cubeEffect={{
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94,
			}}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={true}
			modules={[Autoplay, EffectCube, Pagination]}
			className="mySwiper"
		>
			<SwiperSlide>
				<img
					src="https://swiperjs.com/demos/images/nature-1.jpg"
					alt="..."
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://swiperjs.com/demos/images/nature-2.jpg"
					alt="..."
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://swiperjs.com/demos/images/nature-3.jpg"
					alt="..."
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://swiperjs.com/demos/images/nature-4.jpg"
					alt="..."
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default ProductSlide;
