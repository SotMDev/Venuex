import React from 'react';
import {Container} from '@mui/material';
import {RecoilRoot} from "recoil";
import {Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Header from "./components/Header";
import './assets/scss/helpers.scss';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false
			}
		}
	});

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<RecoilRoot>
					<Header/>
					<Container maxWidth={"md"}>
						<Routes>
							<Route exact path="/" element={<Home/>}></Route>
							<Route exact path="/products">
								<Route index element={<ProductList/>}/>
								<Route path=":id" element={<ProductDetail/>}/>
							</Route>
						</Routes>
					</Container>
				</RecoilRoot>
			</div>
		</QueryClientProvider>
	);

}

export default App;
