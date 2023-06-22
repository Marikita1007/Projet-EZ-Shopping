//This file is like a Pokedex.js
import Product from "../Product/Product";
import './productsList.scss'
import { useSelector } from "react-redux";

const ProductsList = () => {

    const {products} = useSelector(store => store.products)
    console.log('products:', products)

    return (
        <section id="products">
            <div className="products_list">
                {/*{ state.products.length > 0 && state.products.map( (title, i) => (*/}
                {/*    <Product key={i} title={title}/>*/}
                {/*))}*/}

                {products.map((product, i) => (
                    <Product key={i} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductsList;