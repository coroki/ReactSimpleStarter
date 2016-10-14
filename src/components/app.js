import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      headerText: "Hello World!",
      messageText: "This is the message."
    };
  }

  updateHeader(headerText){
    this.setState({headerText});
  }

  render() {
    const title = "Hello World!"
    return (
      <div>
        <Header updateHeader={this.updateHeader.bind(this)} title={this.state.headerText} />
        {this.state.messageText}
        <Footer />
      </div>
    );
  }
}
