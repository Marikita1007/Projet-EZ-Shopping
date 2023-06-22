import {
    SET_PRODUCTS,
    ADD_PRODUCT_TO_CART,
    UPDATE_QUANTITY,
    RESET_QUANTITY,
    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_EMAIL,
    REMOVE_PRODUCT_FROM_CART,
} from "../constants/actions";

//PROFILE PAGE
export const setFirstname = (firstname) => ({
    type: SET_FIRSTNAME,
    payload: firstname,
});

export const setLastname = (lastname) => ({
    type: SET_LASTNAME,
    payload: lastname,
});

export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email,
});

//ALL PRODUCT HOME PAGE
export const setProducts = payload => ({
    type: SET_PRODUCTS, payload
});
export const addProductToCart = payload => ({
    type: ADD_PRODUCT_TO_CART, payload
});
export const updateQuantity = payload => ({
    type: UPDATE_QUANTITY, payload
})

export const resetQuantity = payload => ({
    type: RESET_QUANTITY, payload
})

//USER CART PAGE
export const removeProductFromCart = payload => ({
    type: REMOVE_PRODUCT_FROM_CART, payload
})
