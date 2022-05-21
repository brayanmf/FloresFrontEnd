import React from "react";
import {useTable, useGlobalFilter, usePagination} from "react-table";
import FilterInput from "./filterInput/FilterInput";
import Pagination from "./pagination/Pagination";

const Table = ({columns, data}) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		/* pagination */
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,

		/* filter */
		state: {pageIndex, pageSize, globalFilter},

		preGlobalFilteredRows,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			initialState: {pageIndex: 0},
		},

		useGlobalFilter,
		usePagination
	);

	return (
		<div className=" w-5/6  mx-auto">
			<FilterInput
				preGlobalFilteredRows={preGlobalFilteredRows}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>
			<table {...getTableProps()} className="table  my-16 w-full ">
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<Pagination
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				pageOptions={pageOptions}
				pageCount={pageCount}
				gotoPage={gotoPage}
				nextPage={nextPage}
				previousPage={previousPage}
				setPageSize={setPageSize}
				pageIndex={pageIndex}
				pageSize={pageSize}
			/>
		</div>
	);
};

export default Table;
