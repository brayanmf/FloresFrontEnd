/* eslint-disable no-useless-return */
import React, {useState} from "react";
import ReactStars from "react-rating-stars-component";

const ReviewsBtn = ({handleReview}) => {
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");
	const [bolModal, setBolModal] = useState(false);

	const submitReviewToggle = () => {
		if (bolModal) {
			setComment("");
			setBolModal(false);
		} else {
			setBolModal(true);
		}
	};

	const handleSubmit = () => {
		setBolModal(false);
		handleReview(rating, comment);
	};

	return (
		<>
			<button
				type="button"
				onClick={submitReviewToggle}
				className="btn btn-active my-20"
			>
				Enviar Reseña
			</button>
			<div
				className={`modal ${
					bolModal
						? "visible opacity-100 pointer-events-auto"
						: "opacity-0 invisible pointer-events-none"
				}`}
			>
				<div className="modal-box relative">
					<button
						type="button"
						onClick={submitReviewToggle}
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</button>
					<h3 className="text-lg font-bold">Enviar reseña</h3>
					<p className="py-4" />
					<ReactStars
						onChange={(e) => setRating(e)}
						size={35}
						classNames="m-auto py-2"
					/>
					<textarea
						className="w-full textarea textarea-primary resize-none "
						cols="40"
						rows="3"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<div className="mt-3">
						<button
							type="button"
							onClick={submitReviewToggle}
							className="btn btn-outline btn-error mx-1"
						>
							Cancelar
						</button>
						<button
							type="button"
							onClick={handleSubmit}
							disabled={comment ? false : true}
							className="btn btn-outline  mx-1"
						>
							Enviar
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReviewsBtn;
