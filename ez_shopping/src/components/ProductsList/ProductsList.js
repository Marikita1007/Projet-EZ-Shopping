//This file is like a Pokedex.js
import {useContext} from "react";
import ProductsContext from "../../data/ProductsContext";
import Product from "../Product/Product";

const ProductsList = () => {

    const[state, dispatch] = useContext(ProductsContext)

    return (
        <section id="products">
            <div className="products_list">
                {/*{ state.products.length > 0 && state.products.map( (title, i) => (*/}
                {/*    <Product key={i} title={title}/>*/}
                {/*))}*/}

                {state.products.map((product, i) => (
                    <Product key={i} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductsList;