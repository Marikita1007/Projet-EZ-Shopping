import { getTotalQuantity } from "./helpers";

export const initialState = {
	products: [],
	myCart: {},
	error: false,
	quantity: 0,
};

const ProductReducer = (state, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};
		case "ADD_PRODUCT_TO_CART":
			const updatedCart = {
				...state.myCart,
				[action.payload.id]: action.payload,
			};
			console.log(JSON.parse(JSON.stringify(action.payload)));
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
		default:
			return state;
	}
};

export default ProductReducer;
