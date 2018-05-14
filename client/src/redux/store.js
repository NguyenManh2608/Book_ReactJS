import {applyMiddleware, createStore} from 'redux';
import combineReducers from "./reducer/reducer";
import {bookApi} from "./midderware/bookApi";
import {publisherApi} from "./midderware/publisherAPI";

const store = createStore(combineReducers, applyMiddleware(...[bookApi, publisherApi]));
export default store;