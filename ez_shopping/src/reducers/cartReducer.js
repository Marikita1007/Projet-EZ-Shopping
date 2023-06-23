import { getTotalQuantity } from "../data/helpers";
import product from "../components/Product/Product";
// import { ADD_PRODUCT_TO_CART, UPDATE_QUANTITY } from "../constants/actions";

export const initialState = {
	myCart: {},
	quantity: 0,
	length : 0,
};

const cartReducer = (state = initialState, action) => {
	let updatedCart = {};
	switch (action.type) {
		case "ADD_PRODUCT_TO_CART":
			updatedCart = {
				...state.myCart,
				[action.payload.id]: action.payload,
			};
			// console.log(JSON.parse(JSON.stringify(action.payload)));
			console.log(typeof(updatedCart))
			console.log(updatedCart)
			return {
				...state,
				myCart: updatedCart,
				quantity: getTotalQuantity(updatedCart),
				length: Object.keys(updatedCart).length,
			};
		case "REMOVE_PRODUCT_FROM_CART":
			console.log("REMOVE_PRODUCT_FROM_CART", action.payload);
			console.log("cart before productId is ", state.myCart);
			for (const productId in state.myCart) {
				// console.log("product id is "+productId);
				// console.log("action payload product to remove is ", +action.payload.productToRemove)
				if (parseInt(productId) === action.payload.productToRemove) {
					delete state.myCart[productId];
					break;
				}
			}
			console.log("cart after", state.myCart);

			return {
				...state,
				myCart: { ...state.myCart },
				length: Object.keys(state.myCart).length,
			};
		case "UPDATE_QUANTITY":
			return {
				...state,
				quantity: action.payload,
			};
		case "RESET_QUANTITY":
			return {
				// ...initialState
				// same as below
				myCart: {},
				quantity: 0,
			}
		default:
			return state;
	}
};

export default cartReducer;


