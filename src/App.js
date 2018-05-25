import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {
  render() {

    const name = "Dee";

    const students = [
      {
        name: "Harriet Potter",
        age: 18,
        email: "harriet@hogwarts.edu"
      },
      {
        name: "Ada",
        age: 10,
        email: "ada@hogwarts.edu"
      }
    ]

    const studentComponents = students.map ((student) => {
      return (
        <li key={student.email}>
          <Student
            name={student.name}
            email={student.email}
            age={student.age}
          />
        </li>
      );
    });

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
        <ul>{studentComponents}</ul>
      </div>
    );
  }
}

export default App;
