import "./App.scss";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {setProducts} from "./actions/product"
import { useDispatch, Provider } from "react-redux"; // Import Provider from react-redux
import ProductsList from "./components/ProductsList/ProductsList";
import { apiGetProducts } from "./apiFunctions/apiFunctions";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		apiGetProducts().then((data) => {
			let APIProducts = data;
			dispatch({ type: "SET_PRODUCTS", payload: APIProducts });
		});
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<main id="app_ez_shopping">
				<ProductsList />
			</main>
		</BrowserRouter>
	);
};

export default App;
