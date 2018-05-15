import {combineReducers} from 'redux';

import {bookReducer} from "./bookReducer";
import {publisherReducer} from "./publisherReducer";
import {getBook} from "./getBook";
export default combineReducers({
    bookReducer,
    publisherReducer,
    getBook
});
