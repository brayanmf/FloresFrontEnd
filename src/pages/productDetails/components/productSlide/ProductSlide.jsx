import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "./ProductSlide.css";
import {EffectCube, Pagination, Autoplay} from "swiper";

const ProductSlide = ({product}) => {
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
			{product.images &&
				product.images.map((item, index) => (
					<SwiperSlide key={item.url}>
						<img src={item.url} alt={`${index} Slide`} />
					</SwiperSlide>
				))}
		</Swiper>
	);
};

export default ProductSlide;
