// import {
// 	 SET_PRODUCTS
// } from '../constants/actions'

export const initialState = {
	products: [],
};

const productReducer = (state = initialState, action) => {
	console.log("in reducer");
	switch (action.type) {
		case "SET_PRODUCTS":
			console.log(state);
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
};

export default productReducer;

