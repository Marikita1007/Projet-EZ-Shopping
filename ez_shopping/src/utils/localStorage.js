import {useEffect} from "react";


localStorage.setItem('firstname', 'Alan');
localStorage.setItem('lastname', 'Rickman');
localStorage.setItem('email', 'alan-fakestore@3wa');


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


