import "./BtnAddToCart.scss";
import {useContext, useState} from "react";
import ProductsContext from "../../data/ProductsContext";
import { apiAddProductToCart } from "../../apiFunctions/apiFunctions";

const BtnAddToCart = ({ id }) => {
	const [state, dispatch] = useContext(ProductsContext);
	const { products } = state;
	// const dispatch = useDispatch();
	// console.log(products);

	const handleAddToCart = () => {
		apiAddProductToCart(id)
			.then((item) => {	
			console.log("quantity", quantity);
			console.log("item", item);
			const product = { ...item, quantity: quantity };
			dispatch({ type: "ADD_PRODUCT_TO_CART", payload: product });
			setQuantity(0);
			})
	};

	const [quantity, setQuantity] = useState(0);

	const updateQuantity = (event) => {
		const newQuantity = parseInt(event.target.value);
		setQuantity(newQuantity);
		console.log("New quantity is : " + newQuantity);
		// dispatch({ type: "UPDATE_QUANTITY", payload: newQuantity });
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
				onClick={handleAddToCart}
				className="btn btn-warning add_product"
			>
				Add to basket
			</button>
		</>
	);
};

export default BtnAddToCart;
