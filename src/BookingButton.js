import React, { Component } from 'react';
import './css/BookingButton.css'

export default class BookingButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={() => this.props.booking()} className={this.props.className} name={this.props.name}>Bokning</button>
    );
  }
}
