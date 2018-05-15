import {GET_BOOK} from "../Actions";
let defaultState =
    [
        {
            id: 1,
            title: "god of cards",
            author: "twisted_fate",
            publisher: {
                id: 1,
                name: "League of Legends"

            },
            price: 1996
        }
    ];
export function getBook(state = defaultState, action) {
    if (action.type === GET_BOOK) {
        return [...action.book];
    } else {
        return state;
    }
}