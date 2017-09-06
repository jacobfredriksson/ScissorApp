import React, { Component } from 'react';
import BackButton from './BackButton'

export default class LoginPage extends Component {



  render() {
    return (
      <div>
        <p> Välkommen till Loginsidan </p>
        <BackButton className={this.props.className}/>
      </div>
    );
  }
}
