import React, { Component } from 'react';

class Student extends Component {

  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  // }

  render() {
    const studentStyle = {
      color: 'purple',
      fontSize: '14pt',
    }

    const studentName = this.props.studentData.name;
    const studentEmail = this.props.studentData.email;
    const studentAge = this.props.studentData.age;

    return (
      <article style={studentStyle}>
        <h3>{studentName}</h3>
        <p>Age: {studentAge}</p>
        <p>Email: {studentEmail}</p>
      </article>
    );
  }

}

export default Student;
