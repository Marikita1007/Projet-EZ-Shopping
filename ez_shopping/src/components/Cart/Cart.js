import BtnAddToCart from "../BtnAddToCart/BtnAddToCart";
import {useSelector, useDispatch} from "react-redux";
import {resetQuantity} from "../../actions/actions-type";

const Cart = () => {
    const cart = useSelector((state) => state.cart.myCart);
    const quantity = useSelector((state) => state.cart.quantity);
    const dispatch = useDispatch();
    console.log("cart:", cart);
    console.log("quantityXart:", quantity);
    //add logic
    const handleClearBasket = () => {
        dispatch(resetQuantity());
        console.log('in cart component')

    }

    return (
        <>
            <section id="cart_page">
                <h2>Hi yousername !</h2>
                <p>There are x items in your basket</p>
                <button
                    type="button"
                    onClick={handleClearBasket}
                    className="btn btn-warning clear_basket"
                >
                    Clear basket
                </button>
            </section>
            {/*<div className="row product_item">*/}
            {/*    <div className="col-md-4">*/}
            {/*        <img src={product.image} alt="Product Image"/>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-8">*/}
            {/*        <div className="product_info">*/}
            {/*            <h3 className="product_title">*/}
            {/*                {product.title} <span*/}
            {/*                className="product_category bg-secondary text-light">{product.category}</span>*/}
            {/*            </h3>*/}
            {/*        </div>*/}
            {/*        <div className="product_description">{product.description}</div>*/}
            {/*        <div className="product_price">${product.price}</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                {Object.keys(cart).map((key) => {
                    const item = cart[key];
                    return (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            {/* Render other properties as needed */}
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Cart;