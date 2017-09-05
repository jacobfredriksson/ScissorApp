import React, { Component } from 'react'
import './css/App.css'
import Home from './Home'
import Saloons from './Saloons'
import BookingButton from './BookingButton'
import FavoriteButton from './FavoriteButton'
import LoginButton from './LoginButton'
import ProfileButton from './ProfileButton'
import ScheduleButton from './ScheduleButton'
import SchedulePage from './SchedulePage'
import ProfilePage from './ProfilePage'
import LoginPage from './LoginPage'
import FavoritePage from './FavoritePage'
import BookingPage from './BookingPage'
import BackButton from './BackButton'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      home: {
        value: false,
        name: 'home'
      },

      saloon: {
        value: false,
        name: 'saloon'
      },

      booking: {
        value: false,
        name: 'booking'
      },

      favorite: {
        value: false,
        name: 'favorite'
      },

      login: {
        value: false,
        name: 'login'
      },

      profile: {
        value: false,
        name: 'profile'
      },

      schedule: {
        value: false,
        name: 'schedule'
      }
    }
  }


  saloon() {
    this.setState({
      saloon: true
    })
  }

  schedule() {
    this.setState({
      schedule: true
    })
  }

  booking() {
    this.setState({
      booking: true
    })
  }

  favorite() {
    this.setState({
      favorite: true
    })
  }

  login() {
    this.setState({
      login: true
    })
  }

  profile() {
    this.setState({
      profile: true
    })
  }

  frontPage() {
    this.setState({
      home: true
    })
  }

  allSalons() {
    fetch('http://localhost/Scissorapp/Resources/AllSalons.js')
      .then(resp => resp.json())
      .then(function (data){
      let hairSalons = data
      console.log(hairSalons)
    })
  }



  renderStartState() {
    if(this.state.profile === true) {
      return [
        <ProfilePage />
      ]
    } else if (this.state.schedule === true) {
      return [
        <SchedulePage />
      ]
    } else if (this.state.saloon === true) {
      return [
        <Saloons />
      ]
    } else if (this.state.login === true) {
      return [
        <LoginPage />
      ]
    } else if (this.state.booking === true) {
      return [
        <BookingPage />
      ]
    } else if (this.state.favorite === true) {
      return [
        <FavoritePage />
      ]
    } else if (this.state.home === true) {
      return [
        <Home
          saloon={this.saloon.bind(this)}
          schedule={this.schedule.bind(this)}
          booking={this.booking.bind(this)}
          favorite={this.favorite.bind(this)}
          profile={this.profile.bind(this)}
          login={this.login.bind(this)}
          frontPage={this.frontPage.bind(this)}
        />
      ]
    } else {
      return [
        <div>
          <Home
            saloon={this.saloon.bind(this)}
            schedule={this.schedule.bind(this)}
            booking={this.booking.bind(this)}
            favorite={this.favorite.bind(this)}
            profile={this.profile.bind(this)}
            login={this.login.bind(this)}
            frontPage={this.frontPage.bind(this)}
          />
        </div>
      ]
    }
  }




  render() {
    return (
      <div>
        {this.renderStartState()}
        {this.allSalons()}
      </div>
    );
  }
}
