import React, { Component } from 'react'
import './css/App.css'
import Home from './Home'
import AllSalons from './Resources/AllSalons'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allsalons: AllSalons,

      filtredsalons: AllSalons,

      selectedsalon: []
    }
  }

  selectsalon(e, selected) {
    this.setState({selectedsalon: [selected]})
  }

  updatePrice(e) {
    const minMaxValues = e.target.value.split("-")
    const allsalons = this.state.allsalons

    let filtredsalons = allsalons.filter((el,i) => el.price >= minMaxValues[0] && el.price <= minMaxValues[1])
    this.setState({filtredsalons: filtredsalons})

    if (filtredsalons.length === 0) {
      this.setState({filtredsalons: AllSalons})
    }
  }

  render() {
    return (
      <div>
        <Home
          selectedsalon={this.state.selectedsalon}
          filtredsalons={this.state.filtredsalons}
          updatePrice={this.updatePrice.bind(this)}
          selectsalon={this.selectsalon.bind(this)}
        />
      </div>
    );
  }
}
