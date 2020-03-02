import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'This is the state text'
    };
  }

  updateText(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <input type='text' onChange={this.updateText.bind(this)} />
          <h1>{this.state.txt}</h1>
        </header>
      </div>
    );
  }
}

export default App;
