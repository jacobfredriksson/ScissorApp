import React, { Component } from 'react';
import Logo from './Logo';
import Categories from './Categories';
import Footer from './Footer';
import BookingPage from './BookingPage';
import FavoritePage from './FavoritePage';
import ProfilePage from './ProfilePage';
import Saloons from './Saloons';
import SchedulePage from './SchedulePage';

import {HashRouter, Route, Switch} from 'react-router-dom';

export default class Home extends Component {



  render() {
    return (
      <HashRouter>
        <div className="container-fluid">
          <Logo />
          <Switch>

            <Route exact path="/" render={() => (
              <Categories />
            )}/>

            <Route exact path="/BookingPage" render={() => (
              <BookingPage />
            )}/>

            <Route exact path="/FavoritePage" render={() => (
              <FavoritePage />
            )}/>

            <Route exact path="/Schedule" render={() => (
              <SchedulePage />
            )}/>

            <Route exact path="/ProfilePage" render={() => (
              <ProfilePage />
            )}/>

            <Route exact path="/Saloons" render={() => (
              <Saloons
                      salonger={this.props.salonger}
              />
            )}/>
          </Switch>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}
