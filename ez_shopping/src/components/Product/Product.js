//This is like a PokedexItem.js
import './product.scss'


const Product = ({ product }) => {
    return (
        <div className="row product_item">
            <div className="col-md-4">
                <img src={product.image} alt="Product Image" />
            </div>
            <div className="col-md-8">
                <div className="product_title">{product.title}</div>
                <div className="product_category">{product.category}</div>
                <div className="product_price">{product.price}</div>
                <div className="product_description">{product.description}</div>
            </div>
        </div>

    )
}

export default Product;