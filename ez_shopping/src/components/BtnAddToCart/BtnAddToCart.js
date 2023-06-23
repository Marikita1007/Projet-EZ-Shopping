import "./BtnAddToCart.scss";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { apiAddProductToCart } from "../../apiFunctions/apiFunctions";
import {addProductToCart} from "../../actions/actions-type";

const BtnAddToCart = ({ id }) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		apiAddProductToCart(id)
			.then((item) => {
			// console.log("product quantity:", quantity);
			// console.log("item", item);
			const product = { ...item, quantity: quantity };
			dispatch(addProductToCart(product));
			setQuantity(1);
			})
	};

	const [quantity, setQuantity] = useState(1);

	const updateProductQuantity = (event) => {
		const newQuantity = parseInt(event.target.value);
		//set the default value as 1
		setQuantity(newQuantity >= 1 ? newQuantity : 1);
		console.log("New quantity is : " + newQuantity);
		// dispatch({ type: "UPDATE_QUANTITY", payload: newQuantity });
	};

	return (
		<>
			<div className="product_quantity">
				Quantity:
				<input
					type="number"
					name="quantity"
					className="quantity"
					value={quantity}
					onChange={updateProductQuantity}
					min={1}
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
