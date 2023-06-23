import {useEffect, useState} from "react";


//Default user infos
localStorage.setItem('firstname', 'Alan');
localStorage.setItem('lastname', 'Rickman');
localStorage.setItem('email', 'alan-fakestore@3wa');


//Show the name to Header, cartPage and form
export const getLocalStorageData = () => {
    const storedFirstname = localStorage.getItem('firstname');
    const storedLastname = localStorage.getItem('lastname');
    const storedEmail = localStorage.getItem('email');
    return {
        firstname: storedFirstname,
        lastname: storedLastname,
        email: storedEmail,
    };
};

export const saveCartItems = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
};


export const getCartItems = () => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
};
