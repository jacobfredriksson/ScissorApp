import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom';
import './css/Footer.css';

export default class Home extends Component {

  render() {
    return (
      <HashRouter>
          <div className="col-sm-12">
            <ul className="footer-ul">
              <li> <Link to="/Home">Hem </Link> </li>
              <li> <Link to="/Schedule">Tider </Link> </li>
              <li> <Link to="/Saloons"> Salonger </Link> </li>
              <li> <Link to="/FavoritePage">Favoriter </Link> </li>
              <li> <Link to="/BookingPage">Boka </Link> </li>
              <li> <Link to="/ProfilePage">Profil </Link> </li>
            </ul>
        </div>
      </HashRouter>
    );
  }
}
