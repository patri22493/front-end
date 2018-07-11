import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBooks, getAuthors, getGenres} from '../actions';








class HomePage extends Component {

    componentWillMount(){
        this.props.getGenres();
        this.props.getBooks();
        this.props.getAuthors();

    }

    render() {
        return (


            <div  >

            <div >
            <h1>{'Mi Biblioteca'}</h1>
            </div>
            <div >
            <img src='http://fundacionirradia.org/wp-content/themes/enfold/js/avia.js?ver=4.1'/>

            </div >
            <Link to='/generos'> <input  className='boton btn btn-outline-primary btn-lg ' type={'button'} value={`${this.props.genres.length}${' Géneros'}`} /></Link>
        <Link to='/autores'> <input  className='boton btn btn-outline-primary btn-lg ' type={'button'} value={`${this.props.authors.length}${' Autores'}`} /></Link>
        <Link to='/libros'>  <input className='boton btn btn-outline-primary btn-lg ' type={'button'} value={`${this.props.books.length}${' Libros'}`} /></Link>
        </div>
        </div>
    );
    }
}


const mapStateToProps = state => {
    return {
        authors: state.authors,
        books: state.books,
        genres: state.genres
    };
};

const mapDispatchToProps = dispatch =>({
    getBooks : () => dispatch (getBooks()),
    getGenres : ()=> dispatch (getGenres()),
    getAuthors : ()=> dispatch (getAuthors()),
});

export default connect (mapStateToProps, mapDispatchToProps) (HomePage);
