export const initialState = {
	products: [],
	myCart: [],
	error: false,
	quantity: 0,
};


console.log(initialState);

const ProductReducer = (state, action) => {

    switch (action.type) {
			case "SET_PRODUCTS":
				return {
					...state,
					products: action.payload,
				};
			case "ADD_PRODUCT_TO_CART":
				let updatedCart = [...state.myCart];
				updatedCart.push({
					...action.payload,
					quantity: state.quantity, // Add quantity property to the product
				});
				return {
					...state,
					myCart: updatedCart,
					quantity: 0, // Reset quantity to 0 after adding to cart
				};
			case "UPDATE_QUANTITY": // Action type to update the quantity
				return {
					...state,
					quantity: action.payload,
				}
			default:
				return state;
		}
}

export default ProductReducer;