export const initialState = {
	products: [],
	myCart: [],
	error: false,
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
				// On fait une copie de state
				let updatedCart = [...state.myCart];
				// On ajoute le pokemon à la liste
				updatedCart.push(action.payload);
				// on retourne une copie du state mise à jour
				// En indiquant que state.myTeam prend pour valeur le tableau mis à jour
				return {
					...state,
					myCart: updatedCart,
				};
			default:
				return state;
		}
}

export default ProductReducer;