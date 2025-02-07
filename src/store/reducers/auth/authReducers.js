import { authType } from "../../actions/types/authTypes";

const initialState = { user: true, role: 'A' };

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authType.LOGIN_REQUEST:
            return {
                isLoading: true,
            };
        case authType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loggedIn: true,
                user: action.user,
            };
        case authType.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        case authType.REGISTER_REQUEST:
            return {
                isLoading: true,
            };
        case authType.REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.user,
            };
        case authType.REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        case authType.LOGOUT:
            return {
                ...state,
                user: false
            };
        default:
            return state;
    }
};
