import React, { Component } from 'react';

export class CreateAccount extends Component {

  constructor() {
    super();
    this.state = { name: '', password: '', passwordConfirm: '', passwordValid: false, message: '' }
  }

  onChangeName(event) {
    this.setState({ name: event.target.value })
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value })
  }

  onChangePasswordConfirm(event) {
    this.setState({ passwordConfirm: event.target.value })
  }

  createAccount() {
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({ passwordValid: true, message: "Account created!" })
    }
    else {
      this.setState({ passwordValid: false, message: "Your password and your confirm password aren't the same!" })
    }
  }

  render() {
    return (
      <div >
        <table>
          <tr>
            <td style={{ textAlign: 'left' }} >User:</td>
            <td><input value={this.state.name} onChange={(event) => this.onChangeName(event)} required></input></td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }} >Password:</td>
            <td><input type="password" value={this.state.password} onChange={(event) => this.onChangePassword(event)} required></input></td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }} >Confirm password:</td>
            <td><input type="password" value={this.state.passwordConfirm} onChange={(event) => this.onChangePasswordConfirm(event)} required></input></td>
          </tr>
        </table>
        {this.state.name.length != 0 ? <hr /> : ""}
        <button onClick={() => this.createAccount()} >Create account</button>
        {this.state.message}
      </div>);
  }
}