import {GET_PUBLISHERS} from "../Actions";

export function publisherReducer(state = [], action) {
    if (action.type === GET_PUBLISHERS) {
        return [...action.publishers];
    } else {
        return state;
    }
}