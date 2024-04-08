import { categoryConstants } from "../actions/constants"

const initialState = {
    categories:[],
    loading: false,
    error: null,
    message: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                loading: false,
                categories: action.payload.categories
            }
            break;
        case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;
    }

    return state
}