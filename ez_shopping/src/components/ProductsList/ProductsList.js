//This file is like a Pokedex.js

import {useContext} from "react";
import ProductsContext from "../../data/ProductsContext";
import StoreProduct from "../StoreProduct/StoreProduct";

const StoreProducts = () => {

    const[state, dispatch] = useContext(ProductsContext)

    return (
        // <section id="store_products">
        //     <div className="products">
        //         { state.titles.length > 0 && state.titles.map( (title, i) => (
        //             <StoreProduct key={i} title={title}/>
        //         ))}
        //     </div>
        // </section>
        true
    )
}

export default StoreProducts;