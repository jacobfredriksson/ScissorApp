import React, { Component } from 'react';
import Logo from './Logo';
import Categories from './Categories';
import Footer from './Footer';
import BookingPage from './BookingPage';
import FavoritePage from './FavoritePage';
import ProfilePage from './ProfilePage';
import Salons from './Salons';
import SchedulePage from './SchedulePage';
import ChooseSalon from './ChooseSalon';

import {HashRouter, Route, Switch} from 'react-router-dom';

export default class Home extends Component {



  render() {
    return (
      <HashRouter>
        <div>
          <Switch>

            <Route exact path="/" render={() => (
              <div>
                <Logo />
                <Categories />
                <Footer />
              </div>
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

            <Route exact path="/salons" render={() => (
              <div>
                <Logo />
                <Salons
                  filtredsalons={this.props.filtredsalons}
                  selectedsalon={this.props.selectedsalon}
                />
              </div>
            )}/>

            <Route exact path="/Choosesalon" render={() => (
              <ChooseSalon
                updatePrice={this.props.updatePrice.bind(this)}
                selectsalon={this.props.selectsalon.bind(this)}
                allsalons={this.props.allsalons}
                filtredsalons={this.props.filtredsalons}
                price={this.props.price}
              />
            )}/>

          </Switch>
        </div>
      </HashRouter>
    );
  }
}
