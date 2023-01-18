import React from "react";
import {useRecoilState} from "recoil";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {productPerPageState} from "../state/atoms";

const ProductPerPage = () => {

	const [productPerPage, setProductPerPage] = useRecoilState(productPerPageState);

	const handleChangePerPage = (event) => {
		setProductPerPage(event.target.value);
	};

	return (
		<div className={"product-per-page"}>
			<span>Items per page</span>
			<FormControl style={{width: "200px"}}>
				<InputLabel id="product-per-page-select">Count</InputLabel>
				<Select
					labelId="product-per-page-select"
					id="product-per-page-select"
					value={productPerPage}
					label="pageCount"
					onChange={handleChangePerPage}
				>
					<MenuItem value={6}>6</MenuItem>
					<MenuItem value={12}>12</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}

export default ProductPerPage;