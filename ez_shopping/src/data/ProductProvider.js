import {useReducer} from "react";
import productReducer, {initialState} from "./productReducer";
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