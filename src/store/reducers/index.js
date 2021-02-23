import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducers";

export const rootReducer = combineReducers({
    auth: authReducer,
});
