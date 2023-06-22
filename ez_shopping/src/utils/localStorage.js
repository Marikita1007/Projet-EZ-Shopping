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

