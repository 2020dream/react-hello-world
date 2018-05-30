import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    present: PropTypes.bool,
  }

  isTopStudent = () => {
    if (this.state.name === 'Ada') {
      return 'top-student';
    }
    return 'student'
  }

  // arrow function: this is Student
  onTogglePresent = () => {
    console.log(this);
    this.props.onStudentPresentChange(this.props.index);
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }


  render() {
    const studentEmail = this.props.email;
    const studentAge = this.props.age;

    return (
      <article
      className={this.isTopStudent()}>
        <h3>{this.props.name}</h3>
        <input onChange={ this.onNameChange } type="text" name="name" />
        <h4>
          {this.props.present? "In class" : "Absent"}
        </h4>
        <button onClick={ this.onTogglePresent }>Toggle Present</button>
        <p>Age: {studentAge}</p>
        <p>Email: {studentEmail}</p>
      </article>
    );
  }
}

export default Student;
