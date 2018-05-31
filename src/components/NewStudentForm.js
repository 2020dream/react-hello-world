import React, { Component } from 'react';
import './NewStudentForm.css';

class NewStudentForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
    };
  }

  onNameChange = (event) => {
    const name = event.target.value;

    this.setState({
      name,
    });
    console.log(name);
  }

  onEmailChange = (event) => {
    const email = event.target.value;

    this.setState({
      email,
    });
    console.log(email);
  }

  render() {
    return (
      <div>
        <form className="new-student-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              onChange={this.onNameChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              onChange={this.onEmailChange}
              value={this.state.email}
            />
          </div>
          <input
            className="button success"
            type="submit"
            value="Add Student"
          />
        </form>
      </div>
    );
  }

}

export default NewStudentForm;
