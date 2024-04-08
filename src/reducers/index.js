import { combineReducers } from 'redux';
import authReducer from "./auth.reducer"
import categoryReducer from './category.reducer';
import articleReducer from './article.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    category:categoryReducer,
    article:articleReducer
})

export default rootReducer