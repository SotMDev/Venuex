import React from "react";
import {useRecoilState} from "recoil";
import {Typography} from "@mui/material";
import {productDisplayState} from "../state/atoms";

const ProductDisplay = () => {

	const [productDisplay, setProductDisplay] = useRecoilState(productDisplayState);

	const handleDisplayChange = (event) => {
		setProductDisplay(parseInt(event.target.innerHTML));
	}

	return (
		<div className="product-display">
			<Typography variant="h4" gutterBottom>
				Product
			</Typography>
			<div className="display-action">
				<p>{productDisplay} items by row</p>
				<div>
					<span onClick={handleDisplayChange} className={productDisplay === 3 ? 'active' : ''}>3</span>
					<span onClick={handleDisplayChange} className={productDisplay === 4 ? 'active' : ''}>4</span>
				</div>
			</div>
		</div>
	)
}

export default ProductDisplay;
