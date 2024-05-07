import { authConstants } from "../actions/constants"

const initialState = {
    token: null,
    user: {
        email: "",
        picture: "",
        username:""
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
        case authConstants.LOGOUT_REQUEST:
        case authConstants.PASSWORD_RESET_REQUEST:
        case authConstants.CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
            };
        case authConstants.LOGOUT_SUCCESS:
            return {
                ...initialState,
            };
        case authConstants.PASSWORD_RESET_SUCCESS:
        case authConstants.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case authConstants.LOGIN_FAILURE:
        case authConstants.LOGOUT_FAILURE:
        case authConstants.PASSWORD_RESET_FAILURE:
        case authConstants.CHANGE_PASSWORD_FAILURE:
        case authConstants.SIGNUP_FAILURE:
            return {
                ...state,
                authenticate: false,
                authenticating: false,
                error: action.payload.error,
                loading: false,
            };
        default:
            return state;
    }
}