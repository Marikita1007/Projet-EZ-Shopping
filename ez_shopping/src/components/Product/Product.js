//This is like a PokedexItem.js
import './storeProducts.scss'


const StoreProduct = ( { product } ) => {
    return (
        <div>
            <div className="product_name">{product.title}</div>
        </div>
    )
}

export default StoreProduct;