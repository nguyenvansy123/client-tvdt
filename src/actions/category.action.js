import axios from "../helpers/axios"
import { toast } from 'react-toastify';
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST });
        try {
            const res = await axios.get(`category/getcategories`)
            const { categories } = res.data
            if (res.status === 200) {
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                    payload: { categories }
                })
            }
        }
        catch (error) {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: error.data.error }
            });
        }
    }
}
