import React from "react";
import ReactStars from "react-rating-stars-component";

const optionsStart = {
	color: "rgba(8, 8, 8, 0.83)",
	edit: false,
	size: window.innerWidth > 768 ? 20 : 15,

	isHalf: true,
};
const ReviewsCard = ({reviews}) => {
	return (
		<div className="w-full  ">
			<h2 className="text-center font-bold text-2xl p-5  underline decoration-indigo-500">
				Reseñas
			</h2>
			{reviews && reviews[0] ? (
				<div className="flex ">
					{reviews.map((review) => (
						<div className="card w-96 bg-base-100 shadow-xl m-5">
							<div className="avatar mx-auto mt-5">
								<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
									<img src={review.photoProfile} alt="user" />
								</div>
							</div>

							<div className="card-body">
								<h2 className="card-title mx-auto">{review.name}</h2>
								<ReactStars {...optionsStart} value={review.rating} />
								<p className="break-words">{review.comment}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<p className="text-center p-4">Aún no hay reseñas</p>
			)}
		</div>
	);
};

export default ReviewsCard;
