import React, { Component } from 'react';
import './css/HomeButton.css'

export default class HomeButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={() => this.props.saloon()} className={this.props.className}>Salonger</button>
    );
  }
}
