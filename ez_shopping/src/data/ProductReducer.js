export const initialState = {
    products: [],
    error: false
}


const ProductReducer = (state, action) => {

    switch (action.type)
    {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer;