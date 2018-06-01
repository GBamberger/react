import React, { Component } from 'react';
import { Product } from './Product';
import { Message } from './Message';
import { User } from './User';
import { FruitsList } from './FruitsList';
import { Calculator } from './Calculator';
import { CreateAccount } from './CreateAccount';

export default class App extends Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello profesor Aron, it's Gaëllita :-)</h1>
        <hr color='red'/>
        <h2>Introduction</h2>
        <Product name='Gaëlle'/>
        <Message message='Hello world!'/>
        <User/>
        <hr color='red'/>
        <h2>Exercice 1</h2>
        <FruitsList/>
        <hr color='red'/>
        <h2>Exercice 2</h2>
        <Calculator/>
        <hr color='red'/>
        <h2>Exercice 3</h2>
        <CreateAccount/>
      </div>);
  }
}