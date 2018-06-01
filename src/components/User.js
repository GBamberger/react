import React, { Component } from 'react';

export class User extends Component {

  constructor() {
    super();
    this.state = { name: '' }
  }

  onChangeName(event) {
    this.setState({ name: event.target.value })
  }

  toUpperCase() {
    this.setState({ name: this.state.name.toUpperCase() })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }} >
        User: <input value={this.state.name} onChange={(event) => this.onChangeName(event)} ></input>
        <hr />
        {this.state.name}
        {this.state.name.length != 0 ? <hr /> : ""}
        <button onClick={() => this.toUpperCase()} >toUpperCase</button>
      </div>);
  }
}