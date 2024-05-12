import "./App.scss";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {setProducts} from "./actions/actions-type";
import { useDispatch, Provider } from "react-redux"; // Import Provider from react-redux
import { apiGetProducts } from "./apiFunctions/apiFunctions";
import Home from "./views/Home";
import Profile from "./views/Profile";
import CartPage from "./views/CartPage";
import {useState} from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {

	const dispatch = useDispatch();
	//To set dark mode
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		console.log("Dark mode is on");
	};

	useEffect(() => {
		apiGetProducts().then((data) => {
			dispatch(setProducts(data));
		});
	}, []);

	return (
		<div className={darkMode ? "dark-mode" : ""}>
			<HashRouter>
				<Header toggleDarkMode={toggleDarkMode} />
				<main id="main_content">
					<ScrollToTop />
					<Routes>
						{/* Projet-EZ-Shopping/ is my github Pages subdirectory name*/}
						<Route path={'/Projet-EZ-Shopping/'} element={<Home />}/>
						<Route path={'/Projet-EZ-Shopping/profile'} element={<Profile />} />
						<Route path={'/Projet-EZ-Shopping/cartPage'} element={<CartPage />} />
						<Route path={"*"} element={ <p>404</p> } />
					</Routes>
				</main>
			</HashRouter>
		</div>
	);
};

export default App;
