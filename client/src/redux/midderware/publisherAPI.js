import {GET_PUBLISHERS} from "../Actions";
import axios from 'axios';
export const publisherApi = store => next => action => {
    if (action.type === GET_PUBLISHERS) {
        axios.get('/publishers')
            .then(res => {
                next({
                    type        : GET_PUBLISHERS,
                    publishers  : res.data
                })
            })
    } else {
        next(action);
    }
};
