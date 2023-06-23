//This file is like a Pokedex.js
import Product from "../Product/Product";
import './productsList.scss'
import { useSelector } from "react-redux";

const ProductsList = () => {

    const {products} = useSelector(store => store.products)

    return (
        <section id="products">
            <div className="products_list">
                {products.map((product, i) => (
                    <Product key={i} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductsList;