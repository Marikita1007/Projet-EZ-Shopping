import "./header.scss";
import shoppingCartImage from "./logos/shopping-cart.png";
import man from "./logos/man.png";
import light_moon from "./logos/moon_light.png";
import dark_moon from "./logos/moon_dark.png";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
//connect関数を使用することで、ReactコンポーネントをReduxのストアに接続し、Reduxのstateをコンポーネントのpropsとして受け取ることができる
//The connect function can be used to connect a React component to a Redux store and receive the Redux state as component props
import {connect} from "react-redux";
import {Fragment} from "react";
import {getLocalStorageData} from "../../utils/localStorage";//get default data


const Header = ({ toggleDarkMode }) => {
	const { firstname, lastname } = useSelector(getLocalStorageData);
	const totalQuantity = useSelector((state) => state.cart.quantity);
	// console.log("header quantity:", totalQuantity);

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
								{totalQuantity}
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

