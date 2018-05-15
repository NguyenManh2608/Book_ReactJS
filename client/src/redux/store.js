import {applyMiddleware, createStore} from 'redux';
import combineReducers from "./reducer/reducer";
import {bookApi} from "./midderware/bookApi";
import {publisherApi} from "./midderware/publisherAPI";
import {providerBookApi} from "./midderware/providerBookApi";

const store = createStore(combineReducers, applyMiddleware(...[bookApi, publisherApi, providerBookApi]));
export default store;