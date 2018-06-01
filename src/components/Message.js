import React, { Component } from 'react';

export class Message extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        Message: {this.props.message}
      </div>);
  }
}