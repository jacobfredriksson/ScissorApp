import React, { Component } from 'react';
import BackButton from './BackButton'

export default class BookingPage extends Component {



  render() {
    return (
      <div>
        <p> Välkommen till Bokning </p>
        <BackButton className={this.props.className}/>
      </div>
    );
  }
}
