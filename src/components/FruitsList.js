import React, { Component } from 'react';

export class FruitsList extends Component {

  constructor() {
    super();
    this.state = { fruit: '', fruits: [] }
  }

  handleChange(event) {
    this.setState({ fruit: event.target.value })
  }

  addItem() {
    this.state.fruits.push(this.state.fruit)
    this.setState({ fruits: this.state.fruits })
  }

  render() {
    return (
       <div className="container">
        Fruit name: <input value={this.state.fruit} onChange={(event) => this.handleChange(event)} ></input>
        <button onClick={() => this.addItem()} >toAdd</button>
        {this.state.fruits.map(( fruit ) =>
          <ul className="list-group" style={{textAlign: 'left'}}>
            <li className="list-group-item list-group-item-info">{fruit}</li>
          </ul>)}
      </div>);
  }
}