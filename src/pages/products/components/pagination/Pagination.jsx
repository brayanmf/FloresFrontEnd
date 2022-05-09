import React, {useState} from "react";
import Paginationjs from "react-js-pagination";
import "./Pagination.css";

const Pagination = ({
	productsCount,
	resultPerPage,
	setCurrentPageNo,
	currentPage,
}) => {
	return (
		<div className="flex justify-center mt-20 content_pagination  ">
			<Paginationjs
				activePage={currentPage}
				itemsCountPerPage={resultPerPage}
				totalItemsCount={productsCount}
				onChange={setCurrentPageNo}
				nextPageText="Next"
				prevPageText="Prev"
				firstPageText="First"
				lastPageText="Last"
				itemClass="btn "
				linkClass=""
				activeClass="btn btn-active"
				activeLinkClass=""
			/>
		</div>
	);
};

export default Pagination;
