import { SET_FIRSTNAME, SET_LASTNAME, SET_EMAIL } from "../constants/actions";

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
