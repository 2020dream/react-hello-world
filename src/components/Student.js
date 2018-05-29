import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends Component {

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
        <p>Age: {studentAge}</p>
        <p>Email: {studentEmail}</p>
      </article>
    );
  }

}

export default Student;
