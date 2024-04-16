import { authConstants } from "../actions/constants"

const initialState = {
    token: null,
    user: {
        email: "",
        picture: "",
    },
    users: [],
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            };
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
            };
            break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                authenticate: false,
                authenticating: false,
                error: action.payload.error
            }
            break

        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initialState,
            };
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case authConstants.GET_ALL_USER_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case authConstants.GET_ALL_USER_SUCCESS:
            state = {
                ...state,
                users: action.payload.users,
                loading: false,
            };
            break;
        case authConstants.GET_ALL_USER_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false,
            };
            break;
        case authConstants.SIGNUP_REQUEST:
            break;
        case authConstants.SIGNUP_SUCCESS:
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                error: action.payload,
            };
            break;

        case authConstants.PASSWORD_RESET_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.PASSWORD_RESET_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case authConstants.PASSWORD_RESET_FAILURE:
            state = {
                ...state,
                error: action.payload,
                loading: false
            };
            break;

        case authConstants.CHANGE_PASSWORD_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.CHANGE_PASSWORD_SUCCESS:
            state = {
                ...state,
                loading: false
            }
            break;
        case authConstants.CHANGE_PASSWORD_FAILURE:
            state = {
                ...state,
                error: action.payload,
                loading: false
            };
            break;

        default:
            break;
    }

    return state
}