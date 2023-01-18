import React from "react";
import {Typography} from "@mui/material";

const ProductDisplay = () => {

	return (
		<div className="product-display">
			<Typography variant="h4" gutterBottom>
				h2. Heading
			</Typography>
			<div className="display-action">
				<p>3 items by row</p>
				<div>
					<span>3</span>
					<span>4</span>
				</div>
			</div>
		</div>
	)
}

export default ProductDisplay;
