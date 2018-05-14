import {ADD_BOOK, LOAD_BOOK, DELETE_BOOK} from "../Actions";
import axios from 'axios';
export const bookApi = store => next => action => {
    if (action.type === ADD_BOOK) {
        axios.post('/book', {
            title       : action.book.title,
            author      : action.book.author,
            publisher_id: action.book.publisher_id,
            price       : action.book.price
        }).then((res) => {
            next({
                type: ADD_BOOK,
                book: res.data,
            })
        });
    } else if (action.type === LOAD_BOOK) {
        axios.get('/home')
            .then(res => {
                next({
                    type: LOAD_BOOK,
                    books: res.data,
                })
            });
    } else if(action.type === DELETE_BOOK) {
        axios.delete('/delete/'+ action.id)
            .then(res => {
                next({
                    type: DELETE_BOOK,
                    message: res.data
                })
            })
    } else {
        next(action);
    }
};
