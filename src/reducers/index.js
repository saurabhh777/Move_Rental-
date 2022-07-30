import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import customerReducer from "./customerReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer"
import movieReducer from "./movieReducer";
import rentalReducer from "./rentalReducer"
export default combineReducers({genreReducer,customerReducer,loginReducer,userReducer,movieReducer,rentalReducer})







