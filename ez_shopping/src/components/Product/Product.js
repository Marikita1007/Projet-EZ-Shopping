//This is like a PokedexItem.js
import './product.scss'


const Product = ({ product }) => {
    return (
        <div className="product_item">
            <img src={product.image} alt={"Product Image"} />
            <div className="product_name">{product.title}</div>
            <div className="product_name">{product.category}</div>
            <div className="product_name">{product.price}</div>
            <div className="product_name">{product.description}</div>
        </div>
    )
}

export default Product;