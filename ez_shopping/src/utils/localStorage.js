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


// // Define storage
// const STORAGE_KEY = 'myAppData';
//
// // Save Date
// export function saveData(data) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// }
//
// // Read Data
// export function loadData() {
//     const data = localStorage.getItem(STORAGE_KEY);
//     return data ? JSON.parse(data) : null;
// }

//MARIKA TEST
//Save the Cart Items
export const saveCartItems = (items) => {
    //key is 'cartItems' and make it to string
    localStorage.setItem('cartItems', JSON.stringify(items));
};

export const getCartItems = () => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
};
