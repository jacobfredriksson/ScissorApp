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

      choosenSaloon: []

    }
  }

  selectSaloon(e, selected) {
    this.setState({choosenSaloon: [selected]})
  }


  updatePrice(e) {
    const minMaxValues = e.target.value.split("-")
    const allSaloons = this.state.allSaloons

    let hej = allSaloons.filter((el,i) => el.price >= minMaxValues[0] && el.price <= minMaxValues[1])
    this.setState({filtredSaloons: hej})
  }



  render() {
    return (
      <div>
        <Home
            choosenSaloon={this.state.choosenSaloon}
            price={this.state.price}
            salonger={this.state.salonger}
            filtredSaloons={this.state.filtredSaloons}
            updatePrice={this.updatePrice.bind(this)}
            selectSaloon={this.selectSaloon.bind(this)}
        />
      </div>
    );
  }
}
