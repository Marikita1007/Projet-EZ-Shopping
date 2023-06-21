import {useReducer} from "react";
import ProductReducer, {initialState} from "./ProductReducer";
import ProductsContext from "./ProductsContext";

const ProductProvider = ({children}) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    return (
        <ProductsContext.Provider value={[state, dispatch]}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductProvider;