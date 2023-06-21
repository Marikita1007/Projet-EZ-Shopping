export const initialState = {
	products: [],
	myCart: {},
	error: false,
	quantity: 0,
};

console.log(initialState);

const getTotalQuantity = (cart) => {
	let sum = 0;
	Object.values(cart).forEach((product) => {
		sum += product.quantity;
	});
	console.log(sum);
	return sum;
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
			console.log("add product");
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
