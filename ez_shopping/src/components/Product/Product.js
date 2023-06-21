//This is like a PokedexItem.js
import './product.scss'


const Product = ({ product }) => {
    return (
        <div className="row product_item">
            <div className="col-md-4">
                <img src={product.image} alt="Product Image" />
            </div>
            <div className="col-md-8">
                <div className="product_info">
                    <h3 className="product_title">
                        {product.title} <span className="product_category bg-secondary text-light">{product.category}</span>
                    </h3>
                </div>
                <div className="product_description">{product.description}</div>
                <div className="product_price">${product.price}</div>
                <div className="product_quantity">
                    Quantity: <input type='text' name='quantity' className='quantity'/>
                </div>
                <button type="button" className="btn btn-warning add_product">Add to basket</button>
            </div>
        </div>
    )
}

export default Product;