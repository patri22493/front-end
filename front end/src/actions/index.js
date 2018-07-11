import axios from 'axios';

//BOOKS

export const createBook = (title) => {
    return dispatch => {
        dispatch(createBookRequest());

        axios.post(`http://localhost:3001/catalog/book/create`,{title})
        .then(function (response) {
          dispatch(createBookSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(createBookError(error));
        });
    };
}

function createBookRequest() {
    return {
        type: 'CREATE_BOOKS_REQUEST',
        isFetching: true
    };
}

function createBookSuccess (book) {
    return {
        type: 'CREATE_BOOK_SUCCESS',
        isFetching: false,
        error: false,
        genres
    };
}

function createBookError(errorMessage) {
    return {
        type: 'CREATE_BOOK_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

//DELETE

export const deleteBook = (id)=>{
    return dispatch => {
        dispatch(deleteBookRequest());

        axios.delete(`http://localhost:3001/catalog/book/${id}/delete`)
        .then(function(response){
            dispatch(deleteBookSuccess(response.data))
            })
        .catch(function(error){
        dispatch(deleteBookError(error));
        });


}};

export deleteBookRequest()
{
    return {
        type: 'DELETE_BOOK_REQUEST',
        isFetching: true
    };
}

function deleteBookSuccess(book) {
    return {
        type: 'DELETE_BOOKS_SUCCESS',
        isFetching: false,
        error: true,
        errorMessage

    };
}

//obtención y gets.

export const getBooks = () => {
    return dispatch => {
        dispatch(getBooksRequest());
        axios.get(`http://localhost:3001/catalog/books`)
            .then(function(response){
                console.log(response);
                dispatch(getBooksSuccess(response.data.bookList));
            })
            .catch(function (error) {
                dispatch(getBooksError(error));
            });
    };
};

function getBooksRequest() {
    return {
        type:'GET_BOOK_REQUEST',
        isFetching:true
    };
}

function getBookSuccess (books) {
    return{
        type: 'GET_BOOKS_SUCCESS',
        isFetching: false,
        error:false,
        books
    };
}

function getBooksError(errorMessage) {
    return{
        type: 'GET_BOOKS_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

//GENEROS

export const createGenre = (name) =>{
    return dispatch =>{
        dispatch(createGenreRequest());

        axios.post(`http://localhost:3001/catalog/genre/create`,{name})
            .then(function(response){

            dispatch(createGenreSuccess(response.data))
        })
        .catch(function(error){
            dispatch(createGenreError(error));
        })
}
};

function createGenreRequest(){
    return{
        type:'CREATE_GENRES_REQUEST',
        isFetching: true
    };
}

function createGenreSuccess (genre){
    return{
        type:'CREATE_GENRES_SUCCESS',
        isFetching: false,
        error:false,
        genre
    };
}

function createGenreError(errorMessage){
    return{
        type: 'CREATE_GENRES_ERROR',
        isFetching:false,
        error:true,
        errorMessage
    };
}

export const deleteGenre = (id) =>{
    return dispatch => {
        dispatch(deleteGenreRequest());

        axios.delete(`http://localhost:3001/catalog/genre/${id}/delete`)
            .then(function(response){

                dispatch(deleteGenreSuccess(response.data))
            })
            .catch(function (error){
                dispatch(deleteGenreError(error));
            });
    }
};

function deleteGenreRequest() {
    return {
        type:'DELETE_GENRES_REQUEST',
        isFetching:true
    };
}

function deleteGenreSuccess(genre){
    return{
        type:'DELETE_GENRES_SUCCESS',
        isFetching:false,
        error:true
        genre
    };
}

function deleteGenreError(errorMessage){
    return{
        type:'DELETE_GENRE_ERROR',
        isFetching:false,
        error:true,
        errorMessage
    };

}

export const getGenres = () => {
    return dispatch => {
        dispatch(getGenresRequest());
        axios.get(`http://localhost:3001/catalog/genres`)
            .then(function (response) {

                dispatch(getGenresSuccess(response.data.genreList));
            })
            .catch(function (error) {
                dispatch(getGenresError(error));
            });
    };
};

function getGenresRequest() {
    return{
        type:'GET_GENRES_REQUEST',
        isFetching:true,
    };

}

function getGenresSuccess (genres){
    return {
        type:'GET_GENRES_SUCCESS',
        isFetching:false,
        error:false,
        genres
    };
}

function getGenresError(errorMessage){
    return {
        type:'GET_GENRES_ERROR',
        isFetching:false,
        error:true,
        errorMessage
    };
}

export const updateGenre = (id,name) =>{
    console.log(name);
    return dispatch => {
        dispatch(updateGenresRequest());

        axios.put('http://localhost:3001/catalog/genre/${id}/update',{name})
            .then(function(response){
            dispatch(updateGenresSuccess(response.data));
        })
        .catch(function(error){
            dispatch(updateGenresError(error));
        });
    };
};

function updateGenresRequest(){
    return{
        type:'UPDATE_GENRES_REQUEST',
        isFetching: true,
    };
}

function updateGenresSuccess (genre,name){
    return{
        type:'UPDATE_GENRES_SUCCESS',
        isFetching: false,
        error: false,
        genre,name
    };
}

function updateGenresError(errorMessage){
    return{
        type:'UPDATE_GENRES_ERROR',
        isFetching:false,
        error:true,
        errorMessage
    };
}