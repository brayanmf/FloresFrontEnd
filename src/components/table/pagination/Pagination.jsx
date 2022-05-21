import React from "react";

/* eslint-disable react/button-has-type */

const Pagination = ({
	canPreviousPage,
	canNextPage,
	pageOptions,
	pageCount,
	gotoPage,
	nextPage,
	previousPage,
	setPageSize,
	pageIndex,
	pageSize,
}) => {
	return (
		<div className="mx-auto grid justify-items-end mb-5">
			<div>
				<button
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
					className="btn"
				>
					{"<<"}
				</button>{" "}
				<button
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
					className="btn"
				>
					{"<"}
				</button>{" "}
				<button
					onClick={() => nextPage()}
					disabled={!canNextPage}
					className="btn"
				>
					{">"}
				</button>{" "}
				<button
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
					className="btn"
				>
					{">>"}
				</button>{" "}
				<span>
					Page{" "}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{" "}
				</span>
				<span>
					| Go to page:{" "}
					<input
						type="number"
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							const page1 = e.target.value ? Number(e.target.value) - 1 : 0;
							gotoPage(page1);
						}}
						style={{width: "100px"}}
						className="input  max-w-xs"
					/>
				</span>{" "}
				<select
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}
					className="select select-primary  max-w-xs"
				>
					{[10, 20, 30, 40, 50].map((el) => (
						<option key={el} value={el}>
							Mostrar {el}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Pagination;
