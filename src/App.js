import React, { Component } from 'react'
import './css/App.css'
import Home from './Home'


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
      },

      hair: {
        value: false,
        name: 'hair'
      }
    }
  }

  home() {
    this.setState({
      home: true
    })
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

  hairAlt() {
    this.setState({
      hair: true
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


  render() {
    return (
      <div>
        <Home saloon={this.saloon.bind(this)}
              home={this.home.bind(this)}
        />
        {this.allSalons()}
      </div>
    );
  }
}
