import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Ada',
      isPresent: true
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
  }

  isTopStudent = () => {
    if (this.state.name === 'Ada') {
      return 'top-student';
    }
    return 'student'
  }

  // arrow function: this is Student
  onToggleButton = () => {
    // const isPresent = !this.state.isPresent;
    this.setState({
      // isPresent,
      isPresent: !this.state.isPresent
    });
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    // const studentName = this.props.studentData.name;
    // const studentEmail = this.props.studentData.email;
    // const studentAge = this.props.studentData.age;

    const studentEmail = this.props.email;
    const studentAge = this.props.age;

    return (
      <article
      className={this.isTopStudent()}>
        <h3>{this.state.name}</h3>
        <input onChange={ this.onNameChange } type="text" name="name" />
        <h4>
          {this.state.isPresent? "In class" : "Absent"}
        </h4>
        <p>Age: {studentAge}</p>
        <p>Email: {studentEmail}</p>
        <button onClick={ this.onToggleButton }>Toggle Present</button>
      </article>
    );
  }

}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
}

export default Student;
