import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducers";
import { customerReducer } from "./customerReducer";
import { registrationRequestReducer } from "./registrationRequestReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    customer: customerReducer,
    registrationRequest: registrationRequestReducer,
});
