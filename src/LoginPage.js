import React, { Component } from 'react';
import BackButton from './BackButton'

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        <p> Välkommen till Loginsidan </p>
        <BackButton className={this.props.className}/>
      </div>
    );
  }
}
