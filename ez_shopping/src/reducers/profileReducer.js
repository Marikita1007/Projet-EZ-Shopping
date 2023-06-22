import { SET_FIRSTNAME, SET_LASTNAME, SET_EMAIL } from "../constants/actions";

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRSTNAME:
            return {
                ...state,
                firstname: action.payload,
            };
        case SET_LASTNAME:
            return {
                ...state,
                lastname: action.payload,
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state;
    }
};

export default profileReducer;
