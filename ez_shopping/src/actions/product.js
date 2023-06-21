import {
    SET_PRODUCTS, ADD_PRODUCT_TO_CART, UPDATE_QUANTITY
} from '../constants/actions';

export const setProducts = payload => ({
    type: SET_PRODUCTS, payload
});
export const addProductToCart = payload => ({
    type: ADD_PRODUCT_TO_CART, payload
});
export const updateQuantity = payload => ({
    type: UPDATE_QUANTITY, payload
})