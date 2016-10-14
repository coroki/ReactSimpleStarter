import React, { Component } from 'react';
import Title from './title';

export default class Header extends Component {

  onInputChange(e){
    this.props.updateHeader(e.target.value);
  }

  render() {
    return (
      <header>
        <Title text={this.props.title} />
        <input value={this.props.title} onChange={this.onInputChange.bind(this)} />
      </header>
    );
  }
}
