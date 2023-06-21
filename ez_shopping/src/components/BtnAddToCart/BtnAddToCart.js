import "./BtnAddToCart.scss";
import {useContext, useState} from "react";
import ProductsContext from "../../data/ProductsContext";

const BtnAddToCart = ({ id }) => {
	const [state, dispatch] = useContext(ProductsContext);

	const addProductToCart = () => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((response) => response.json())
			.then((json) => console.log(json))
			.then((APIPokemon) => {
				// On demande au reducers d'ajouter ce pokemon dans state.myTeam
				dispatch({ type: "ADD_POKEMON_TO_TEAM", payload: APIPokemon });
			});
	};

	const [quantity, setQuantity] = useState(0);

	const updateQuantity = (event) => {
		const newQuantity = parseInt(event.target.value);
		setQuantity(newQuantity);
		console.log("New quantity is : " + newQuantity);
		dispatch({ type: "UPDATE_QUANTITY", payload: newQuantity });
	};

	return (
		<>
			<div className="product_quantity">
				Quantity:{" "}
				<input
					type="number"
					name="quantity"
					className="quantity"
					value={quantity}
					onChange={updateQuantity}
				/>
			</div>
			<button
				type="button"
				onClick={addProductToCart}
				className="btn btn-warning add_product"
			>
				Add to basket
			</button>
		</>
	);
};

export default BtnAddToCart;
