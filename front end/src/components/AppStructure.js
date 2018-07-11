import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import GenresPage from '../containers/GenresPage';
import AuthorsPage from '../containers/AuthorsPage';
import BooksPage from '../containers/BooksPage';
import BooksReservePage from '../containers/BooksReservePage';
import BooksLoanPage from '../containers/BooksLoanPage';
import BooksGatherPage from '../containers/BooksGatherPage';
import BooksMaintenancePage from '../containers/BooksMaintenancePage';
import BooksOutOfTimePage from '../containers/BooksOutOfTimePage';

class AppStructure extends Component {

  render() {
    return (
        <Router>
                <div  style={{
                      display: "flex",
                      flexDirection: "row"}}>
                  <div  class ="row" style={{
                        padding: "5px",
                        width: "40vh",
                        background: "#f0f0f0",
                        display: "flex",
                        height: "100vh ",
                        flexDirection: "row"
                      }}>
                  <ul>
                    <li><Link className="menu" to="/"><h2>Mi biblioteca</h2></Link></li>
                        <li><Link className="menu" to="/generos"><h3>Géneros</h3></Link></li>
                        <li><Link className="menu" to="/autores"><h3>Autores</h3></Link></li>
                        <li><Link className="menu" to="/libros"><h3>Libros</h3></Link></li>
                        <li style={{margin:"20px"}}><Link className="menu" to="/libros/reservar"><h3>Reserva Libros</h3></Link></li>
                      <li><Link className="menu" to="/gestion/reservar"><h2>Gestion de la biblioteca</h2></Link></li>
                      <li><Link  className="menu" to="/gestion/prestar"><h3>Prestar Libros</h3></Link></li>
                      <li><Link  className="menu" to="/gestion/recoger"><h3>Recoger Libros</h3></Link></li>
                      <li><Link  className="menu" to="/gestion/mantenimiento"><h3>Libros en mantenimientos</h3></Link></li>
                      <li><Link  className="menu" to="/gestion/fuera-plazo"><h3>Libros fuera de plazo</h3></Link></li>
                  </ul>
                  </div>
                  <div>

                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/generos" component={GenresPage} />
                    <Route path="/autores" component={AuthorsPage} />
                    <Route exact path="/libros" component={BooksPage} />
                    <Route path="/libros/reservar" component={BooksReservePage} />
                    <Route path="/gestion/prestar" component={BooksLoanPage} />
                    <Route path="/gestion/recoger" component={BooksGatherPage} />
                    <Route path="/gestion/mantenimiento" component={BooksMaintenancePage} />
                    <Route path="/gestion/fuera-plazo" component={BooksOutOfTimePage} />
                  </Switch>
                  </div>
                </div>
        </Router>
    );
  }

}

export default AppStructure;
