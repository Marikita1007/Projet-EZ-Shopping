import "./App.scss";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom"; // Import HashRouter instead of BrowserRouter
import {setProducts} from "./actions/actions-type";
import { useDispatch } from "react-redux"; // Remove Provider import since it's no longer needed with HashRouter
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
			<HashRouter> {/* Use HashRouter instead of BrowserRouter for github page */}
				<Header toggleDarkMode={toggleDarkMode} />
				<main id="main_content">
					<ScrollToTop />
					<Routes>
						<Route path={'/'} element={<Home />}/>
						<Route path={'/profile'} element={<Profile />} />
						<Route path={'/cartPage'} element={<CartPage />} />
						<Route path={"*"} element={ <p>404</p> } />
					</Routes>
				</main>
			</HashRouter>
		</div>
	);
};

export default App;
