import "./header.scss";
import shoppingCartImage from "./logos/shopping-cart.png";
import man from "./logos/man.png";
import light_moon from "./logos/moon_light.png";
import dark_moon from "./logos/moon_dark.png";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
//connect関数を使用することで、ReactコンポーネントをReduxのストアに接続し、Reduxのstateをコンポーネントのpropsとして受け取ることができる
import {connect} from "react-redux";
import {Fragment} from "react";
import {getLocalStorageData} from "../../utils/localStorage";


const Header = () => {
	const { firstname, lastname } = useSelector(getLocalStorageData);
	const totalQuantity = useSelector((state) => state.cart.quantity);
	console.log("header quantity:", totalQuantity);

	// データの取得
	// const { firstname } = localStorage.getItem("firstname");
	// const { lastname }  = localStorage.getItem("lastname");

	return (
		<Fragment>
			<header id="main_header">
				<NavLink className="no-link-style" to="/">
					<h1>EZ Shopping</h1>
				</NavLink>
				<nav>
					<ul>
						<li>
							<NavLink to="/profile">
								<img className="icons" src={man} alt="Man Icon" />
								{ firstname } { lastname }
							</NavLink>
						</li>
						<li>
							<NavLink to="/cartPage">
								{totalQuantity}
								<img className="icons" src={shoppingCartImage} alt="Shopping CartPage" />
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
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	firstname: state.profile.firstname,
	lastname: state.profile.lastname,
});

export default connect(mapStateToProps)(Header);
