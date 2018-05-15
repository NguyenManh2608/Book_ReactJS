import {ADD_BOOK, DELETE_BOOK, EDIT_BOOK, LOAD_BOOK, SEARCH_BOOK} from "../Actions";
let defaultState =
    [
        {
            id: 1,
            title: "god of cards",
            author: "twisted_fate",
            publisher: {
                id: 1,
                name: "League of Legends",
                address: "Garena",
                phone: "0189885596"
            },
            price: 1996
        }
    ];
export function bookReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_BOOK:
            return [...state, {...action.book}];
        case LOAD_BOOK:
            return [...action.books];
        case DELETE_BOOK:
            return [...action.message];
        case EDIT_BOOK:
            return [...state, {...action.book}];
        case SEARCH_BOOK:
            return [...action.books];
        default:
            return state;
    }
}