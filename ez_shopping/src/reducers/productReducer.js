import {
	 SET_PRODUCTS
} from '../constants/actions'

const initialState = {
	products: [],
};

const productReducer = (state, action) => {
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
