import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {useRecoilState} from "recoil";
import {Box, Button, CardMedia, CircularProgress, Grid, Stack, Typography} from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {cartState, toastState} from "../state/atoms";

const ProductDetail = () => {

	const {id} = useParams();
	const navigate = useNavigate();

	const productEndpoint = `https://fakestoreapi.com/products/${id}`;

	let [cart, setCart] = useRecoilState(cartState);
	const [, setToast] = useRecoilState(toastState);

	const {
		data,
		isLoading,
		isFetching
	} = useQuery(["product"], () => fetch(productEndpoint).then(res => res.json()));

	const addToCart = (event, product) => {
		event.preventDefault();
		setCart(cart = [...cart, product]);
		setToast({status: true, type: 'success', message: 'Product added to cart!'});
	};

	return (
		<>
			<Button onClick={() => navigate(-1)} variant="outlined" startIcon={<ArrowBackIcon/>}>
				Go back
			</Button>
			{
				isLoading || isFetching ?
					<Stack sx={{color: 'grey.500'}} spacing={2} alignItems={"center"}>
						<CircularProgress color="inherit"/>
					</Stack>
					:
					<div>
						<Box sx={{m: 2}}>
							<Grid container spacing={2} columns={12}>
								<Grid item xs={12} md={6}>
									<CardMedia
										sx={{height: 160}}
										image={data.image}
										title={data.title}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography gutterBottom variant="h4" component="div">
										{data.title}
									</Typography>
									<Typography gutterBottom variant="subtitle1" component="div">
										{data.category}
									</Typography>
									<Typography gutterBottom variant="h6" component="div">
										{data.price} €
									</Typography>
									<Typography gutterBottom variant="h6" component="div">
										<StarRateIcon color="warning"/> {data.rating.rate} ({data.rating.count})
									</Typography>
									<Typography gutterBottom variant="h6" component="div">
										{data.description}
									</Typography>
									<Button variant="contained" onClick={(event) => addToCart(event, data)}>
										Add to Cart
									</Button>
								</Grid>
							</Grid>
						</Box>
					</div>
			}
		</>
	)
}

export default ProductDetail;