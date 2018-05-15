import {GET_PUBLISHERS} from "../Actions";
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
export function publisherReducer(state = defaultState, action) {
    if (action.type === GET_PUBLISHERS) {
        return [...action.publishers];
    } else {
        return state;
    }
}