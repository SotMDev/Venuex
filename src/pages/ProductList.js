import React from 'react';
import {useQuery} from 'react-query';

const ProductList = () => {

	const productsEndPoint = "https://fakestoreapi.com/products?limit=8";
	const {
		data,
		isLoading
	} = useQuery(["products"], () => fetch(productsEndPoint).then(res => res.json()),{cacheTime: 5000});

	return (
		<>
			<div className="product-filtering">
				Filtering
			</div>
			<div className={"product-container"}>
				{
					isLoading ? <h1>Loading</h1>
						:
						<div>
							{data.map((product, index) => (
								<div key={index}>
									<div>{product.id}</div>
									<div>{product.title}</div>
									<img width={100} height={100} src={product.image} alt={product.title}></img>
									<div>{product.price}</div>
									<div>{product.rating?.rate}</div>
								</div>
							))}
						</div>
				}
			</div>
			<div className="product-per-page">
				perPage
			</div>
		</>
	)
}


export default ProductList;