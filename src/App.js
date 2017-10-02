import React, { Component } from 'react'
import './css/App.css'
import Home from './Home'
import AllSalons from './Resources/AllSalons'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allSaloons: AllSalons,

      filtredSaloons: AllSalons,

      selectedSaloon: []
    }
  }

  selectSaloon(e, selected) {
    this.setState({selectedSaloon: [selected]})
  }

  updatePrice(e) {
    const minMaxValues = e.target.value.split("-")
    const allSaloons = this.state.allSaloons

    let filtredSaloons = allSaloons.filter((el,i) => el.price >= minMaxValues[0] && el.price <= minMaxValues[1])
    this.setState({filtredSaloons: filtredSaloons})
  }

  render() {
    return (
      <div>
        <Home
          selectedSaloon={this.state.selectedSaloon}
          filtredSaloons={this.state.filtredSaloons}
          updatePrice={this.updatePrice.bind(this)}
          selectSaloon={this.selectSaloon.bind(this)}
        />
      </div>
    );
  }
}
