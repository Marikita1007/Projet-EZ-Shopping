const Cart = () => {

    //add logic
    const handleClearBasket = () => {
        //retreive all quantity and set to 0
        return true;
    }

    return (
        <section id="cart_page">
            <h2>Hi yousername !</h2>
            <p>There are x items in your basket</p>
            <button
                type="button"
                onClick={handleClearBasket}
                className="btn btn-warning clear_basket"
            >
                Add to basket
            </button>
        </section>
    )
}

export default Cart;