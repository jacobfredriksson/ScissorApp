import React, { Component } from 'react';
import './css/ProfileButton.css'

export default class ProfileButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={() => this.props.profile()} className={this.props.className} name={this.props.name}>Min profil</button>
    );
  }
}
