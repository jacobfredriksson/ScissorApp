import React, { Component } from 'react';
import BookingPage from './BookingPage';
import FavoritePage from './FavoritePage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import Saloons from './Saloons';
import Logo from './Logo';
import {HashRouter, Link, Route} from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <HashRouter>
        <div className="container">
          <Logo />
          <div className="col-sm-12">
            <h3 className="text-center">Hår</h3>
          </div>

          <div className="col-sm-12">
            <h3 className="text-center">Naglar</h3>
          </div>

          <div className="col-sm-12">
            <h3 className="text-center">Hud</h3>
          </div>

          <div className="col-sm-12">
            <h3 className="text-center">Massage</h3>
          </div>

          <div className="col-sm-12">
            <h3 className="text-center">Ansikte</h3>
          </div>


          <div className="col-sm-12 text-center">

            <button> <Link to="/BookingPage">Boka </Link> </button>

            <button> <Link to="/FavoritePage">Favoriter </Link> </button>

            <button> <Link to="/LoginPage">Logga in </Link> </button>

            <button> <Link to="/ProfilePage">Profil </Link> </button>

            <button> <Link to="/Saloons">Salonger </Link> </button>
          </div>

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
