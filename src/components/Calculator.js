import React, { Component } from 'react';

export class Calculator extends Component {

  constructor() {
    super();
    this.state = { number1: 0, number2: 0, result: 0 }
  }

  handleChangeNumber1(event) {
    this.setState({ number1: Number(event.target.value) })
  }

  handleChangeNumber2(event) {
    this.setState({ number2: Number(event.target.value) })
  }

  addNumbers() {
    this.setState({ result: this.state.number1 + this.state.number2 })
  }

  substractNumbers() {
    this.setState({ result: this.state.number1 - this.state.number2 })
  }

  multiplyNumbers() {
    this.setState({ result: this.state.number1 * this.state.number2 })
  }

  divideNumbers() {
    this.setState({ result: this.state.number1 / this.state.number2 })
  }

  clearResult() {
    this.setState({ result: 0 })
  }

  render() {
    return (
      <div className="container">
        <table>
          <tr>
            <td>
              Number 1: <input value={this.state.number1} onChange={(event) => this.handleChangeNumber1(event)} ></input>
            </td>
            <td>
            </td>
            <td>
              <button onClick={() => this.addNumbers()} >+</button>
            </td>
            <td>
              <button onClick={() => this.substractNumbers()} >-</button>
            </td>
            <td>
              <button onClick={() => this.multiplyNumbers()} >x</button>
            </td>
            <td>
              <button onClick={() => this.divideNumbers()} >/</button>
            </td>
            <td>
              <button onClick={() => this.clearResult()} >clear</button>
            </td>
          </tr>
          <tr>
            <td>
              Number 2: <input value={this.state.number2} onChange={(event) => this.handleChangeNumber2(event)} ></input>
            </td>
          </tr>
        </table>
        <hr />
        Result: {this.state.result}
      </div>);
  }
}