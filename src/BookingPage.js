import React, { Component } from 'react';
import BackButton from './BackButton'

export default class BookingPage extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <p> Välkommen till Bokning </p>
        <BackButton className={this.props.className}/>
      </div>
    );
  }
}
