import React, { Component } from 'react'
import './css/App.css'
import Home from './Home'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      salonger: [],

      allSaloons: [],

      filtredSaloons: [],

      price: '',

    }
  }


  updatePrice(e) {
    const minMaxValues = e.target.value.split("-")
    let price = this.state.price;
    this.setState({price})

    const allSaloons = this.state.allSaloons

    let hej = allSaloons.filter((el,i) => el.price >= minMaxValues[0] && el.price <= minMaxValues[1])
    this.setState({filtredSaloons: hej})
  }


  componentDidMount() {
    fetch('http://localhost/Scissorapp/Resources/AllSalons.js')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          salonger: data[0],
          allSaloons: data,
          filtredSaloons: data
        })
    })
  }

  filterByPrice() {



  }


  render() {
    return (
      <div className="container-fluid">
        <Home
            price={this.state.price}
            salonger={this.state.salonger}
            allSaloons={this.state.allSaloons}
            filtredSaloons={this.state.filtredSaloons}
            updatePrice={this.updatePrice.bind(this)}
            filterByPrice={this.filterByPrice.bind(this)}

        />
      </div>
    );
  }
}
