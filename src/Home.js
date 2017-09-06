import React, { Component } from 'react';
import BookingPage from './BookingPage';
import FavoritePage from './FavoritePage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import Saloons from './Saloons';
import {HashRouter, Link, Route} from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <button> <Link to="/BookingPage">Boka </Link> </button>

          <button> <Link to="/FavoritePage">Favoriter </Link> </button>

          <button> <Link to="/LoginPage">Logga in </Link> </button>

          <button> <Link to="/ProfilePage">Profil </Link> </button>

          <button> <Link to="/Saloons">Salonger </Link> </button>


          <Route path="/BookingPage" render={() => (
            <BookingPage />
          )}/>

          <Route path="/FavoritePage" render={() => (
            <FavoritePage />
          )}/>


          <Route path="/LoginPage" render={() => (
            <LoginPage />
          )}/>

          <Route path="/ProfilePage" render={() => (
            <ProfilePage />
          )}/>

          <Route path="/Saloons" render={() => (
            <Saloons />
          )}/>

        </div>
      </HashRouter>
    );
  }
}
