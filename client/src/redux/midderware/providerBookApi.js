import {GET_BOOK} from "../Actions";
import axios from 'axios';
export const providerBookApi = store => next => action => {
    if (action.type === GET_BOOK) {
        axios.get('/book/'+ action.id)
            .then(res => {
                next({
                    type: GET_BOOK,
                    book: res.data
                })
            })
    } else  {
        next(action);
    }
};
