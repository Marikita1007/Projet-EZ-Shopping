import "./App.scss";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {setProducts} from "./actions/actions-type";
import { useDispatch, Provider } from "react-redux"; // Import Provider from react-redux
import { apiGetProducts } from "./apiFunctions/apiFunctions";
import Home from "./views/Home";
import Profile from "./views/Profile";
import CartPage from "./views/CartPage";
import {useState} from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {

	//MARIKA TEST localStorage
	const storedItems = JSON.parse(localStorage.getItem('items'));
	//Default value is storedItems if it doesn't exist, it's an empty array
	const [items, setItems] = useState(storedItems || []);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
		console.log(items);
	}, [items]);
	//MARIKA TEST localStorage END


	const dispatch = useDispatch();
	//To set dark mode
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		console.log("Dark mode is on");
	};

	useEffect(() => {
		apiGetProducts().then((data) => {
			let APIProducts = data;
			// console.log('api prod: ',APIProducts)
			dispatch(setProducts(APIProducts));
			// console.log("api prod: ", APIProducts);
		});
	}, []);

	return (
		<div className={darkMode ? "dark-mode" : ""}>
			<BrowserRouter>
				<Header toggleDarkMode={toggleDarkMode} />
				<main id="main_content">
					<ScrollToTop />
					<Routes>
						<Route path={'/'} element={<Home />}/>
						<Route path={'profile'} element={<Profile />} />
						<Route path={'cartPage'} element={<CartPage />} />
						<Route path={"*"} element={ <p>404</p> } />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
};

export default App;
