import { getTotalQuantity } from "../data/helpers";
// import { ADD_PRODUCT_TO_CART, UPDATE_QUANTITY } from "../constants/actions";

export const initialState = {
	myCart: {},
	quantity: 0,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT_TO_CART":
			const updatedCart = {
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
			};
		case "UPDATE_QUANTITY":
			return {
				...state,
				quantity: action.payload,
			};
		case "RESET_QUANTITY":
			return {
				...initialState
				// same as below
				// myCart: {},
				// quantity: 0,
			}
		default:
			return state;
	}
};

export default cartReducer;


