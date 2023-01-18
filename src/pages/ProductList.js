import React from 'react';
import {useQuery} from 'react-query';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import ProductDisplay from "../components/ProductDisplay";

const ProductList = () => {

	const productsEndPoint = "https://fakestoreapi.com/products?limit=8";
	const {
		data,
		isLoading
	} = useQuery(["products"], () => fetch(productsEndPoint).then(res => res.json()), {cacheTime: 5000});

	return (
		<>
			<ProductDisplay />
			<div className={"product-container"}>
				{
					isLoading ? <h1>Loading</h1>
						:
						<Grid container spacing={2}>
							{data.map((product, index) => (
								<Grid key={index} item xs={4}>
									<Card style={{height: "100%"}}>
										<CardMedia
											sx={{height: 160}}
											image={product.image}
											title={product.title}
										/>
										<CardContent>
											<Typography style={{ height: "100px", overflow: "hidden"}} gutterBottom variant="h6" component="div">
												{product.title}
											</Typography>
											<Typography variant="body2">
												{product.price} €
											</Typography>
											<Typography variant="body2">
												Rating {product.rating?.rate}
											</Typography>
										</CardContent>
										<CardActions style={{ justifyContent: "center" }}>
											<Button size="large">Add to Cart</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
				}
			</div>
			<div className="product-per-page">
				perPage
			</div>
		</>
	)
}


export default ProductList;