import React, { Component } from 'react';
import BackButton from './BackButton'

export default class ProfilePage extends Component {



  render() {
    return (
      <div>
        <p> Välkommen till Profilen </p>
        <BackButton className={this.props.className}
        />
      </div>
    );
  }
}
