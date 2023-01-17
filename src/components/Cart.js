import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Badge} from "@mui/material";

const Cart = () => {
	return (
		<div className={"cart"}>
			<Badge badgeContent={4} color="primary">
				<ShoppingCartIcon sx={{fontSize: 30, color: "#000000"}}/>
			</Badge>
			<p>Shopping Cart</p>
		</div>
	)
}
export default Cart;