// import {
// 	 SET_PRODUCTS
// } from '../constants/actions'
// import "../../src/components/BtnAddToCart/BtnAddToCart.scss";
export const initialState = {
	products: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
};

export default productReducer;

