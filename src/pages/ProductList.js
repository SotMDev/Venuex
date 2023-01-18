import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useQuery} from 'react-query';
import {useRecoilState} from "recoil";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	Stack,
	Typography
} from "@mui/material";
import {cartState, productDisplayState, productPerPageState, toastState} from "../state/atoms";
import ProductDisplay from "../components/ProductDisplay";
import ProductPerPage from "../components/ProductPerPage";

const ProductList = () => {

	const [productDisplay] = useRecoilState(productDisplayState);
	const [productPerPage] = useRecoilState(productPerPageState);
	let [cart, setCart] = useRecoilState(cartState);
	const [, setToast] = useRecoilState(toastState);

	const productsEndPoint = `https://fakestoreapi.com/products?limit=${productPerPage}`;
	const {
		data,
		isLoading,
		isFetching,
		refetch
	} = useQuery(["products"], () => fetch(productsEndPoint).then(res => res.json()).catch(err => {
			console.log(err);
			setToast({status: true, type: 'error', message: 'Something went wrong!'});
		})
		,
		{cacheTime: 5000});

	const addToCart = (event, product) => {
		event.preventDefault();
		setCart(cart = [...cart, product]);
		setToast({status: true, type: 'success', message: 'Product added to cart!'});
	};

	useEffect(() => {
		refetch();
	}, [productPerPage]);

	return (
		<>
			<ProductDisplay/>
			<div className={"product-container"}>
				{
					isLoading || isFetching ?
						<Stack sx={{color: 'grey.500'}} spacing={2} alignItems={"center"}>
							<CircularProgress color="inherit"/>
						</Stack>
						:
						<Grid container spacing={2}>
							{data.map((product, index) => (
								<Grid key={index} item md={productDisplay === 4 ? 3 : 4} sm={6} xs={12}>
									<NavLink className={"showcase"} to={`/products/${product.id}`}>
										<Card style={{height: "100%"}}>
											<CardMedia
												sx={{height: 160}}
												image={product.image}
												title={product.title}
											/>
											<CardContent>
												<Typography style={{height: "100px", overflow: "hidden"}} gutterBottom
															variant="h6" component="div">
													{product.title}
												</Typography>
												<Typography variant="body2">
													{product.price} €
												</Typography>
												<Typography variant="body2">
													Rating {product.rating?.rate}
												</Typography>
											</CardContent>
											<CardActions style={{justifyContent: "center"}}>
												<Button variant="contained"
														onClick={(event) => addToCart(event, product)}>
													Add to Cart
												</Button>
											</CardActions>
										</Card>
									</NavLink>
								</Grid>
							))}
						</Grid>
				}
			</div>
			<ProductPerPage/>
		</>
	)
}


export default ProductList;