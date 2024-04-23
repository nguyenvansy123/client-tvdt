import { postConstants } from "../actions/constants"

const initState = {
    loading: false,
    post: [],
    postForUser: [],
    postDetail: {},
    error: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case postConstants.GET_ALL_POST_REQUEST:
        case postConstants.GET_POST_BY_USER_REQUEST:
        case postConstants.GET_POST_BY_CATEGORY_REQUEST:
        case postConstants.GET_POST_BY_ID_REQUEST:
        case postConstants.ADD_POST_REQUEST:
        case postConstants.DELETE_POST_BY_ID_REQUEST:
        // case postConstants.UPDATE_STATUS_POST_BY_ID_REQUEST:
        case postConstants.DOAWNLOAD_POST_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case postConstants.GET_ALL_POST_SUCCESS:
        case postConstants.GET_POST_BY_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                post: action.payload.items,
            };
            break;
        case postConstants.GET_POST_BY_USER_SUCCESS:
            state = {
                ...state,
                loading: false,
                postForUser: action.payload,
            };
            break;
        case postConstants.GET_POST_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                postDetail: action.payload,
            };
            break;
        case postConstants.ADD_POST_SUCCESS:
        case postConstants.DELETE_POST_BY_ID_SUCCESS:
        // case postConstants.UPDATE_STATUS_POST_BY_ID_SUCCESS:
        case postConstants.DOAWNLOAD_POST_SUCCESS:
            state = {
                ...state,
                loading: false,
            };
            break;
        case postConstants.GET_ALL_POST_FAILURE:
        case postConstants.GET_POST_BY_USER_FAILURE:
        case postConstants.GET_POST_BY_CATEGORY_FAILURE:
        case postConstants.GET_POST_BY_ID_FAILURE:
        case postConstants.ADD_POST_FAILURE:
        case postConstants.DELETE_POST_BY_ID_FAILURE:
        // case postConstants.UPDATE_STATUS_POST_BY_ID_FAILURE:
        case postConstants.DOAWNLOAD_POST_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error,
            };
            break;
        default:
            break;
    }
    return state

}