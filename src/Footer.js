import React, { Component } from 'react';
import {HashRouter, Link, Route} from 'react-router-dom';
import './css/Footer.css';
import BookingPage from './BookingPage';
import Saloons from './Saloons'

export default class Home extends Component {

  render() {
    return (
      <HashRouter>
        <div className="container-fluid">
          <div className="col-sm-12 footer">
            <ul className="footer-items">
              <li> <Link to="/Schedule">Tider </Link> </li>
              <li> <Link to="/Saloons" onClick={this.props.saloon}> Salonger </Link> </li>
              <li> <Link to="/FavoritePage">Favoriter </Link> </li>
              <li> <Link to="/BookingPage">Boka </Link> </li>
              <li> <Link to="/ProfilePage">Profil </Link> </li>
            </ul>
          </div>
        </div>

      </HashRouter>
    );
  }
}
