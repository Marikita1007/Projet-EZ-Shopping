import './BtnAddToCart.scss'

const BtnAddToCart = () => {

    return (
        <>
            <div className="product_quantity">
                Quantity: <input type='number' name='quantity' className='quantity'/>
            </div>
            <button type="button" className="btn btn-warning add_product">Add to basket</button>
        </>
    )
}

export default BtnAddToCart;