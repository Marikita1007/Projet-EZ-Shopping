import "./cart.scss";
import BtnAddToCart from "../BtnAddToCart/BtnAddToCart";
import {useSelector, useDispatch, connect} from "react-redux";
import {resetQuantity} from "../../actions/actions-type";
import {getLocalStorageData} from "../../utils/localStorage";
import BtnRemoveFromCart from "../BtnRemoveFromCart/BtnRemoveFromCart";

const Cart = () => {

    const {firstname} = useSelector(getLocalStorageData);
    const cart = useSelector((state) => state.cart.myCart);
    // const quantity = useSelector((state) => state.cart.quantity);
    // const totalQuantity = useSelector((state) => state.cart.quantity);
    const cartLength = useSelector((state) => state.cart.length);
    const dispatch = useDispatch();


    // console.log("cart:", cart);
    // console.log("quantityXart:", quantity);
    //add logic
    const handleClearBasket = () => {
        dispatch(resetQuantity());
        console.log('in cart component')

    }

    return (
        <>
            <section id="cart_page">
                <div className="cart_top">
                    <h3>Hi {firstname} !</h3>
                    <p>There are {cartLength} items in your basket</p>
                    <button
                        type="button"
                        onClick={handleClearBasket}
                        className="btn btn-warning clear_basket"
                    >
                        Clear basket
                    </button>
                </div>
                <div className="cart_products">
                    {Object.keys(cart).map((key) => {
                        const item = cart[key];
                        return (
                            <div key={item.id}>
                                <div className="row product_item">
                                    <div className="col-md-4">
                                        <img src={item.image} alt="Product Image" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="product_info">
                                            <h3 className="product_title">
                                                {item.title} <span className="product_category bg-secondary text-light">{item.category}</span>
                                            </h3>
                                        </div>
                                        <div className="product_description">{item.description}</div>
                                        <div className="product_price">${item.price}</div>
                                        <p>Quantity: {item.quantity}</p>
                                        <BtnRemoveFromCart productToRemove={item.id}/>
                                        {/* Render other properties as needed */}
                                    </div>
                                </div>
                            </div>
                        )
                            ;
                    })}
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state) => ({
    firstname: state.profile.firstname,
});

export default connect(mapStateToProps)(Cart);