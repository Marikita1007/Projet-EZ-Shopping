import "./header.scss";
import shoppingCartImage from "./logos/shopping-cart.png";
import man from "./logos/man.png";
import light_moon from "./logos/moon_light.png";
import dark_moon from "./logos/moon_dark.png";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import {Fragment} from "react";
import {getLocalStorageData} from "../../utils/localStorage";//get default data


const Header = ({ toggleDarkMode }) => {
	const { firstname, lastname } = useSelector(getLocalStorageData);
	const cartLength = useSelector((state) => state.cart.length);

	return (
		<Fragment>
			<header id="main_header">
				<NavLink className="no-link-style" to="/">
					<div className="store_logo">EZ Shopping</div>
				</NavLink>
				<nav>
					<ul>
						<li>
							<NavLink to="/profile">
								<img className="icons"
									 src={man}
									 alt="Man Icon" />
								{ firstname } { lastname }
							</NavLink>
						</li>
						<li>
							<NavLink to="/cartPage">
								{cartLength}
								<img className="icons"
									 src={shoppingCartImage}
									 alt="Shopping CartPage" />
								items
							</NavLink>
						</li>
						<li>
							<button onClick={toggleDarkMode}>
								<img className="icons"
									 src={dark_moon}
									 alt="Dark Mode"/>
								Dark Mode
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	firstname: state.profile.firstname,
	lastname: state.profile.lastname,
});

export default connect(mapStateToProps)(Header);

