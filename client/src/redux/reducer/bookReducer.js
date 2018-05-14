import {ADD_BOOK, DELETE_BOOK, LOAD_BOOK} from "../Actions";

export function bookReducer(state = [], action) {
    if (action.type === ADD_BOOK) {
        return [...state, {...action.book}];
    }

    if (action.type === LOAD_BOOK) {
        return [...action.books];
    }

    if (action.type === DELETE_BOOK) {
        return [...action.message];
    }
    return state;

}