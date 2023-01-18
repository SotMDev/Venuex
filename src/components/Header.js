import React from 'react';
import {NavLink} from "react-router-dom";
import {useRecoilState} from "recoil";
import {Alert, Box, Grid, Snackbar, Stack, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {toastState} from "../state/atoms";
import Cart from "./Cart";
import logo from '../assets/img/logo.png'

const Header = () => {

	const [toast, setToast] = useRecoilState(toastState);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setToast({status: false, type: 'success'});
	};

	return (
		<header id={"header"}>
			<Stack spacing={2} sx={{width: '100%'}}>
				<Snackbar open={toast.status} autoHideDuration={1000} onClose={handleClose}>
					<Alert onClose={handleClose} severity={toast.type} sx={{width: '100%'}}>
						{toast.message}
					</Alert>
				</Snackbar>
			</Stack>
			<Box sx={{m: 2}}>
				<Grid style={{alignItems: 'center'}} container columns={12}>
					<Grid item xs={12} md={4}>
						<div className="logo">
							<NavLink to="/products">
								<img src={logo} alt={"logo"}/>
							</NavLink>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<nav className={"navigation"}>
							<NavLink to="/products">Products</NavLink>
						</nav>
					</Grid>
					<Grid item xs={12} md={4}>
						<Cart/>
						<div className={"search"}>
							<TextField id="outlined-basic" label="Search" variant="outlined"/>
							<SearchIcon className={"search-icon"} sx={{fontSize: 30, color: "#000000"}}/>
						</div>
					</Grid>
				</Grid>
			</Box>
		</header>
	)
}

export default Header;