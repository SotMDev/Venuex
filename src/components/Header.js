import React from 'react';
import {NavLink} from "react-router-dom";
import {Box, Grid, TextField} from "@mui/material";
import logo from '../assets/img/logo.png'
import Cart from "./Cart";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

	return (
		<header id={"header"}>
			<Box sx={{m: 2}}>
				<Grid className={"align-items-center"} container spacing={2} columns={12}>
					<Grid item xs={12} md={4}>
						<div className="logo">
							<NavLink to="/">
								<img src={logo} alt={"logo"}/>
							</NavLink>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<nav className={"navigation"}>
							<NavLink to="/">Home</NavLink>
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