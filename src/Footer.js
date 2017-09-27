import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom';
import './css/Footer.css';

export default class Home extends Component {

  render() {
    return (
      <HashRouter>
        <ul className="footer-ul">
          <li> <Link to="/">Hem </Link> </li>
          <li> <Link to="/Saloons"> Salonger </Link> </li>
          <li> <Link to="/FavoritePage">Favoriter </Link> </li>
          <li> <Link to="/BookingPage">Boka </Link> </li>
          <li> <Link to="/ProfilePage">Profil </Link> </li>
        </ul>
      </HashRouter>
    );
  }
}
