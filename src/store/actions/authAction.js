import { authType } from "./types/authTypes";

export const logout = (request) => async (dispatch) => {
    dispatch({
        type: authType.LOGOUT,
    });
};