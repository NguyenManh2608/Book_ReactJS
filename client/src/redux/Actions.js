export const ADD_BOOK       = "ADD_BOOK";
export const LOAD_BOOK      = "LOAD_BOOK";
export const DELETE_BOOK    = "DELETE_BOOK";
export const EDIT_BOOK      = "EDIT_BOOK";
export const GET_PUBLISHERS = "GET_PUBLISHERS";
export const GET_BOOK       = "GET_BOOK";
export const SEARCH_BOOK    = "SEARCH_KEYwORD";
export function addBook(book) {
    return {
        type: ADD_BOOK,
        book: book,
    }
}

export function loadBook() {
    return {
        type: LOAD_BOOK,
    }
}

export function deleteBook(id) {
    return {
        type : DELETE_BOOK,
        id   : id
    }
}

export function getPublishers() {
    return {
        type: GET_PUBLISHERS
    }
}

export function editBook(book) {
    return {
        type    : EDIT_BOOK,
        bookEdit: book
    }
}

export function getBook(id) {
    return {
        type  : GET_BOOK,
        id: id
    }
}
export function searchKeyword(keyword) {
    return {
        type   : SEARCH_BOOK,
        keyword: keyword
    }
}