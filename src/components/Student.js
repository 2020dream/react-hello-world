import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends Component {
  constructor() {
    super();

    this.state = {
      isPresent: true
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool,
  }

  isTopStudent = () => {
    if (this.props.studentData.name === 'Ada') {
      return 'top-student';
    }
    return 'student'
  }

  onToggleButton = () => {
    // const isPresent = !this.state.isPresent;
    this.setState({
      // isPresent,
      isPresent: !this.state.isPresent
    });
  }

  render() {
    // const studentStyle = {
    //   color: 'purple',
    //   fontSize: '14pt',
    // }

    const studentName = this.props.studentData.name;
    const studentEmail = this.props.studentData.email;
    const studentAge = this.props.studentData.age;

    return (
      <article
      className={this.isTopStudent()}>
        <h3>{studentName}</h3>
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
