import { getTotalQuantity } from "../data/helpers";
import { ADD_PRODUCT_TO_CART, UPDATE_QUANTITY } from "../constants/actions";

const stateInit = {
	myCart: {},
	quantity: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
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

export default cartReducer;


