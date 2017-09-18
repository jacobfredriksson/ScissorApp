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
      },

      salonger: []
    }
  }

  home() {
    this.setState({
      home: true
    })
  }




  componentDidMount() {
      fetch('http://localhost/Scissorapp/Resources/AllSalons.js')
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          this.setState({
            salonger: data
          })
      })
    }

  // allSalons() {
  //   fetch('http://localhost/Scissorapp/Resources/AllSalons.js')
  //     .then(resp => resp.json())
  //     .then(function (data){
  //       console.log(data[0].open)
  //       let hairSalons = data;
  //       let myHairSalons = hairSalons.map(x =>
  //         `
  //           <h1> ${data[1].name} </h1>
  //         `
  //       )
  //       this.setState({
  //         salonger: myHairSalons
  //       })
  //   })
  // }

    test() {

      this.state.salonger.map((bajs, korv) =>
      <h1> {bajs.name} </h1>
    )
    }



  render() {
    return (
      <div>
        <Home
            salonger={this.state.salonger}
        />
        {/* {this.allSalons()} */}
      </div>
    );
  }
}
