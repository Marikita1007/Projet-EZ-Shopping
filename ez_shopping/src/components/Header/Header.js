import "./header.scss";
import shoppingCartImage from "./logos/shopping-cart.png";
import man from "./logos/man.png";
import light_moon from "./logos/moon_light.png";
import dark_moon from "./logos/moon_dark.png";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

const Header = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	console.log("header quantity:", quantity);

	return (
		<>
			<header id="main_header">
				<h1>EZ Shopping</h1>
				<nav>
					<ul>
						<li>
							<NavLink to="/profile">
								<img className="icons" src={man} alt="Man Icon" />
								Alan Turing
							</NavLink>
						</li>
						<li>
							<NavLink to="/cart">
								{quantity}
								<img className="icons" src={shoppingCartImage} alt="Shopping Cart" />
								items
							</NavLink>
						</li>
						<li>
							<NavLink to="/dark-mode">
								<img className="icons" src={dark_moon} alt="Dark Mode" />
								Light Mode
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
