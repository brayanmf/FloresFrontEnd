import React, {useState} from "react";
import {useAsyncDebounce} from "react-table";

const FilterInput = ({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
}) => {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((el) => {
		setGlobalFilter(el || undefined);
	}, 200);
	return (
		<span>
			Buscar:
			<input
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} registros...`}
				className="input input-bordered input-primary w-full max-w-xs ml-3"
			/>
		</span>
	);
};

export default FilterInput;
