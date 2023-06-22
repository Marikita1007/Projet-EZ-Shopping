import "./App.scss";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {setProducts} from "./actions/product"
import { useDispatch, Provider } from "react-redux"; // Import Provider from react-redux
import ProductsList from "./components/ProductsList/ProductsList";
import { apiGetProducts } from "./apiFunctions/apiFunctions";
import Home from "./views/Home";
import Profile from "./views/Profile";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		apiGetProducts().then((data) => {
			let APIProducts = data;
			console.log('api prod: ',APIProducts)
			dispatch({ type: "SET_PRODUCTS", payload: APIProducts });
			console.log("api prod: ", APIProducts);
		});
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<main id="main_content">
				<Routes>
					<Route path={'/'} element={<Home />}/>
					<Route path={'profile'} element={<Profile />} />
					<Route path={"*"} element={ <p>404</p> } />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
