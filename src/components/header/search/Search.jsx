import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Search = () => {
	const [keyword, SetKeyword] = useState("");
	const navigate = useNavigate();

	const searchSubmitHandler = (e) => {
		if (keyword.trim()) {
			navigate(`/products/${keyword}`);
		} else {
			navigate("/products");
		}
	};

	return (
		<div className="form-control mr-2 ">
			<form onSubmit={searchSubmitHandler}>
				<div className="input-group ">
					<div className="mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>

					<input
						type="text"
						placeholder="Buscar..."
						className="input bg-transparent h-8 font-bold  "
						onChange={(e) => {
							SetKeyword(e.target.value);
						}}
					/>
				</div>
			</form>
		</div>
	);
};

export default Search;
