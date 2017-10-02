import React, { Component } from 'react';
import Logo from './Logo';
import Categories from './Categories';
import Footer from './Footer';
import BookingPage from './BookingPage';
import FavoritePage from './FavoritePage';
import ProfilePage from './ProfilePage';
import Saloons from './Saloons';
import SchedulePage from './SchedulePage';
import ChooseSaloon from './ChooseSaloon';

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

            <Route exact path="/Saloons" render={() => (
              <div>
                <Logo />
                <Saloons
                  filtredSaloons={this.props.filtredSaloons}
                  selectedSaloon={this.props.selectedSaloon}
                />
              </div>
            )}/>

            <Route exact path="/ChooseSaloon" render={() => (
              <ChooseSaloon
                updatePrice={this.props.updatePrice.bind(this)}
                selectSaloon={this.props.selectSaloon.bind(this)}
                allSaloons={this.props.allSaloons}
                filtredSaloons={this.props.filtredSaloons}
                price={this.props.price}
              />
            )}/>
            
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
