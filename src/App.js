import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {
  render() {

    const name = "Dee";

    // Two ways to dynamically render variable value in HTML.
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {name} is totally awesome.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Hello World!!! {`${name} is totally awesome.`}
        </p>
        <img src="http://via.placeholder.com/350x150" className="trek" alt="trek" />
        <Student />
      </div>
    );
  }
}

export default App;
