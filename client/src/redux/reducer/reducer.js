import {combineReducers} from 'redux';

import {bookReducer} from "./bookReducer";
import {publisherReducer} from "./publisherReducer";
export default combineReducers({
    bookReducer,
    publisherReducer
});
