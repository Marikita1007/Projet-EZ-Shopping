import {removeProductFromCart} from "../../actions/actions-type";
import {useDispatch} from "react-redux";

const BtnRemoveFromCart = ( productId ) => {

    const dispatch = useDispatch();

    return (
        <button
            type="button"
            onClick={ () => dispatch( removeProductFromCart(productId))}
            className="btn btn-warning add_product"
        >
            Remove
        </button>
    )
}

export default BtnRemoveFromCart;