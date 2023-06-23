import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
	products: productReducer,
	cart: cartReducer,
	profile: profileReducer,
});
