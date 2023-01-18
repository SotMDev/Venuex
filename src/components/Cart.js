import React from "react";
import {useRecoilState} from "recoil";
import {Badge, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {styled} from '@mui/material/styles';
import {cartState} from "../state/atoms";

const Cart = () => {

	const [cart] = useRecoilState(cartState);

	const StyledBadge = styled(Badge)(({theme}) => ({
		'& .MuiBadge-badge': {
			right: -3,
			top: 13,
			border: `2px solid ${theme.palette.background.paper}`,
			padding: '0 4px',
		},
	}));

	return (
		<div className={"cart"}>
			<IconButton aria-label="cart">
				<StyledBadge badgeContent={cart.length} color="secondary">
					<ShoppingCartIcon/>
				</StyledBadge>
			</IconButton>
			<p>Shopping Cart</p>
		</div>
	)
}
export default Cart;