import {combineReducers} from "redux";
import currentUser from "./currentUser";
import isToken from "./isToken";
export default combineReducers({
    currentUser,
    isToken
})