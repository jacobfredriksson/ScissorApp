import React, { Component } from 'react';
import './css/LoginButton.css'

export default class LoginButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={() => this.props.login()} className={this.props.className} name={this.props.name}>Logga in</button>
    );
  }
}
